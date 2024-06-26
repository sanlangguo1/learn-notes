<template><div><h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h2>
<p>动态规划（Dynamic Programming，简称 DP）是一种用于解决<strong>最优化问题</strong>的算法策略。它通过将原问题分解为一系列<strong>相互依赖的子问题</strong>，并<strong>递归地求解</strong>这些子问题，最终得到原问题的最优解。</p>
<h3 id="动态规划的适用条件" tabindex="-1"><a class="header-anchor" href="#动态规划的适用条件" aria-hidden="true">#</a> 动态规划的适用条件</h3>
<p>动态规划算法适用于满足以下两个条件的问题：</p>
<ol>
<li><strong>子问题重叠:</strong> 原问题可以分解为多个子问题，并且这些子问题之间存在重叠。这意味着同一个子问题可能被多次计算。</li>
<li><strong>最优子结构:</strong> 原问题的最优解包含其子问题的最优解。</li>
</ol>
<h3 id="动态规划的基本思想" tabindex="-1"><a class="header-anchor" href="#动态规划的基本思想" aria-hidden="true">#</a> 动态规划的基本思想</h3>
<p>动态规划的基本思想是<strong>利用子问题的重叠性质，避免重复计算</strong>。具体来说，动态规划算法会将每个子问题的解<strong>存入表格</strong>中，当再次需要计算同一个子问题时，可以直接从表格中查询结果，从而提高效率。</p>
<h3 id="动态规划的两种求解方法" tabindex="-1"><a class="header-anchor" href="#动态规划的两种求解方法" aria-hidden="true">#</a> 动态规划的两种求解方法</h3>
<p>动态规划算法通常有两种求解方法：</p>
<ol>
<li><strong>自顶向下:</strong> 从原问题出发，递归地求解子问题。在求解子问题时，如果遇到已经计算过的子问题，则直接从表格中查询结果。</li>
<li><strong>自底向上:</strong> 从最简单的子问题开始，逐层递推求解更复杂的子问题，最终得到原问题的解。</li>
</ol>
<h3 id="动态规划的应用" tabindex="-1"><a class="header-anchor" href="#动态规划的应用" aria-hidden="true">#</a> 动态规划的应用</h3>
<p>动态规划算法在计算机科学中有着广泛的应用，常见于以下领域：</p>
<ul>
<li><strong>算法设计:</strong> 例如，最长公共子序列、背包问题、0-1 背包问题、最短路径问题、旅行商问题等。</li>
<li><strong>机器学习:</strong> 例如，隐马尔可夫模型、条件随机场、最大熵模型等。</li>
<li><strong>图像处理:</strong> 例如，图像分割、边缘检测、图像压缩等。</li>
<li><strong>金融工程:</strong> 例如，股票期权定价、风险管理等。</li>
</ul>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>动态规划是一种强大的算法策略，可以有效地解决许多最优化问题。学习动态规划对于提高算法设计能力和解决实际问题的能力都很有帮助。</p>
<p><strong>以下是一些学习动态规划的建议:</strong></p>
<ul>
<li>从简单的例子开始，逐步理解动态规划的基本思想和方法。</li>
<li>练习一些经典的动态规划问题，巩固所学知识。</li>
<li>尝试将动态规划应用到实际问题中，提高解决问题的能力。</li>
</ul>
<p><strong>来自 Goole Gemini</strong> 回答</p>
<h3 id="_70-爬楼梯" tabindex="-1"><a class="header-anchor" href="#_70-爬楼梯" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/climbing-stairs/" target="_blank" rel="noopener noreferrer">70. 爬楼梯<ExternalLinkIcon/></a></h3>
<p><strong>简单</strong></p>
<p>假设你正在爬楼梯。需要 <code v-pre>n</code> 阶你才能到达楼顶。</p>
<p>每次你可以爬 <code v-pre>1</code> 或 <code v-pre>2</code> 个台阶。你有多少种不同的方法可以爬到楼顶呢？</p>
<p><strong>示例 1：</strong></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>输入：n = <span class="token number">2</span>
输出：<span class="token number">2</span>
解释：有两种方法可以爬到楼顶。
<span class="token number">1</span>. <span class="token number">1</span> 阶 + <span class="token number">1</span> 阶
<span class="token number">2</span>. <span class="token number">2</span> 阶
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解题思路：</strong></p>
<ul>
<li><strong>动态规划 (DP)</strong>：将问题分解成子问题，并保存子问题的解决方案，避免重复计算。</li>
<li><strong>子问题定义:</strong> 到达第 <code v-pre>i</code> 阶的不同方法数</li>
<li>子问题求解:
<ul>
<li>到达第 <code v-pre>i</code> 阶的方法数等于到达第 <code v-pre>i - 1</code> 阶的方法数加上到达第 <code v-pre>i - 2</code> 阶的方法数</li>
<li>状态转移方程：<code v-pre>arr[i] = arr[i - 1] + arr[i - 2]</code></li>
</ul>
</li>
<li>代码实现:
<ul>
<li>创建一个数组 <code v-pre>arr</code>，长度为 <code v-pre>n + 1</code>，并用 <code v-pre>1</code> 填充</li>
<li>初始化 <code v-pre>arr[0]</code> 和 <code v-pre>arr[2]</code></li>
<li>从第 3 阶开始，逐个计算到达该阶的不同方法数</li>
<li>返回到达第 <code v-pre>n</code> 阶的不同方法数</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 爬楼梯问题
 * 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span> 楼梯的阶数
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> 到达顶层的不同方法数
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个数组 `arr`，长度为 `n + 1`，并用 `1` 填充</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 初始化 `arr[0]` 和 `arr[2]`</span>
  arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

  <span class="token comment">// 从第 3 阶开始，逐个计算到达该阶的不同方法数</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 到达第 `i` 阶的方法数等于到达第 `i - 1` 阶的方法数加上到达第 `i - 2` 阶的方法数</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 返回到达第 `n` 阶的不同方法数</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_118-杨辉三角" tabindex="-1"><a class="header-anchor" href="#_118-杨辉三角" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/pascals-triangle/" target="_blank" rel="noopener noreferrer">118. 杨辉三角<ExternalLinkIcon/></a></h3>
