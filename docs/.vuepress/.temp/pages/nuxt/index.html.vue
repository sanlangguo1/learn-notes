<template><div><h3 id="nuxt3-js-入门教程" tabindex="-1"><a class="header-anchor" href="#nuxt3-js-入门教程" aria-hidden="true">#</a> Nuxt3.js 入门教程</h3>
<h3 id="第一步-安装nuxt3-js" tabindex="-1"><a class="header-anchor" href="#第一步-安装nuxt3-js" aria-hidden="true">#</a> 第一步：安装Nuxt3.js</h3>
<p>在开始使用Nuxt3.js之前，我们首先需要安装Node.js。请访问Node.js官方网站下载并安装最新版本。安装完成后，可以通过命令行输入以下命令来验证安装是否成功：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>node -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，我们将使用npm（Node包管理器）来安装Nuxt3.js。在命令行中输入以下命令：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npx nuxi init nuxt3-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，进入你的新项目文件夹：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cd nuxt3-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，启动你的Nuxt3应用：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npx nuxi dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，你可以在浏览器中打开 http://localhost:3000 来查看你的Nuxt3应用。</p>
<h3 id="第二步-理解nuxt3-js的目录结构" tabindex="-1"><a class="header-anchor" href="#第二步-理解nuxt3-js的目录结构" aria-hidden="true">#</a> 第二步：理解Nuxt3.js的目录结构</h3>
<p>在Nuxt3项目中，你会看到以下的主要目录结构：</p>
<ul>
<li>
<p><code v-pre>app.vue</code>：这是主应用布局文件，所有的页面都会被加载到这个文件中。</p>
</li>
<li>
<p><code v-pre>pages</code>：这个目录用于组织应用的视图以及定义路由。Nuxt.js框架根据这个目录下的所有<code v-pre>.vue</code>文件自动生成应用的路由配置。</p>
</li>
<li>
<p><code v-pre>components</code>：这个目录用于存放你的Vue.js组件。Nuxt3.js允许你在这个目录中的组件中使用自动导入。</p>
</li>
<li>
<p><code v-pre>public</code>：这个目录用于静态文件，这些文件会被直接映射到服务器根路径。例如：<code v-pre>/public/robots.txt</code> 将映射为 <code v-pre>/robots.txt</code>。</p>
</li>
<li>
<p><code v-pre>assets</code>：这个目录用于组织未编译的静态资源如LESS、SASS或JavaScript。</p>
</li>
<li>
<p><code v-pre>plugins</code>：这个目录用于组织那些需要在根vue.js应用实例化之前运行的Javascript插件。</p>
</li>
<li>
<p><code v-pre>store</code>：这个目录用于Vuex Store 文件。Nuxt.js框架会查找并自动导入这个目录中的Vuex模块。</p>
</li>
<li>
<p><code v-pre>nuxt.config.js</code>：这是Nuxt.js的配置文件，用于组织Nuxt.js应用的个性化配置，以便覆盖默认配置。</p>
</li>
<li>
<p><code v-pre>package.json</code>：这个文件包含应用的所有依赖信息以及运行脚本。它是npm包管理器的标准文件。</p>
</li>
</ul>
<p>以上就是Nuxt3项目的主要目录结构。在实际开发中，你可能还会根据需要创建其他目录，例如用于API请求的<code v-pre>api</code>目录，用于测试的<code v-pre>test</code>目录等。</p>
<h3 id="第三步-创建你的第一个页面" tabindex="-1"><a class="header-anchor" href="#第三步-创建你的第一个页面" aria-hidden="true">#</a> 第三步：创建你的第一个页面</h3>
<p>在<code v-pre>pages</code>目录下创建一个新的<code v-pre>index.vue</code>文件，并添加以下代码：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>欢迎来到Nuxt3!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存并回到浏览器，你将看到更新的首页。</p>
<h3 id="第四步-学习更多" tabindex="-1"><a class="header-anchor" href="#第四步-学习更多" aria-hidden="true">#</a> 第四步：学习更多</h3>
<h4 id="nuxtlayout" tabindex="-1"><a class="header-anchor" href="#nuxtlayout" aria-hidden="true">#</a> NuxtLayout</h4>
<p>在Nuxt3中，布局是用来定义应用的查看和结构的，它可以让你在不同的页面之间共享相同的结构，而不需要在每个页面中都重复相同的模板代码。</p>
<p>以下是Nuxt3中布局的使用方式：</p>
<ol>
<li>创建布局文件</li>
</ol>
<p>在<code v-pre>layouts</code>目录下创建一个新的布局文件，例如<code v-pre>default.vue</code>。这个文件应该包含一个Vue组件，并且必须包含一个 <code v-pre>&lt;NuxtPage /&gt;</code> 组件，这个 <code v-pre>&lt;NuxtPage /&gt;</code> 组件将被替换为当前页面的内容。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- navigation links --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtPage</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- footer --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>使用布局</li>
</ol>
<p>在你的页面组件中，你可以通过导出一个名为<code v-pre>layout</code>的变量来设置页面的布局。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> layout <span class="token operator">=</span> <span class="token string">'default'</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> layout <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们设置了页面的布局为<code v-pre>default</code>，这意味着Nuxt将使用<code v-pre>layouts/default.vue</code>作为页面的布局。</p>
<p>如果你不设置页面的布局，Nuxt将默认使用<code v-pre>layouts/default.vue</code>作为页面的布局。如果<code v-pre>layouts/default.vue</code>不存在，那么Nuxt将只渲染页面的内容。</p>
<ol start="3">
<li>动态布局</li>
</ol>
<p>有时，你可能希望根据一些条件动态地改变页面的布局。你可以通过返回一个函数来动态设置页面的布局。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> isUserLoggedIn <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">layout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> isUserLoggedIn<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">'private'</span> <span class="token operator">:</span> <span class="token string">'public'</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> layout <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们根据用户是否登录来动态设置页面的布局。如果用户已登录，我们使用<code v-pre>private</code>布局，否则我们使用<code v-pre>public</code>布局。</p>
<h4 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h4>
<p>在Nuxt3中，我们可以使用相同的方法来配置和使用axios，但是由于Nuxt3的一些新特性，我们需要稍作调整。</p>
<ul>
<li>安装依赖</li>
</ul>
<p>首先，我们需要安装 <code v-pre>@nuxtjs/axios</code> 模块：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @nuxtjs/axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>插件配置</li>
</ul>
<p>然后，我们创建一个名为 <code v-pre>constants.js</code> 的文件，用于存放一些常量：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// utils/constants.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SET_TOKEN</span> <span class="token operator">=</span> <span class="token string">'SET_TOKEN'</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SET_IDENTITY</span> <span class="token operator">=</span> <span class="token string">'SET_IDENTITY'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，我们创建一个名为 <code v-pre>axios.js</code> 的插件，用于配置axios：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// plugins/axios.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">SET_TOKEN</span><span class="token punctuation">,</span> <span class="token constant">SET_IDENTITY</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../utils/constants'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineNuxtPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'#app'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtPlugin</span><span class="token punctuation">(</span><span class="token parameter">nuxtApp</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> $axios<span class="token punctuation">,</span> store <span class="token punctuation">}</span> <span class="token operator">=</span> nuxtApp

  $axios<span class="token punctuation">.</span><span class="token function">onRequest</span><span class="token punctuation">(</span><span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>token
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">'Authorization'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  $axios<span class="token punctuation">.</span><span class="token function">onResponse</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span> response
    <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data <span class="token operator">?</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data <span class="token operator">:</span> response<span class="token punctuation">.</span>data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  $axios<span class="token punctuation">.</span><span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response <span class="token operator">&amp;&amp;</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> code <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">AUTH_ERRORS</span><span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token constant">SET_TOKEN</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
        store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token constant">SET_IDENTITY</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">ERRORS</span><span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token constant">ERRORS</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">throw</span> error
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>修改Nuxt配置</li>
</ul>
<p>最后，我们需要在 <code v-pre>nuxt.config.js</code> 文件中配置axios模块：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">BASE_API</span> <span class="token operator">=</span>
  process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_API</span> <span class="token operator">===</span> <span class="token string">'prod'</span> <span class="token operator">?</span> <span class="token string">'https://xingqiu.com'</span> <span class="token operator">:</span> <span class="token string">'https://xingqiu.cn'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">'@/plugins/axios'</span><span class="token punctuation">,</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'client'</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">baseUrl</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span> <span class="token operator">||</span> <span class="token constant">BASE_API</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'@nuxtjs/axios'</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">axios</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token constant">BASE_API</span> <span class="token operator">+</span> <span class="token string">'/api'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用axios发送请求</li>
</ul>
<p>在你的应用中，你可以使用 <code v-pre>app.$axios</code> 或 <code v-pre>$axios</code> 来发送HTTP请求：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nuxtApp <span class="token operator">=</span> <span class="token function">useNuxtApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> $axios <span class="token punctuation">}</span> <span class="token operator">=</span> nuxtApp
  data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> $axios<span class="token punctuation">.</span><span class="token function">$get</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，我们在 <code v-pre>plugins/axios.js</code> 中设置的 <code v-pre>Authorization</code> 头只会在客户端请求中携带。如果你在服务端发送请求，你需要单独设置 <code v-pre>Authorization</code>。</p>
