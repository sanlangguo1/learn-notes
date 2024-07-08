import{_ as n,o as s,c as a,e as t}from"./app-C-plYzj2.js";const p={},e=t(`<h3 id="微信公众号开发之监听返回事件" tabindex="-1"><a class="header-anchor" href="#微信公众号开发之监听返回事件" aria-hidden="true">#</a> 微信公众号开发之监听返回事件</h3><ul><li>项目中经常会遇到，用户填写表单之类的内容，填了一部分之后，可能会返回上一页，此时需要给用户一个提示，这就需要监听微信浏览器的返回事件，直接上代码</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>history <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>pushState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">)</span>
      window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;popstate&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>backChange<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// false阻止默认事件</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">destroyed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;popstate&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>backChange<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// false阻止默认事件</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token comment">// 监听微信返回按钮</span>
   <span class="token function">backChange</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// const that = this</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;监听到了&#39;</span><span class="token punctuation">)</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;reason&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">)</span>
       <span class="token comment">// 这里是如果用户填写信息，自定义弹框显示，提示用户</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>leaveDialog <span class="token operator">=</span> <span class="token boolean">true</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","wechat.html.vue"]]);export{k as default};