<p><a href="https://leetcode.cn/problems/pascals-triangle/description/?envType=study-plan-v2&amp;envId=top-100-liked#" target="_blank" rel="noopener noreferrer">思路<ExternalLinkIcon/></a></p>
<p><strong>简单</strong></p>
<p>给定一个非负整数 *<code v-pre>numRows</code>，*生成「杨辉三角」的前 <em><code v-pre>numRows</code></em> 行。</p>
<p>在「杨辉三角」中，每个数是它左上方和右上方的数的和。</p>
<p><img src="https://pic.leetcode-cn.com/1626927345-DZmfxB-PascalTriangleAnimated2.gif" alt="img"></p>
<p><strong>示例 1:</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解题思路:</strong></p>
<ul>
<li>使用递推公式逐个计算杨辉三角的每一行。</li>
<li>从第 0 行开始，第 0 行只有一个元素，值为 1。</li>
<li>从第 1 行开始，每行的第一个元素和最后一个元素都为 1。</li>
<li>对于每行的其他元素，其值等于上一行的相邻两个元素的和。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 生成杨辉三角，使用滚动数组优化空间复杂度
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">numRows</span> 杨辉三角的行数
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> 杨辉三角
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">generate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">numRows</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建结果数组</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 从第 1 行开始，逐个生成杨辉三角的每一行</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numRows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一行数据，并用 `1` 填充</span>
    <span class="token keyword">const</span> row <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用前两行的杨辉三角数据进行计算</span>
    <span class="token keyword">const</span> prev <span class="token operator">=</span> res<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 每个元素的值等于上一行的相邻两个元素的和</span>
      row<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> prev<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> prev<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 将生成的这一行添加到结果数组中</span>
    row<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 返回结果数组</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_198-打家劫舍" tabindex="-1"><a class="header-anchor" href="#_198-打家劫舍" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/house-robber/" target="_blank" rel="noopener noreferrer">198. 打家劫舍<ExternalLinkIcon/></a></h3>
<p><strong>中等</strong></p>
<p>你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，<strong>如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警</strong>。</p>
<p>给定一个代表每个房屋存放金额的非负整数数组，计算你 <strong>不触动警报装置的情况下</strong> ，一夜之内能够偷窃到的最高金额。</p>
<p><strong>示例 1：</strong></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>输入：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
输出：<span class="token number">4</span>
解释：偷窃 <span class="token number">1</span> 号房屋 (金额 = <span class="token number">1</span>) ，然后偷窃 <span class="token number">3</span> 号房屋 (金额 = <span class="token number">3</span>)。
     偷窃到的最高金额 = <span class="token number">1</span> + <span class="token number">3</span> = <span class="token number">4</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>思路：</strong></p>
