import{_ as s,c as i,o as a,aa as n}from"./chunks/framework.CAVwB9kQ.js";const l="/Lyc-notes/assets/%E6%A0%91%E7%9A%84%E6%A0%91%E5%BD%A2%E8%A1%A8%E7%A4%BA.C9t6biZ9.png",p="/Lyc-notes/assets/%E6%9C%80%E5%B0%8F%E9%AB%98%E5%BA%A6%E5%88%86%E6%9E%90.C7HLTSvw.png",e="/Lyc-notes/assets/%E4%B8%A4%E7%A7%8D%E7%89%B9%E6%AE%8A%E5%BD%A2%E6%80%81%E7%9A%84%E4%BA%8C%E5%8F%89%E6%A0%91.Ce9hnZDg.png",t="/Lyc-notes/assets/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%80%A7%E8%B4%A8.DNac91if.png",h="/Lyc-notes/assets/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%A1%BA%E5%BA%8F%E5%AD%98%E5%82%A8.C8w-i0_4.png",k="/Lyc-notes/assets/%E4%BA%8C%E5%8F%89%E9%93%BE%E8%A1%A8.BLq_CdqZ.png",r="/Lyc-notes/assets/%E5%85%88%E5%BA%8F%E5%92%8C%E4%B8%AD%E5%BA%8F%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91.DllLM81e.png",B=JSON.parse('{"title":"第 5 章 树与二叉树","description":"","frontmatter":{},"headers":[],"relativePath":"dataStructure/chapter5.md","filePath":"dataStructure/chapter5.md","lastUpdated":1718189974000}'),E={name:"dataStructure/chapter5.md"},d=n('<h1 id="第-5-章-树与二叉树" tabindex="-1">第 5 章 树与二叉树 <a class="header-anchor" href="#第-5-章-树与二叉树" aria-label="Permalink to &quot;第 5 章 树与二叉树&quot;">​</a></h1><h2 id="树的基本概念" tabindex="-1">树的基本概念 <a class="header-anchor" href="#树的基本概念" aria-label="Permalink to &quot;树的基本概念&quot;">​</a></h2><h4 id="树的定义" tabindex="-1">树的定义 <a class="header-anchor" href="#树的定义" aria-label="Permalink to &quot;树的定义&quot;">​</a></h4><ol><li>有且仅有一个特定的称为<strong>根</strong>的结点。</li><li>当 n &gt;1 时，其余结点可分为 m(m&gt;0)个互不相交的有限集 T，T2...，Tm，其中每个集 合本身又是一棵树，并且称为根的子树</li></ol><p>显然，树的定义是递归的，即在树的定义中又用到了其自身，树是 一种递归的数据结构</p><p><strong>特点：</strong></p><ol><li>树的根结点没有前驱，除根结点外的所有结点有且只有一个前驱。</li><li>树中所有结点都可以有零个或多个后继。</li></ol><p>树适用于表示具有层次结构的数据。树中的某个结点(除根结点外)最多只和上一层的 一个 结点(即其父结点)有直接关系，根结点没有直接上层结点，<strong>因此在 n 个结点的树中有 n- 1 条边</strong>。 而树中每个结点与其下一层的零个或多个结点(即其孩子结点)都有直接关系。</p><h4 id="基本术语" tabindex="-1">基本术语 <a class="header-anchor" href="#基本术语" aria-label="Permalink to &quot;基本术语&quot;">​</a></h4><p><img src="'+l+'" alt="alt text"></p><ol><li>祖先、子孙、双亲、孩子、兄弟和堂兄弟</li><li>结点的度和树的度 树中一个结点的<strong>孩子个数称为该结点的度</strong>，树中结点的最大度数称为树的度。如结点 B 的度为 2，结点 D 的度为 3，树的度为 3</li><li>分支结点和叶结点 <strong>度大于 0 的结点称为分支结点(又称非终端结点)</strong>; <strong>度为 0(没有孩子结点)的结点称为叶结点(又称终端结点)</strong>;在分支结点中，每个结点的分支数就是该结点的度。</li><li>结点的深度、高度和层次。 结点的层次从树根开始定义，根结点第 1 层，它的孩子第 2 层，以此类推。结点的深度就是结点所在的层次。树的高度(或深度)是树中结点的最大层数。结点的高度是以该结点为根的子树的高度。图 5.1 中树的高度为 4</li><li>有序树和无序树 树中结点的各子树从左到右是有次序的，不能互换，称该树为有序树，否则称为无序树。</li><li>路径和路径长度 树中两个结点之间的路径是由这两个结点之间所经过的结点序列构成的，而路径长度是路径上所经过的边的个数</li><li>森林 森林是 m(m≥ 0)棵互不相交的树的集合。</li></ol><h4 id="树的性质" tabindex="-1">树的性质 <a class="header-anchor" href="#树的性质" aria-label="Permalink to &quot;树的性质&quot;">​</a></h4><blockquote><p>树中结点数和度数的关系的应用(2010、2016)</p></blockquote><ol><li><p><strong>树的结点数 n 等于所有结点的度数之和加 1</strong>。 结点的度是指该结点的孩子数量，每个结点与其每个孩子都由唯一的边相连，因此树中 所有结点的度数之和等于树中的边数之和。树中的结点(除根外)都有唯一的双亲，<strong>因此结点数 n 等于边数之和加 1，即所有结点的度数之和加 1</strong></p></li><li><p>度为 m 的树中第 i 层上至多有 m^i-1 个结点(i≥1) 第 1 层至多有 1 个结点(即根结点)，第 2 层至多有 m 个结点，第 3 层至多有 m^2 个结点，以此类推。使用数学归纳法可推出第;层至多有 m^i-1 个结点</p></li><li><p>高度为 h 的 m 叉树至多有(m^h- 1)/(m- 1)个结点</p></li></ol><blockquote><p>指定结点数的三叉树的最小高度分析 (2022 )</p></blockquote><p><img src="'+p+'" alt="alt text"></p><blockquote><p>常用于求解树结点与度之间关系的有: 总结点数=n0+n1+n2+.. +nm。 总分支数=1n1+2n2+...+mnm，(度为 m 的结点引出 m 条分支) 总结点数= 总分支数 +1</p></blockquote><h2 id="二叉树的概念" tabindex="-1">二叉树的概念 <a class="header-anchor" href="#二叉树的概念" aria-label="Permalink to &quot;二叉树的概念&quot;">​</a></h2><h4 id="二叉树的定义及其主要特征" tabindex="-1">二叉树的定义及其主要特征 <a class="header-anchor" href="#二叉树的定义及其主要特征" aria-label="Permalink to &quot;二叉树的定义及其主要特征&quot;">​</a></h4><ol><li><p>二叉树的定义</p></li><li><p>几种特殊的二叉树</p></li></ol><p>1） <strong>满二叉树</strong>。 一棵高度为 h，且有 2^h - 1 个结点的二叉树称满二叉树，即二叉树中的每层都含有最多的结点。 2） <strong>完全二叉树</strong>。高度 h、有 n 个结点的二叉树，当且仅当其每个结点都与高度为 h 的满二叉树中编号为 1~n 的结点一一对应时，称为完全二叉树 <img src="'+e+'" alt="alt text"> 1️⃣ 若 i≤Ln/2」，则结点 i 为分支结点，否则为叶结点。 2️⃣ 叶结点只可能在层次最大的两层上出现。对于最大层次中的叶结点，都依次排列在该层最左边的位置上。 3️⃣ 若有度为 1 的结点，则最多只可能有一个，且该结点只有左孩子而无右孩子。 4️⃣ 按层序编号后，一旦出现某结点(编号为 i)为叶结点或只有左孩子，则编号大于;的结点均为叶结点。 5️⃣ 若 n 为奇数，则每个分支结点都有左孩子和右孩子:若 n 为偶数，则编号最大的分支结点(编号为 n/2)只有左孩子，没有右孩子，其余分支结点左、右孩子都有 。</p><p>3）<strong>二叉排序树</strong>。左子树上所有结点的关键字均小于根结点的关键字;右子树上所有结点的 关 键字均大于根结点的关键字;左子树和右子树又各是一棵二叉排序树</p><p>4）<strong>平衡二叉树</strong>。树中任意一个结点的左子树和右子树的高度之差的绝对值不超过 1。</p><p>5）<strong>正则二叉树</strong>。树中每个分支结点都有 2 个孩子，即树中只有度为 0 或 2 的结点</p><ol start="3"><li>二叉树的性质</li></ol><p>1）非空二叉树上的叶结点数等于度为 2 的结点数加 1，即 n0 =n2 +1。 设度为 0，1 和 2 的结点个数分别为 n0.n1 和 n2，结点总数 n=n0+n1+n2。 2）非空二叉树的第 k 层最多有 2^(h-1) 个结点(k≥1) 3）高度为 h 的二又树至多有 2^h - 1 个结点 <img src="'+t+'" alt="alt text"></p><h4 id="二叉树的存储结构" tabindex="-1">二叉树的存储结构 <a class="header-anchor" href="#二叉树的存储结构" aria-label="Permalink to &quot;二叉树的存储结构&quot;">​</a></h4><ol><li><p>顺序存储结构 顺序存储结构 二叉树的顺序存储是指用一组连续的存储单元依次自上而下、自左至右存储完全二叉树上的结点元素，即将完全二叉树上编号为 i 的结点元素存储在一维数组下标为 i-1 的分量中,在最坏情况下，一个高度为 h 且只有 h 个结点的单支树却需要占据近 2^h- 1 个存储单 元 <img src="'+h+'" alt="alt text"></p><blockquote><p>建议从数组下标 1 开始存储树中的结点，保证数组下标和结点编号一致。</p></blockquote></li><li><p>链式存储结构</p></li></ol><p><img src="'+k+`" alt="alt text"></p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BiTNode{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ElemType data;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BiTNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lchild,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rchild;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}BiTNode,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BiTree</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>在 含 有 n 个 结 点 的 二 叉 链 表 中 ， 含 有 n + 1 个 空 链 域</p></blockquote><h2 id="二叉树的遍历和线索二叉树" tabindex="-1">二叉树的遍历和线索二叉树 <a class="header-anchor" href="#二叉树的遍历和线索二叉树" aria-label="Permalink to &quot;二叉树的遍历和线索二叉树&quot;">​</a></h2><h4 id="二叉树的遍历" tabindex="-1">二叉树的遍历 <a class="header-anchor" href="#二叉树的遍历" aria-label="Permalink to &quot;二叉树的遍历&quot;">​</a></h4><p>二又树的遍历是指按某条搜索路径访问树中每个结点，使得每个结点均被访问一次，<strong>而且仅被访问一次</strong></p><p>常见的遍历次序有先序(NLR)、中序(LNR)和后序(LRN)三种遍历算法，其中“序”指的是根结点在何时被访问</p><ol><li><strong>先序遍历(PreOrder)</strong></li></ol><p>若二叉树为空，则什么也不做:</p><ol><li>访问根结点；</li><li>先序遍历左子树</li><li>先序遍历右子树。</li></ol><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PreOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BiTree </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      visit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      PreOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T-&gt;lchild);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      PreOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T-&gt;rchild);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2"><li><strong>中序遍历(InOrder)</strong></li></ol><p>若二叉树为空，则什么也不做:</p><ol><li>先序遍历左子树</li><li>访问根结点；</li><li>先序遍历右子树。</li></ol><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BiTree </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      PreOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T-&gt;lchild);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      visit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      PreOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T-&gt;rchild);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2"><li><strong>后序遍历(PostOrder)</strong></li></ol><p>若二叉树为空，则什么也不做:</p><ol><li>先序遍历左子树</li><li>先序遍历右子树。</li><li>访问根结点；</li></ol><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BiTree </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      PreOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T-&gt;lchild);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      PreOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T-&gt;rchild);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      visit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>不管采用哪种遍历算法，每个结点都访问一次且仅访问一次，所以时间复杂度都是 O(n)。在递归遍历中，递归工作栈的栈深恰好为树的深度，所以在最坏情况下，二叉树是有 n 个结点且深度内 n 的单支树，遍历算法的空间复杂度为 O(n)</p><ol start="4"><li>递归算法和非递归算法的转换</li></ol><p>中序： 1️⃣ 沿着根的左孩子，依次入栈，直到左孩子为空，说明已找到可以输出的结点，此时栈内元 素依次为 ABD。 2️⃣ 栈顶元素出栈并访问:若其右孩子为空，继续执行 2️⃣; 3️⃣ 若其右孩子不空，将右子树转执行 1️⃣</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InOrder2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BiTree </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   InitStack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(S);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   BiTree p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(S)){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         Push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(S , p);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p-&gt;lchild</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         Pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(S,p);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         visit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p-&gt;rchild;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>先序：</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InOrder2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BiTree </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   InitStack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(S);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   BiTree p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(S)){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         visit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         Push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(S , p);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p-&gt;lchild</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         Pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(S,p);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p-&gt;rchild;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="5"><li><strong>层次遍历</strong></li></ol><p>进行层次遍历 ，需要借助一个队列。 层次遍历的思想如下: 1️⃣ 首先将二叉树的根结点入队。 2️⃣ 若队列非空，则队头结点出队，访问该结点，若它有左孩子，则将其左孩子入队;若它有右孩子，则将其右孩子入队。 3️⃣ 重复 2 步，直至队列为空。</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LevelOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BiTree </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   InitQueue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Q);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   BiTree p;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   EnQueue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Q , T);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Q)){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      DeQueue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Q,p);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      visit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p-&gt;lchild </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EnQueue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Q,p-&gt;lchild);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p-&gt;rchild </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EnQueue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Q,p-&gt;rchild);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="6"><li>由遍历序列构造二叉树</li></ol><blockquote><p>先序序列对应的不同二叉树的分析(2015)</p></blockquote><p>对于一棵给定的二叉树，其先序序列、中序序列、后序序列和层序序列都是确定的。然而，只给出四种遍历序列中的任意一种，却无法唯一地确定一棵二叉树。若已知中序序列，再给出其他三种遍历序列中的任意一种，就可以唯一地确定一棵二叉树</p><p>(1) 由先序序列和中序序列构造二叉树</p><p><img src="`+r+'" alt="alt text"></p><p>(2) 由后序序列和中序序列构造二叉树 (3) 由层序序列和中序序列构造二叉树</p>',62),c=[d];function g(o,b,y,u,m,F){return a(),i("div",null,c)}const C=s(E,[["render",g]]);export{B as __pageData,C as default};