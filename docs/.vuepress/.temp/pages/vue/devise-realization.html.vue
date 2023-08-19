<template><div><h1 id="vue-js-设计与实现" tabindex="-1"><a class="header-anchor" href="#vue-js-设计与实现" aria-hidden="true">#</a> Vue.js 设计与实现</h1>
<h2 id="_1-框架设计概览" tabindex="-1"><a class="header-anchor" href="#_1-框架设计概览" aria-hidden="true">#</a> ① 框架设计概览</h2>
<h3 id="第一章-权衡的艺术" tabindex="-1"><a class="header-anchor" href="#第一章-权衡的艺术" aria-hidden="true">#</a> 第一章：权衡的艺术</h3>
<ul>
<li>
<p>命令式 和 声明式</p>
<ul>
<li>命令式：关注过程</li>
<li>声明式：关注结果</li>
</ul>
</li>
<li>
<p>性能与可维护性的权衡</p>
<ul>
<li>
<p>命令式 与 声明式</p>
<ul>
<li>
<p>命令式</p>
<ul>
<li>直接修改的性能消耗</li>
</ul>
</li>
<li>
<p>声明式</p>
<ul>
<li>找出差异 + 直接修改</li>
</ul>
</li>
</ul>
</li>
<li>
<p>原生 JavaScript、innerHTML、虚拟 DOM</p>
<ul>
<li>
<p>心智负担</p>
<ul>
<li>虚拟 DOM &lt; innerHTML &lt; 原生 JavaScript</li>
</ul>
</li>
<li>
<p>性能</p>
<ul>
<li>innerHTML &lt; 虚拟 DOM &lt; 原生 JavaScript</li>
</ul>
</li>
<li>
<p>可维护性</p>
<ul>
<li>原生 JavaScript &lt; innerHTML &lt; 虚拟 DOM</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>运行时 和 编译时</p>
<ul>
<li>
<p>运行时：runtime</p>
<ul>
<li>
<p>利用 render 函数，直接把 虚拟 DOM  转化为 真实 DOM 元素</p>
<ul>
<li>没有编译过程，无法分析用户提供的内容</li>
</ul>
</li>
</ul>
</li>
<li>
<p>编译时：compiler</p>
<ul>
<li>
<p>直接把 template 模板中的内容，转化为 真实 DOM 元素</p>
<ul>
<li>可以分析用户提供的内容，没有运行时理论上性能会更好</li>
</ul>
</li>
</ul>
</li>
<li>
<p>运行时 + 编译时</p>
<ul>
<li>① 先把 template 模板转化为 render 函数</li>
<li>② 再利用 render 函数，把 虚拟 DOM 转化为 真实 DOM</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="第二章-框架设计的核心要素" tabindex="-1"><a class="header-anchor" href="#第二章-框架设计的核心要素" aria-hidden="true">#</a> 第二章：框架设计的核心要素</h3>
<ul>
<li>
<p>控制代码体积</p>
<ul>
<li>
<p>环境变量</p>
<ul>
<li><strong>DEV</strong></li>
</ul>
</li>
<li>
<p>Tree-Shaking</p>
<ul>
<li>ESM（ES Module）</li>
</ul>
</li>
</ul>
</li>
<li>
<p>输出不同的构建产物</p>
<ul>
<li>packages/vue/dist</li>
</ul>
</li>
<li>
<p>错误提示与处理</p>
<ul>
<li>统一的错误处理接口：callWithErrorHandling</li>
</ul>
</li>
<li>
<p>提升用户的开发体验</p>
<ul>
<li>心智负担低</li>
<li>便于调试</li>
</ul>
</li>
<li>
<p>良好的可维护性</p>
<ul>
<li>框架本身的可维护性：使用 TS 编写</li>
<li>对 TS 的友好支持：大量的类型判断与处理</li>
</ul>
</li>
</ul>
<h3 id="第三章-vue-js-3-的设计思路" tabindex="-1"><a class="header-anchor" href="#第三章-vue-js-3-的设计思路" aria-hidden="true">#</a> 第三章：Vue.js 3 的设计思路</h3>
<ul>
<li>
<p>描述 UI 的形式</p>
<ul>
<li>
<p>声明式的模板描述</p>
</li>
<li>
<p>命令式的 render 函数</p>
</li>
</ul>
</li>
<li>
<p>初始渲染器</p>
<ul>
<li>
<p>本质</p>
<ul>
<li>函数 createRenderer 的返回值（renderer 对象）</li>
</ul>
</li>
<li>
<p>renderer 对象</p>
<ul>
<li>
<p>包含 render 渲染函数</p>
<ul>
<li>
<p>参数</p>
<ul>
<li>vnode：虚拟 DOM 对象</li>
<li>container：挂载的容器，真实 DOM 元素</li>
</ul>
</li>
<li>
<p>作用</p>
<ul>
<li>把 vnode 挂载到 container 上</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>组件的本质</p>
<ul>
<li>一组 DOM 元素的封装</li>
</ul>
</li>
<li>
<p>模板（template） 的工作原理</p>
</li>
</ul>
<h2 id="_2-响应式系统" tabindex="-1"><a class="header-anchor" href="#_2-响应式系统" aria-hidden="true">#</a> ② 响应式系统</h2>
<h3 id="第四章-响应系统的作用与实现" tabindex="-1"><a class="header-anchor" href="#第四章-响应系统的作用与实现" aria-hidden="true">#</a> 第四章：响应系统的作用与实现</h3>
<ul>
<li>
<p>副作用函数 与 响应式数据</p>
<ul>
<li>
<p>副作用函数</p>
<ul>
<li>会产生副作用的函数</li>
</ul>
</li>
<li>
<p>响应式数据</p>
<ul>
<li>会导致视图变化的数据</li>
</ul>
</li>
</ul>
</li>
<li>
<p>响应式数据的实现</p>
<ul>
<li>
<p>核心逻辑</p>
<ul>
<li>数据读取：getter 行为</li>
<li>数据修改：setter 行为</li>
</ul>
</li>
<li>
<p>图示</p>
<ul>
<li>getter 行为</li>
<li>setter 行为</li>
</ul>
</li>
</ul>
</li>
<li>
<p>调度系统（scheduler）</p>
<ul>
<li>
<p>响应性的可调度性</p>
<ul>
<li>
<p>当数据更新的动作，触发副作用函数重新执行时，有能力决定：副作用函数（effect）执行的时机、次数以及方式</p>
<ul>
<li>有能力调整输出顺序</li>
</ul>
</li>
</ul>
</li>
<li>
<p>实现原理</p>
<ul>
<li>异步：Promise</li>
<li>队列：jobQueue</li>
</ul>
</li>
</ul>
</li>
<li>
<p>计算属性（computed）</p>
<ul>
<li>
<p>本质</p>
<ul>
<li>一个属性值，当依赖的响应式数据发生变化时，重新计算</li>
</ul>
</li>
<li>
<p>计算属性的实现原理</p>
</li>
</ul>
</li>
<li>
<p>惰性执行（lazy）</p>
<ul>
<li>boolean 型的值，可以被添加到 effect 函数中，用来控制副作用的执行</li>
</ul>
</li>
<li>
<p>watch 的实现原理</p>
<ul>
<li>
<p>本质</p>
<ul>
<li>观测一个响应式数据，当数据发生变化时，通知并执行相应的回调函数</li>
</ul>
</li>
<li>
<p>实现原理</p>
</li>
</ul>
</li>
<li>
<p>过期的副作用</p>
<ul>
<li>
<p>竞态问题</p>
<ul>
<li>在描述一个系统或者进程的输出，依赖于不受控制的事件出现顺序或者出现时机</li>
</ul>
</li>
<li>
<p>解决方式</p>
<ul>
<li>onInvalidate：该回调函数会在副作用下一次重新执行前调用，可以用来清除无效的副作用，例如等待中的异步请求</li>
</ul>
</li>
<li>
<p>onInvalidate 原理</p>
<ul>
<li>副作用函数（effct）重新执行前，先触发 onInvalidate</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="第五章-非原始值-对象-的响应性方案" tabindex="-1"><a class="header-anchor" href="#第五章-非原始值-对象-的响应性方案" aria-hidden="true">#</a> 第五章：非原始值（对象）的响应性方案</h3>
<ul>
<li>
<p>Proxy</p>
<ul>
<li>代理一个对象（被代理对象）的 getter 和 setter 行为，得到一个 proxy 实例（代理对象）</li>
</ul>
</li>
<li>
<p>Reflect</p>
<ul>
<li>在 Proxy 中使用 this 时，保证 this 指向 proxy，从而正确执行次数的副作用</li>
</ul>
</li>
</ul>
<h3 id="第六章-原始值-非对象-的响应性方案" tabindex="-1"><a class="header-anchor" href="#第六章-原始值-非对象-的响应性方案" aria-hidden="true">#</a> 第六章：原始值（非对象）的响应性方案</h3>
<ul>
<li>
<p>为什么会有 ref</p>
<ul>
<li>① reactive 方法基于 Proxy 实现，所以只能完成 对象 的响应性</li>
<li>② 针对 非对象 的响应性，则需要 ref 构建</li>
</ul>
</li>
<li>
<p>实现原理</p>
<ul>
<li>
<p>通过 get 、set  函数标记符，让函数以属性调用的形式被触发</p>
<ul>
<li>packages/reactivity/src/ref.ts</li>
<li>当访问 ref.value 属性时，本质上是  value() 函数的执行</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="_3-渲染器" tabindex="-1"><a class="header-anchor" href="#_3-渲染器" aria-hidden="true">#</a> ③ 渲染器</h2>
<h3 id="第七章-渲染器的设计" tabindex="-1"><a class="header-anchor" href="#第七章-渲染器的设计" aria-hidden="true">#</a> 第七章：渲染器的设计</h3>
<ul>
<li>
<p>渲染器的基本概念</p>
<ul>
<li>
<p>渲染器与渲染函数</p>
<ul>
<li>渲染器：renderer</li>
<li>渲染函数：render</li>
</ul>
</li>
</ul>
</li>
<li>
<p>自定义渲染器核心思路</p>
<ul>
<li>① 在浏览器端，利用 DOM API 完成 DOM 操作</li>
<li>② 渲染器不能与宿主环境（浏览器）产生强耦合</li>
</ul>
</li>
<li>
<p>vnode</p>
<ul>
<li>一个普通的 JavaScript 对象，代表了渲染的内容</li>
</ul>
</li>
</ul>
<h3 id="第八章-挂载与更新" tabindex="-1"><a class="header-anchor" href="#第八章-挂载与更新" aria-hidden="true">#</a> 第八章：挂载与更新</h3>
<ul>
<li>
<p>DOM节点操作</p>
<ul>
<li>
<p>挂载</p>
<ul>
<li>
<p>DOM 的初次渲染</p>
<ul>
<li>通过 createElement 新建</li>
<li>通过 parentEl.insertBefore 插入</li>
</ul>
</li>
</ul>
</li>
<li>
<p>更新</p>
<ul>
<li>
<p>当响应性数据发生变化时，可能会涉及到 DOM 更新</p>
<ul>
<li>属性更新</li>
</ul>
</li>
</ul>
</li>
<li>
<p>卸载</p>
<ul>
<li>
<p>该节点不在被需要了</p>
<ul>
<li>通过 parentEl.removeChild 完成</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>属性节点操作</p>
<ul>
<li>
<p>属性</p>
<ul>
<li>
<p>分类</p>
<ul>
<li>
<p>HTML Attributes</p>
<ul>
<li>定义在 HTML 标签上的属性</li>
</ul>
</li>
<li>
<p>DOM Properties</p>
<ul>
<li>DOM 对象下的属性</li>
</ul>
</li>
</ul>
</li>
<li>
<p>正确的设置元素属性</p>
<ul>
<li>
<p>① el.setAttribute('属性名', '属性值')</p>
</li>
<li>
<p>②  . 属性赋值</p>
<ul>
<li>el.属性名 = 属性值</li>
<li>el[属性名] = 属性值</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>事件</p>
<ul>
<li>
<p>添加</p>
<ul>
<li>el.addEventListener</li>
</ul>
</li>
<li>
<p>删除</p>
<ul>
<li>el.removeEventListener</li>
</ul>
</li>
<li>
<p>更新</p>
<ul>
<li>
<p>vei（vue event invokers）</p>
<ul>
<li>
<p>为 addEventListener 回调函数，设置了一个 value 的属性方法，在回调函数中触发这个方法。通过更新该属性方法的形式，达到更新事件的目的。</p>
<ul>
<li>具体代码可查看：https://github.com/lgd8981289/vue-next-mini  中 packages/runtime-dom/src/modules/events.ts 中 patchEvent 方法</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="第九、十、十一章-diff-算法" tabindex="-1"><a class="header-anchor" href="#第九、十、十一章-diff-算法" aria-hidden="true">#</a> 第九、十、十一章：Diff 算法</h3>
<ul>
<li>
<p>本质</p>
<ul>
<li>
<p>一个 对比的方法</p>
<ul>
<li>“旧 DOM 组”更新为“新 DOM 组”时，如何更新才能效率更高。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>步骤</p>
<ul>
<li>① sync from start：自前向后的对比</li>
<li>② sync from end：自后向前的对比</li>
<li>③ common sequence + mount：新节点多于旧节点，需要挂载</li>
<li>④ common sequence + unmount：旧节点多于新节点，需要卸载</li>
<li>⑤ unknown sequence：乱序</li>
</ul>
</li>
</ul>
<h2 id="_4-组件化" tabindex="-1"><a class="header-anchor" href="#_4-组件化" aria-hidden="true">#</a> ④ 组件化</h2>
<h3 id="第十二章-组件的实现原理" tabindex="-1"><a class="header-anchor" href="#第十二章-组件的实现原理" aria-hidden="true">#</a> 第十二章：组件的实现原理</h3>
<ul>
<li>
<p>组件对象</p>
</li>
<li>
<p>组件的 vnode</p>
<ul>
<li>type 为组件对象的 vnode</li>
</ul>
</li>
<li>
<p>组件的渲染</p>
<ul>
<li>组件对象中会包含一个 render 函数，render 函数返回值时一个 vnode。渲染组件就是渲染该 vnode</li>
</ul>
</li>
<li>
<p>setup 函数</p>
<ul>
<li>
<p>① 返回一个函数</p>
<ul>
<li>直接作为 render 函数渲染</li>
</ul>
</li>
<li>
<p>② 返回一个对象</p>
<ul>
<li>直接在 render 中访问暴露出来的对象数据</li>
</ul>
</li>
</ul>
</li>
<li>
<p>插槽的工作原理与实现</p>
<ul>
<li>
<p>插槽的本质</p>
<ul>
<li>组件中 innerHTML 的内容，在 vnode 中以 children 属性呈现</li>
</ul>
</li>
<li>
<p>原理</p>
<ul>
<li>针对 children 进行渲染即可</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="第十三章-异步组件与函数式组件" tabindex="-1"><a class="header-anchor" href="#第十三章-异步组件与函数式组件" aria-hidden="true">#</a> 第十三章：异步组件与函数式组件</h3>
<ul>
<li>
<p>异步组件</p>
<ul>
<li>
<p>定义</p>
<ul>
<li>异步加载的组件</li>
</ul>
</li>
<li>
<p>作用</p>
<ul>
<li>页面性能、拆包、服务端下发组件</li>
</ul>
</li>
</ul>
</li>
<li>
<p>函数式组件</p>
<ul>
<li>没有状态的组件。本质上是一个函数，通过静态属性的形式添加 props 属性</li>
</ul>
</li>
</ul>
<h3 id="第十四章-内建组件和模块" tabindex="-1"><a class="header-anchor" href="#第十四章-内建组件和模块" aria-hidden="true">#</a> 第十四章：内建组件和模块</h3>
<ul>
<li>
<p>KeepAlive</p>
<ul>
<li>
<p>作用</p>
<ul>
<li>缓存一个组件，避免不断地销毁和创建</li>
</ul>
</li>
<li>
<p>核心原理</p>
<ul>
<li>
<p>① 组件被卸载时</p>
<ul>
<li>把组件保存在一个容器中</li>
</ul>
</li>
<li>
<p>② 组件被挂载时</p>
<ul>
<li>从容器中把组件取出来</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Teleport</p>
<ul>
<li>
<p>作用</p>
<ul>
<li>将插槽的内容渲染到其他位置</li>
</ul>
</li>
<li>
<p>核心原理</p>
<ul>
<li>① 把 Teleport 组件的渲染逻辑，从渲染器中抽离</li>
<li>② 在指定的位置进行独立渲染</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Transition</p>
<ul>
<li>
<p>作用</p>
<ul>
<li>实现动画逻辑</li>
</ul>
</li>
<li>
<p>核心原理</p>
<ul>
<li>① DOM 元素被挂载时，将动效附加到该 DOM 元素上</li>
<li>② DOM 元素被卸载时，等在 DOM 元素动效执行完成后，执行卸载 DOM 操作</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="_5-编译器" tabindex="-1"><a class="header-anchor" href="#_5-编译器" aria-hidden="true">#</a> ⑤ 编译器</h2>
<h3 id="第十五章-编译器核心技术概述" tabindex="-1"><a class="header-anchor" href="#第十五章-编译器核心技术概述" aria-hidden="true">#</a> 第十五章：编译器核心技术概述</h3>
<ul>
<li>
<p>模板 DSL 的编译器</p>
<ul>
<li>
<p>DSL</p>
<ul>
<li>一种领域下，特定语言的编译器</li>
</ul>
</li>
<li>
<p>本质</p>
<ul>
<li>
<p>一段程序，可以把 A 语言翻译成 B 语言</p>
<ul>
<li>把 tempalte 模板，编译成 render 渲染函数</li>
</ul>
</li>
</ul>
</li>
<li>
<p>编译流程</p>
<ul>
<li>
<p>完整的编译流程
<img src="/img/compiler.jpeg" alt=""></p>
</li>
<li>
<p>Vue 的编译流程
<img src="/img/vue3-compiler.jpeg" alt=""></p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Vue 编译流程三大步</p>
<ul>
<li>①  parse：通过 parse 函数，把模板编译成 AST 对象</li>
<li>② transform：通过 transform 函数，把 AST 转化为 JavaScript AST</li>
<li>③ generate：通过 generate 函数，把 JavaScript AST 转化为 渲染函数（render）</li>
</ul>
</li>
</ul>
<h3 id="第十六章-解析器-parse" tabindex="-1"><a class="header-anchor" href="#第十六章-解析器-parse" aria-hidden="true">#</a> 第十六章：解析器（parse）</h3>
<ul>
<li>
<p>Vue 编译流程三大步</p>
<ul>
<li>①  parse：通过 parse 函数，把模板编译成 AST 对象</li>
</ul>
</li>
</ul>
<h3 id="第十七章-编译优化" tabindex="-1"><a class="header-anchor" href="#第十七章-编译优化" aria-hidden="true">#</a> 第十七章：编译优化</h3>
<ul>
<li>
<p>概念</p>
<ul>
<li>通过编译的手段提取关键信息，并以此知道生成最优代码的过程</li>
</ul>
</li>
<li>
<p>核心</p>
<ul>
<li>动态节点（受数据变化所影响的）</li>
<li>静态节点（不受数据变化所影响的）</li>
</ul>
</li>
<li>
<p>Block 树</p>
<ul>
<li>
<p>本质</p>
<ul>
<li>虚拟节点树对象</li>
</ul>
</li>
<li>
<p>核心</p>
<ul>
<li>
<p>dynamicChildren</p>
<ul>
<li>收集所有的动态子节点</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>其他优化</p>
<ul>
<li>静态提升</li>
<li>预字符串化</li>
<li>缓存内联事件处理函数</li>
<li>v-once 指令</li>
</ul>
</li>
</ul>
<h2 id="_6-服务端渲染" tabindex="-1"><a class="header-anchor" href="#_6-服务端渲染" aria-hidden="true">#</a> ⑥ 服务端渲染</h2>
<h3 id="第十八章-同构渲染" tabindex="-1"><a class="header-anchor" href="#第十八章-同构渲染" aria-hidden="true">#</a> 第十八章：同构渲染</h3>
<ul>
<li>
<p>CSR、SSR以及同构渲染</p>
<ul>
<li>
<p>CSR：客户端渲染</p>
<ul>
<li>流程图</li>
</ul>
</li>
<li>
<p>SSR：服务端渲染</p>
<ul>
<li>流程图</li>
</ul>
</li>
<li>
<p>同构渲染</p>
<ul>
<li>
<p>单独的 CSR</p>
</li>
<li>
<p>单独的 SSR</p>
</li>
<li>
<p>CSR + SSR</p>
<ul>
<li>首次渲染</li>
<li>非首次渲染</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>服务端渲染，将虚拟 DOM  渲染为 HTML 字符串</p>
<ul>
<li>解析 vnode ，进行字符串拼接</li>
</ul>
</li>
<li>
<p>服务端渲染，将 组件 渲染为 HTML 字符串</p>
</li>
<li>
<p>客户端激活的原理</p>
<ul>
<li>① 为页面中的 DOM 元素与虚拟节点对象之间建立联系</li>
<li>② 为页面中的 DOM 元素添加事件绑定</li>
</ul>
</li>
</ul>
</div></template>

