import{_ as a,c as s,o as i,aa as n}from"./chunks/framework.CAVwB9kQ.js";const E=JSON.parse('{"title":"JavaScript深入之执行上下文栈和变量对象","description":"","frontmatter":{},"headers":[],"relativePath":"Javascript/Advance/executionStack.md","filePath":"Javascript/Advance/executionStack.md","lastUpdated":1713367654000}'),e={name:"Javascript/Advance/executionStack.md"},t=n(`<h1 id="javascript深入之执行上下文栈和变量对象" tabindex="-1">JavaScript深入之执行上下文栈和变量对象 <a class="header-anchor" href="#javascript深入之执行上下文栈和变量对象" aria-label="Permalink to &quot;JavaScript深入之执行上下文栈和变量对象&quot;">​</a></h1><h2 id="执行上下文栈定义" tabindex="-1">执行上下文栈定义 <a class="header-anchor" href="#执行上下文栈定义" aria-label="Permalink to &quot;执行上下文栈定义&quot;">​</a></h2><p><code>执行上下文栈（Execution Context Stack）</code>是 JavaScript 中用于管理<code>执行上下文（Execution Context）</code>的数据结构。</p><p>思考？ 是否可以将执行上下文栈理解为执行上下文和执行栈的结合？</p><p>从定义上来看 执行上下文栈 是一个栈 栈中的数据都是执行上下文类型的</p><p>先创建执行上下文，再执行阶段将各个执行上下文压入栈中。</p><h2 id="变量对象定义" tabindex="-1">变量对象定义 <a class="header-anchor" href="#变量对象定义" aria-label="Permalink to &quot;变量对象定义&quot;">​</a></h2><p>每个<code>执行上下文（execution context）</code>都有一个与之关联的<code>变量对象（variable object）</code>。变量对象是一个抽象的概念，它包含了在执行上下文中定义的所有变量、函数声明和形参，以及一些特定的内部变量。</p><p>在执行上下文创建阶段，<code>VariableEnvironment（变量环境）</code>被创建，里面存储着变量对象和对外部函数的引用，见一下数据结构</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VariableEnvironment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    EnvironmentRecord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      Type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Declarative&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 标识符绑定在这里</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    outer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GlobalLexicalEnvironment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="变量对象和变量环境的区别" tabindex="-1">变量对象和变量环境的区别？ <a class="header-anchor" href="#变量对象和变量环境的区别" aria-label="Permalink to &quot;变量对象和变量环境的区别？&quot;">​</a></h4><p><strong>变量对象（Variable Object）</strong></p><ul><li>变量对象是执行上下文中的一部分，用于存储在该执行上下文中定义的变量、函数声明和函数的形参。</li><li>在全局执行上下文中，变量对象被称为全局对象（Global Object）或者全局变量对象（Global Variable Object）。</li><li>在函数执行上下文中，变量对象被称为活动对象（Activation Object）或者函数变量对象（Function Variable Object）。</li></ul><p><strong>变量环境（Variable Environment）</strong></p><ul><li>变量环境是执行上下文中的一个组成部分，它包含了变量对象以及外部环境的引用（比如外部函数的变量对象）。</li><li>变量环境是执行上下文中用来解析标识符（变量名）引用的地方，即在执行代码时查找变量值的地方。</li></ul><p>所以它们并不是完全相同的概念，变量对象是执行上下文中存储变量和函数声明的具体数据结构，而变量环境则包含了变量对象以及外部环境的引用，用于标识符解析。</p>`,16),l=[t];function p(r,c,h,o,d,k){return i(),s("div",null,l)}const u=a(e,[["render",p]]);export{E as __pageData,u as default};
