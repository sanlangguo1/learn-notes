import{_ as n,o as a,c as e,d as o}from"./app-BTM0SXbh.js";const r="/learn-notes/img/webpack.svg",t="/learn-notes/img/c-c.svg",i={};function l(p,s){return a(),e("div",null,[...s[0]||(s[0]=[o('<h3 id="webpack-工作原理" tabindex="-1"><a class="header-anchor" href="#webpack-工作原理" aria-hidden="true">#</a> webpack 工作原理</h3><h4 id="webpack-工作流程图" tabindex="-1"><a class="header-anchor" href="#webpack-工作流程图" aria-hidden="true">#</a> webpack 工作流程图：</h4><p><img src="'+r+`" alt=""></p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TD
    A<span class="token text string">[启动 webpack]</span> <span class="token arrow operator">--&gt;</span> B<span class="token text string">[读取配置]</span>
    B <span class="token arrow operator">--&gt;</span> C<span class="token text string">[webpack.config.js]</span>
    B <span class="token arrow operator">--&gt;</span> D<span class="token text string">[Shell 参数]</span>

    C <span class="token arrow operator">--&gt;</span> E<span class="token text string">[配置合并与标准化]</span>
    D <span class="token arrow operator">--&gt;</span> E

    E <span class="token arrow operator">--&gt;</span> F<span class="token text string">[初始化编译器 Compiler]</span>
    F <span class="token arrow operator">--&gt;</span> G<span class="token text string">[实例化插件并挂载钩子]</span>

    G <span class="token arrow operator">--&gt;</span> H<span class="token text string">[开始编译]</span>
    H <span class="token arrow operator">--&gt;</span> I<span class="token text string">[从入口文件开始]</span>

    I <span class="token arrow operator">--&gt;</span> J<span class="token text string">[依赖收集]</span>
    J <span class="token arrow operator">--&gt;</span> K<span class="token text string">[文件编译]</span>

    K <span class="token arrow operator">--&gt;</span> L<span class="token text string">[Loader 解析]</span>
    L <span class="token arrow operator">--&gt;</span> M<span class="token text string">[AST 语法树分析]</span>

    M <span class="token arrow operator">--&gt;</span> N<span class="token text string">[依赖关系分析]</span>
    N <span class="token arrow operator">--&gt;</span> O<span class="token text string">[模块化语法替换]</span>
    O <span class="token arrow operator">--&gt;</span> P<span class="token text string">[_webpack_require__]</span>

    P <span class="token arrow operator">--&gt;</span> Q<span class="token text string">[生成 Chunk]</span>
    Q <span class="token arrow operator">--&gt;</span> R<span class="token text string">[结果打包]</span>

    R <span class="token arrow operator">--&gt;</span> S<span class="token text string">[输出到目标目录]</span>
    S <span class="token arrow operator">--&gt;</span> T<span class="token text string">[构建完成]</span>

    <span class="token comment">%% 插件系统影响</span>
    G <span class="token arrow operator">-.-&gt;</span> <span class="token label property">|插件钩子|</span> K
    G <span class="token arrow operator">-.-&gt;</span> <span class="token label property">|插件钩子|</span> Q
    G <span class="token arrow operator">-.-&gt;</span> <span class="token label property">|插件钩子|</span> R

    <span class="token comment">%% 样式定义</span>
    <span class="token keyword">classDef</span> config <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e1f5fe</span>
    <span class="token keyword">classDef</span> process <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f3e5f5</span>
    <span class="token keyword">classDef</span> output <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e8f5e8</span>

    <span class="token keyword">class</span> C,D config
    <span class="token keyword">class</span> E,F,G,H,I,J,K,L,M,N,O,P process
    <span class="token keyword">class</span> Q,R,S,T output
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="简单总结起来-流程大概如下。" tabindex="-1"><a class="header-anchor" href="#简单总结起来-流程大概如下。" aria-hidden="true">#</a> 简单总结起来，流程大概如下。</h4><ul><li>首先，<strong>webpack</strong>会读取项目中由开发者定义的 <strong>webpack.config.js</strong>配置文件，或者从<strong>shell</strong>语句中获得必要的参数。这是<strong>webpack</strong>内部接收业务配置信息的方式。这样就完成了配置读取的譾氛步工作。</li><li>接着，将所需的<strong>webpack</strong>插件实例化，在<strong>webpack</strong>事件流上挂载插件钩子,这样在合适的构建过程中，插件就具备了改动产出结果的能力。</li><li>同时，根据配置所定义的人口文件，从入口文件(可以不止一个)开始，进行依赖收集，对所有依赖的文件进行编译,这个编译过程依赖<strong>loaders</strong>,不同类型的文件根据开发者定义的不同<strong>loader</strong> 进行解析。编译好的内容使用 <strong>acorn</strong> 或其他抽象语法树能力,解析生成抽象语法树,分析文件依赖关系，将不同模块化语法(如<strong>require</strong>)等替换为**<em>_webpack_require</em><strong>，即使用</strong>webpack**自己的加载器进行模块化实现。</li><li>上述步骤完戚后，产出结果，根据开发者配置，将结果打包到相应目录。</li></ul><p>在整个打包过程中，<strong>webpack</strong> 是一个<strong>基于事件驱动的编译器系统</strong>，其核心架构围绕 <strong>Tapable</strong> 事件流系统构建, <strong>webpack</strong> 和插件都采用基于事件流的发布/订阅模式，某些关键过程，并在这些环节中执行插件任务。最后，所有文件的编译和转化都已经完成，输出劣终资源。 如果深人剖析源码，则上述过程可以用更加专业的术语总结为:模块会经历加载(<strong>loaded</strong>)、封存(<strong>sealed</strong>)、优化(<strong>optimized</strong>)、分块(<strong>chunked</strong>)、哈希(<strong>hashed</strong>)和重新创建(<strong>restored</strong>)这个经典步骤。</p><h4 id="compiler-和-compilation" tabindex="-1"><a class="header-anchor" href="#compiler-和-compilation" aria-hidden="true">#</a> compiler 和 compilation</h4><p><strong>compiler</strong> 和 <strong>compiation</strong> 这两个对象是 <strong>webpack</strong> 核心原理中最重要的概念。它们是理解 <strong>webpack</strong>(作原理、<strong>loader</strong> 和插件工作的基础。 <strong>compiler</strong> 对象:它的实例包含了完整的 <strong>webpack</strong> 配置，且全局只有一个<strong>compiler</strong> 实例，因此它就像 <strong>webpack</strong>的骨架或神经中枢。当插件被实例化的时候，就会收到一个<strong>compilier</strong> 对象.通过这个对象可以访问<strong>webpack</strong> 的内部环境。</p><p><strong>compilation</strong>对象:当<strong>webpack</strong>以开发式运行时，每当检测到文件变化时，一个新的<strong>compilation</strong>对象就会被创建。这个对象包含了当前的模块资源、编译生成资源、变化的文件等信息。也就是说，所有构建过程中产生的构建数据都会被存储在该对象上，它也掌控書建过程中的每一个环节。该对象还提供了很多事件回调供插件做扩展。</p><h4 id="流程图说明" tabindex="-1"><a class="header-anchor" href="#流程图说明" aria-hidden="true">#</a> 流程图说明：</h4><ol><li><strong>Compiler</strong> 是 webpack 的核心对象，负责全局控制和流程管理。</li><li><strong>Compilation</strong> 是每次构建过程中生成的对象，负责代码解析、模块构建和资源生成。</li><li><strong>Compiler</strong> 通过事件钩子（如 <code>compilation</code>）来触发 <code>Compilation</code> 的生成和执行。</li><li><strong>Compilation</strong> 在构建过程中会经历多个阶段，如模块解析、优化和资源生成。</li></ol><h4 id="简化版流程图" tabindex="-1"><a class="header-anchor" href="#简化版流程图" aria-hidden="true">#</a> 简化版流程图：</h4><p><img src="`+t+`" alt=""></p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code>
  <span class="token keyword">graph</span> TD
    A<span class="token text string">[读取配置]</span> <span class="token arrow operator">--&gt;</span> B<span class="token text string">[webpack 初始化]</span>
    B <span class="token arrow operator">--&gt;</span> C<span class="token text string">[Compiler 全局控制]</span>
    C <span class="token arrow operator">--&gt;</span><span class="token label property">|触发 compilation 钩子|</span> D<span class="token text string">[Compilation]</span>
    D <span class="token arrow operator">--&gt;</span><span class="token label property">|模块解析|</span> E<span class="token text string">[构建模块]</span>
    D <span class="token arrow operator">--&gt;</span><span class="token label property">|优化|</span> F<span class="token text string">[优化资源]</span>
    D <span class="token arrow operator">--&gt;</span><span class="token label property">|资源生成|</span> G<span class="token text string">[产出结果]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="流程解释" tabindex="-1"><a class="header-anchor" href="#流程解释" aria-hidden="true">#</a> 流程解释：</h4><ol><li><strong>读取配置</strong>：<code>webpack</code> 首先读取配置文件，初始化构建环境。</li><li><strong>webpack 初始化</strong>：<code>webpack</code> 完成初始化，准备开始构建过程。</li><li><strong>Compiler 全局控制</strong>：<code>Compiler</code> 对象接管全局控制，负责触发构建过程中的各个事件钩子。</li><li><strong>Compilation</strong>：<code>Compiler</code> 触发 <code>compilation</code> 钩子，生成 <code>Compilation</code> 对象。</li><li><strong>构建模块</strong>：<code>Compilation</code> 开始解析模块，构建依赖图。</li><li><strong>优化资源</strong>：<code>Compilation</code> 对构建的资源进行优化，如代码压缩、Tree Shaking 等。</li><li><strong>产出结果</strong>：<code>Compilation</code> 生成最终的资源文件，输出到指定目录。</li></ol><p><code>webpack</code> 的构建过程是通过 <code>compiler</code> 控制流程，通过<code>compilation</code> 进行代码解析的。在开发播件时，我们可以从<code>compiler</code>对象中得到所有与 webpack 主环境相关的内容，包括事件钩子。更多信息将在下一节介绍。 瀠狛戢 se <code>compiler</code> 对象和 <code>compilation</code>对象都继承自 tapable 库,该库暴露了所有和事件相关的发布/订阅的方法。<code>webpack</code>中基于事件流的<code>tapable</code>库不仅能保证插件的有序性，还能使整个系统扩展性更好</p>`,18)])])}const d=n(i,[["render",l],["__file","webpack.html.vue"]]);export{d as default};