<ul>
<li>动态规划 (DP)</li>
</ul>
<p><strong>步骤：</strong></p>
<ol>
<li>定义状态：<code v-pre>dp[i]</code> 表示偷窃到第 <code v-pre>i</code> 间房屋的最大金额。</li>
<li>状态转移方程：
<ul>
<li><code v-pre>dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])</code></li>
<li>含义：偷窃到第 i 间房屋的最大金额等于两种情况中的较大值：
<ul>
<li>不偷窃第 <code v-pre>i</code> 间房屋，则最大金额为之前第 <code v-pre>i - 1</code> 间房屋的最大金额 (<code v-pre>dp[i - 1]</code>)</li>
<li>偷窃第 <code v-pre>i</code> 间房屋，则最大金额为之前第 <code v-pre>i - 2</code> 间房屋的最大金额 (<code v-pre>dp[i - 2]</code>) 加上第 <code v-pre>i</code> 间房屋的金额 (<code v-pre>nums[i]</code>)</li>
</ul>
</li>
</ul>
</li>
<li>初始化：
<ul>
<li><code v-pre>dp[0] = nums[0]</code></li>
<li><code v-pre>dp[1] = max(nums[1], nums[0])</code></li>
</ul>
</li>
<li>计算：
<ul>
<li>从第 3 间房屋开始，逐个计算 <code v-pre>dp[i]</code></li>
</ul>
</li>
<li>返回结果：
<ul>
<li>返回 <code v-pre>dp[n - 1]</code>，表示偷窃到最后间房屋的最大金额</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token doc-comment comment">/**
 * 窃取房屋中的最大金额（不可窃取相邻的房屋），使用滚动数组优化空间复杂度
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span> 每间房屋中的金额
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> 最大利润
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">rob</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果只有一间房屋，则直接返回该房屋的金额</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 初始化两个变量，分别保存前两间房屋的最大金额</span>
  <span class="token keyword">let</span> prev1 <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> prev2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 从第 3 间房屋开始，逐个计算偷窃到该房屋为止的最大金额</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 偷窃到第 `i` 间房屋的最大金额等于两种情况中的较大值：</span>
    <span class="token comment">//   1. 不偷窃第 `i` 间房屋，则最大金额为之前第 `i - 1` 间房屋的最大金额 (`prev1`)</span>
    <span class="token comment">//   2. 偷窃第 `i` 间房屋，则最大金额为之前第 `i - 2` 间房屋的最大金额 (`prev2`) 加上第 `i` 间房屋的金额 (`nums[i]`)</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>prev1<span class="token punctuation">,</span> prev2 <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 更新 `prev1` 和 `prev2` 的值</span>
    prev1 <span class="token operator">=</span> prev2<span class="token punctuation">;</span>
    prev2 <span class="token operator">=</span> temp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 返回偷窃到最后一间房屋为止的最大金额</span>
  <span class="token keyword">return</span> prev2<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_279-完全平方数" tabindex="-1"><a class="header-anchor" href="#_279-完全平方数" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/perfect-squares/" target="_blank" rel="noopener noreferrer">279. 完全平方数<ExternalLinkIcon/></a></h3>
<p><strong>中等</strong></p>
<p>给你一个整数 <code v-pre>n</code> ，返回 <em>和为 <code v-pre>n</code> 的完全平方数的最少数量</em> 。</p>
<p><strong>完全平方数</strong> 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，<code v-pre>1</code>、<code v-pre>4</code>、<code v-pre>9</code> 和 <code v-pre>16</code> 都是完全平方数，而 <code v-pre>3</code> 和 <code v-pre>11</code> 不是。</p>
<p><strong>示例 1：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：n = 13
输出：2
解释：13 = 4 + 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解题思路</strong></p>
<ul>
<li>状态：<code v-pre>dp[i]</code> 表示组成数字 <code v-pre>i</code> 所需的最小完美平方数个数。</li>
<li>状态转移方程：
<ul>
<li><code v-pre>dp[i] = min(dp[i - j^2] + 1)</code>，其中 <code v-pre>j</code> 为所有可能的平方数，且 <code v-pre>j^2 &lt;= i</code>。</li>
<li>含义：对于数字i，我们可以尝试从 1 到i的所有平方数开始，
<ul>
<li>如果 <code v-pre>i</code> 减去某个平方数 <code v-pre>j^2</code> 仍然是非负数，则我们可以使用 <code v-pre>dp[i - j^2]</code> 来表示组成 <code v-pre>i - j^2</code> 所需的最小完美平方数个数。</li>
<li>然后，再加上 1 表示使用了一个平方数 <code v-pre>j^2</code>，得到组成 <code v-pre>i</code> 所需的最小完美平方数个数。</li>
</ul>
</li>
</ul>
</li>
<li>初始化：
<ul>
<li><code v-pre>dp[0] = 0</code>，因为组成 0 不需要任何平方数。</li>
</ul>
</li>
<li>计算：
<ul>
<li>从 1 到 n 遍历每个数字i，对于每个数字i从 1 到 <code v-pre>i</code> 的所有平方数 <code v-pre>j^2</code> 开始，
<ul>
<li>计算 <code v-pre>dp[i - j^2] + 1</code> 的值，</li>
<li>更新 <code v-pre>dp[i]</code> 的值为所有可能的 <code v-pre>dp[i - j^2] + 1</code> 的最小值。</li>
</ul>
</li>
</ul>
</li>
<li>返回结果：
<ul>
<li>返回 <code v-pre>dp[n]</code>，即组成目标数字 <code v-pre>n</code> 所需的最小完美平方数个数。</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 计算完美平方数的最小个数
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span> 目标数字
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> 最小平方数个数
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numSquares</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个 dp 数组，存储从 0 到 n 的每个数字所需的最小平方数个数</span>
  <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 初始化 dp[0]</span>
  dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// 从 1 到 n 遍历每个数字</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">*</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从 1 到 n 遍历每个数字</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果目标数字大于等于当前平方数</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">>=</span> i <span class="token operator">*</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 更新 dp[j] 的值，取之前的值和使用当前平方数凑成目标数字的最小值</span>
        dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j <span class="token operator">-</span> i <span class="token operator">*</span> i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 返回 dp[n]，即目标数字所需的最小平方数个数</span>
  <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_322-零钱兑换" tabindex="-1"><a class="header-anchor" href="#_322-零钱兑换" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/coin-change/" target="_blank" rel="noopener noreferrer">322. 零钱兑换<ExternalLinkIcon/></a></h3>
