import{_ as n,o as s,c as e,d as i}from"./app-BTM0SXbh.js";const r={};function t(l,a){return s(),e("div",null,[...a[0]||(a[0]=[i(`<h1 id="mermaid-图表示例" tabindex="-1"><a class="header-anchor" href="#mermaid-图表示例" aria-hidden="true">#</a> Mermaid 图表示例</h1><h2 id="流程图-flowchart" tabindex="-1"><a class="header-anchor" href="#流程图-flowchart" aria-hidden="true">#</a> 流程图 (Flowchart)</h2><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">flowchart</span> TD
    A<span class="token text string">[开始]</span> <span class="token arrow operator">--&gt;</span> B<span class="token text string">{条件判断}</span>
    B <span class="token arrow operator">--&gt;</span><span class="token label property">|是|</span> C<span class="token text string">[执行操作1]</span>
    B <span class="token arrow operator">--&gt;</span><span class="token label property">|否|</span> D<span class="token text string">[执行操作2]</span>
    C <span class="token arrow operator">--&gt;</span> E<span class="token text string">[结束]</span>
    D <span class="token arrow operator">--&gt;</span> E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="序列图-sequence-diagram" tabindex="-1"><a class="header-anchor" href="#序列图-sequence-diagram" aria-hidden="true">#</a> 序列图 (Sequence Diagram)</h2><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
    <span class="token keyword">participant</span> A as 用户
    <span class="token keyword">participant</span> B as 服务器
    <span class="token keyword">participant</span> C as 数据库
    
    A<span class="token arrow operator">-&gt;&gt;</span>B<span class="token operator">:</span> 发送请求
    B<span class="token arrow operator">-&gt;&gt;</span>C<span class="token operator">:</span> 查询数据
    C<span class="token arrow operator">--&gt;&gt;</span>B<span class="token operator">:</span> 返回数据
    B<span class="token arrow operator">--&gt;&gt;</span>A<span class="token operator">:</span> 返回响应
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类图-class-diagram" tabindex="-1"><a class="header-anchor" href="#类图-class-diagram" aria-hidden="true">#</a> 类图 (Class Diagram)</h2><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">classDiagram</span>
    <span class="token keyword">class</span> Animal <span class="token punctuation">{</span>
        +String name
        +int age
        +makeSound<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">class</span> Dog <span class="token punctuation">{</span>
        +String breed
        +wagTail<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">class</span> Cat <span class="token punctuation">{</span>
        +String color
        +purr<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    Animal <span class="token arrow operator">&lt;|--</span> Dog
    Animal <span class="token arrow operator">&lt;|--</span> Cat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="状态图-state-diagram" tabindex="-1"><a class="header-anchor" href="#状态图-state-diagram" aria-hidden="true">#</a> 状态图 (State Diagram)</h2><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">stateDiagram-v2</span>
    <span class="token text string">[*]</span> <span class="token arrow operator">--&gt;</span> Still
    Still <span class="token arrow operator">--&gt;</span> <span class="token text string">[*]</span>
    Still <span class="token arrow operator">--&gt;</span> Moving
    Moving <span class="token arrow operator">--&gt;</span> Still
    Moving <span class="token arrow operator">--&gt;</span> Crash
    Crash <span class="token arrow operator">--&gt;</span> <span class="token text string">[*]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="甘特图-gantt-chart" tabindex="-1"><a class="header-anchor" href="#甘特图-gantt-chart" aria-hidden="true">#</a> 甘特图 (Gantt Chart)</h2><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">gantt</span>
    title 项目计划
    dateFormat  YYYY-MM-DD
    section 设计
    需求分析           <span class="token operator">:</span>a1, 2024-01-01, 3d
    UI设计            <span class="token operator">:</span>after a1, 5d
    section 开发
    前端开发           <span class="token operator">:</span>2024-01-05, 7d
    后端开发           <span class="token operator">:</span>2024-01-08, 8d
    section 测试
    单元测试           <span class="token operator">:</span>2024-01-15, 3d
    集成测试           <span class="token operator">:</span>2024-01-18, 4d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)])])}const o=n(r,[["render",t],["__file","mermaid-test.html.vue"]]);export{o as default};
