<template><div><h1 id="mermaid-调试页面" tabindex="-1"><a class="header-anchor" href="#mermaid-调试页面" aria-hidden="true">#</a> Mermaid 调试页面</h1>
<p>这是一个用于调试 Mermaid 渲染的页面。</p>
<h2 id="测试代码块" tabindex="-1"><a class="header-anchor" href="#测试代码块" aria-hidden="true">#</a> 测试代码块</h2>
<div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre v-pre class="language-mermaid"><code><span class="token keyword">flowchart</span> LR
    A <span class="token arrow operator">--></span> B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="普通代码块对比" tabindex="-1"><a class="header-anchor" href="#普通代码块对比" aria-hidden="true">#</a> 普通代码块对比</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'这是普通的 JavaScript 代码块'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"这是 Python 代码块"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问此页面后，请打开浏览器开发者工具，检查上述代码块的实际 HTML 结构，特别是 class 属性。</p>
</div></template>