<h4 id="服务端渲染部署" tabindex="-1"><a class="header-anchor" href="#服务端渲染部署" aria-hidden="true">#</a> 服务端渲染部署</h4>
<ul>
<li>
<p>项目配置</p>
</li>
<li>
<p>执行</p>
</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="nginx-配置" tabindex="-1"><a class="header-anchor" href="#nginx-配置" aria-hidden="true">#</a> nginx 配置</h4>
<ul>
<li>配置</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 通过 upstream nodejs 可以配置多台 nodejs 节点，做负载均衡
# keepalive 设置存活时间。如果不设置可能会产生大量的 timewait
# proxy_pass 反向代理转发 http://nodejs

upstream nodenuxt {
    server 127.0.0.1:3000; # nuxt 项目监听端口
    keepalive 64;
}
server {
  listen 80;
  server_name example.com www.example.com;

  location / {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Nginx-Proxy true;
    proxy_cache_bypass $http_upgrade;
    proxy_pass http://nodenuxt; # 反向代理
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>重启 nginx</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo service nginx restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="pm2-进程守护" tabindex="-1"><a class="header-anchor" href="#pm2-进程守护" aria-hidden="true">#</a> pm2 进程守护</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm i -g pm2
// nuxt-demo：项目目录
pm2 start npm --name "nuxt-demo" -- run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nuxt3-js是一个强大的框架-它有许多功能等待你去探索-例如服务端渲染、静态站点生成、模块系统等等。" tabindex="-1"><a class="header-anchor" href="#nuxt3-js是一个强大的框架-它有许多功能等待你去探索-例如服务端渲染、静态站点生成、模块系统等等。" aria-hidden="true">#</a> Nuxt3.js是一个强大的框架，它有许多功能等待你去探索，例如服务端渲染、静态站点生成、模块系统等等。</h4>
<p>为了更好地理解和使用Nuxt3.js，你可以访问其官方文档，那里有详细的指南和教程。</p>
</div></template>