<p><strong>中等</strong></p>
<p>给你一个整数数组 <code v-pre>coins</code> ，表示不同面额的硬币；以及一个整数 <code v-pre>amount</code> ，表示总金额。</p>
<p>计算并返回可以凑成总金额所需的 <strong>最少的硬币个数</strong> 。如果没有任何一种硬币组合能组成总金额，返回 <code v-pre>-1</code> 。</p>
<p>你可以认为每种硬币的数量是无限的。</p>
<p><strong>示例 1：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：coins = [2], amount = 3
输出：-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：coins = [1], amount = 0
输出：0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解题思路</strong></p>
<ul>
<li>状态：<code v-pre>dp[i]</code> 表示组成金额 <code v-pre>i</code> 所需的最小硬币数。</li>
<li>状态转移方程：
<ul>
<li><code v-pre>dp[i] = min(dp[i - c] + 1)</code>，其中 <code v-pre>c</code> 为所有可能的硬币面额。</li>
<li>含义：对于金额i，我们可以尝试从所有可用的硬币面额开始，
<ul>
<li>如果 <code v-pre>i</code> 减去某个硬币面额 <code v-pre>c</code> 仍然是非负数，则我们可以使用 <code v-pre>dp[i - c]</code> 来表示组成 <code v-pre>i - c</code> 所需的最小硬币数。</li>
<li>然后，再加上 1 表示使用了一个硬币，得到组成 <code v-pre>i</code> 所需的最小硬币数。</li>
</ul>
</li>
</ul>
</li>
<li>初始化：
<ul>
<li><code v-pre>dp[0] = 0</code>，因为组成 0 不需要任何硬币。</li>
</ul>
</li>
<li>计算：
<ul>
<li>从 1 到 <code v-pre>amount</code> 遍历每个金额 <code v-pre>i</code>，</li>
<li>对于每个金额 <code v-pre>i</code>，遍历所有可用的硬币面额 <code v-pre>c</code>，</li>
<li>计算 <code v-pre>dp[i - c] + 1</code> 的值，</li>
<li>更新 <code v-pre>dp[i]</code> 的值为所有可能的 <code v-pre>dp[i - c] + 1</code> 的最小值。</li>
</ul>
</li>
<li>返回结果：
<ul>
<li>返回 <code v-pre>dp[amount]</code>，即组成目标金额 <code v-pre>amount</code> 所需的最小硬币数。</li>
<li>如果 <code v-pre>dp[amount]</code> 等于 <code v-pre>amount + 1</code>，则说明目标金额无法凑成，返回 -1。</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 计算组成目标金额所需的最少硬币数
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">coins</span> 可用的硬币面额数组
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">amount</span> 目标金额
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> 最少硬币数
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">coinChange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">coins<span class="token punctuation">,</span> amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个 dp 数组，存储从 0 到 amount 的每个金额所需的最小硬币数</span>
  <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>amount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>amount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 初始化 dp[0]</span>
  dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// 遍历所有硬币面额</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> coins<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从当前硬币面额开始，遍历所有可能的金额</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> coins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> amount<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 更新 dp[j] 的值，取之前的值和使用当前硬币凑成目标金额的最小值</span>
      dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j <span class="token operator">-</span> coins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果目标金额无法凑成，则返回 -1</span>
  <span class="token keyword">return</span> dp<span class="token punctuation">[</span>amount<span class="token punctuation">]</span> <span class="token operator">===</span> amount <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> dp<span class="token punctuation">[</span>amount<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


