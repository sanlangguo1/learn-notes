<template><div><h2 id="原生微信小程序项目使用-taro" tabindex="-1"><a class="header-anchor" href="#原生微信小程序项目使用-taro" aria-hidden="true">#</a> 原生微信小程序项目使用 Taro</h2>
<h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3>
<ul>
<li>需求背景</li>
</ul>
<p>在目前原生微信小程序项目进行升级改版，并且旧版和新版在完全没有升级完之前，一直要保存新旧功能共存</p>
<h3 id="框架选择" tabindex="-1"><a class="header-anchor" href="#框架选择" aria-hidden="true">#</a> 框架选择</h3>
<table>
<thead>
<tr>
<th style="text-align:left">框架</th>
<th>优缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Taro</td>
<td>优点:跨端统一开发、使用React语法、插件生态丰富<br/>缺点:引入额外概念,学习成本较高,依赖React生态</td>
</tr>
<tr>
<td style="text-align:left">wepy</td>
<td>优点:使用类Vue.js语法,支持组件化和npm依赖<br/>缺点:功能受限,开发者社区较小</td>
</tr>
<tr>
<td style="text-align:left">uni-app</td>
<td>优点:跨端开发,使用Vue.js语法,生态较为完整<br/>缺点:多端支持略有不足,性能可能不如原生</td>
</tr>
</tbody>
</table>
<p>经过团队讨论推荐使用Taro框架,它拥有较为出色的多端适配能力和丰富的插件支持,是目前较为优秀的微信小程序跨端解决方案</p>
<h3 id="taro与微信原生小程序共存" tabindex="-1"><a class="header-anchor" href="#taro与微信原生小程序共存" aria-hidden="true">#</a> Taro与微信原生小程序共存</h3>
<ul>
<li>方案选择</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">方案</th>
<th>优缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Taro 可以把原生微信小程序应用转换为 Taro 项目，从而使项目成为多端应用</td>
<td>优点：一次转换，一劳永逸，避免后续操作<br />缺点：转换后有些特性不支持，需要全局测试，耗费人力</td>
</tr>
<tr>
<td style="text-align:left">Taro 与原生微信小程序应用共存</td>
<td>优点：新老页面完全独立<br />缺点：每次更新新功能，需要对路径资源进行处理</td>
</tr>
</tbody>
</table>
<p>综合对比，共存方案相对稳定，资源的路径可以通过脚本或者公共函数进行处理</p>
<h3 id="具体实现" tabindex="-1"><a class="header-anchor" href="#具体实现" aria-hidden="true">#</a> 具体实现</h3>
<ul>
<li>项目结构分析</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>├── pages                       原生小程序主包页面文件
├── pages_compass               原生小程序分包页面文件
├── app<span class="token punctuation">.</span>wxss                    app 样式
├── app<span class="token punctuation">.</span>js                      原生小程序入口 js
├── node<span class="token operator">-</span>tools<span class="token punctuation">.</span>js               打包后，脚本处理资源的路径，减少手工改动，避免出现遗漏
├── taro                        taro 新项目文件
<span class="token operator">|</span>   ├── dist                    打包后的原生小程序产物
<span class="token operator">|</span>       ├── pages               打包后的主包页面文件
<span class="token operator">|</span>       └── app<span class="token punctuation">.</span>js              入口文件
<span class="token operator">|</span>       └── app<span class="token operator">-</span>origin<span class="token punctuation">.</span>wxss     app 样式
<span class="token operator">|</span>       └── common<span class="token punctuation">.</span>wxss         common 样式

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Taro 打包 dist 与 原生小程序融合</li>
</ul>
<ol>
<li>
<p>原生入口 app.js 引入 Taro dist 文件下的 app.js，只需改动一次</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'taro/dist/app.js'</span><span class="token punctuation">)</span>
<span class="token comment">// 原有 App 不需要任何改动</span>
<span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>原生入口 app.wxss 引入 Taro dist 文件下的 app-origin.wxss 和 common.wxss， 只需改动一次</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">"learn-taro/dist/app-origin.wxss"</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"learn-taro/dist/common.wxss"</span><span class="token punctuation">;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>更改 dist 下的资源路径，包括页面跳转和图片资源，每次打包需要自动更新或者手动微调</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// node-tools.js </span>
<span class="token doc-comment comment">/**
 * /pages/report/daily-report-list/daily-report-list
 * /pages/compass/index
 * /pages/more/index'
 * learn-taro/dist 以上老页面手动还原 
 * oldPages 替换 pages 先执行脚本后执行全局（./learn-taro/dist）替换
 */</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// // // 要替换的源字符串和目标字符串</span>
<span class="token keyword">const</span> sourceString <span class="token operator">=</span> <span class="token string">"pages/"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> targetString <span class="token operator">=</span> <span class="token string">"learn-taro/dist/pages/"</span><span class="token punctuation">;</span>
<span class="token comment">// const sourceString = "assets/";</span>
<span class="token comment">// const targetString = "learn-taro/dist/assets/";</span>


<span class="token comment">// 要替换的文件路径</span>
<span class="token keyword">const</span> directoryPath <span class="token operator">=</span> <span class="token string">'learn-taro/dist/'</span><span class="token punctuation">;</span>
<span class="token comment">// 递归遍历文件夹</span>
<span class="token keyword">function</span> <span class="token function">traverseDirectory</span><span class="token punctuation">(</span><span class="token parameter">dirPath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>dirPath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirPath<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> stats <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>stats<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">traverseDirectory</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">replaceContentInFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 替换文件内容</span>
  <span class="token keyword">function</span> <span class="token function">replaceContentInFile</span><span class="token punctuation">(</span><span class="token parameter">filePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">读取文件 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>filePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 时出错:</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> newContent <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>sourceString<span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> targetString<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newContent <span class="token operator">!==</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> newContent<span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">写入文件 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>filePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 时出错:</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">已将 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>filePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 中的所有 "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sourceString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" 替换为 "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>targetString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 开始遍历 dist 文件夹</span>
  <span class="token function">traverseDirectory</span><span class="token punctuation">(</span>directoryPath<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>
<p>⚠️注意包预览和上传，进行依赖分析，根据情况来减少包体积</p>
<p><img src="/img/wx-lib-view.png" alt=""></p>
</li>
</ol>
<h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h3>
<p><a href="https://docs.taro.zone/docs/taro-in-miniapp" target="_blank" rel="noopener noreferrer">Taro<ExternalLinkIcon/></a></p>
</div></template>


