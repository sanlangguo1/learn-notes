<template><div><h2 id="vue2-和-vue3-有哪些区别" tabindex="-1"><a class="header-anchor" href="#vue2-和-vue3-有哪些区别" aria-hidden="true">#</a> vue2 和 vue3 有哪些区别</h2>
<h4 id="vue2-和-vue3-双向绑定方法不同" tabindex="-1"><a class="header-anchor" href="#vue2-和-vue3-双向绑定方法不同" aria-hidden="true">#</a> vue2 和 vue3 双向绑定方法不同</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Vue2 : Object.defineProperty()
***后添加的属性是劫持不到的

Vue3 : new Proxy()
***即使后添加的也可以劫持到***还不需要循环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set在vue3中没有-因为new-proxy不需要" tabindex="-1"><a class="header-anchor" href="#set在vue3中没有-因为new-proxy不需要" aria-hidden="true">#</a> $set在vue3中没有，因为new Proxy不需要</h4>
<h4 id="关于写法" tabindex="-1"><a class="header-anchor" href="#关于写法" aria-hidden="true">#</a> 关于写法</h4>
<ul>
<li>
<p>vue2是选项式API</p>
</li>
<li>
<p>vue3可以向下兼容(选项式API)，</p>
</li>
</ul>
<h4 id="v-if和v-for优先级不同了" tabindex="-1"><a class="header-anchor" href="#v-if和v-for优先级不同了" aria-hidden="true">#</a> v-if和v-for优先级不同了</h4>
<ul>
<li>vue2 v-for优先级高</li>
<li>vue3 v-if 优先级高</li>
</ul>
</div></template>

