# 第 5 章 树与二叉树

## 树的基本概念

#### 树的定义

1. 有且仅有一个特定的称为**根**的结点。
2. 当 n >1 时，其余结点可分为 m(m>0)个互不相交的有限集 T，T2...，Tm，其中每个集
   合本身又是一棵树，并且称为根的子树

显然，树的定义是递归的，即在树的定义中又用到了其自身，树是 一种递归的数据结构

**特点：**

1. 树的根结点没有前驱，除根结点外的所有结点有且只有一个前驱。
2. 树中所有结点都可以有零个或多个后继。

树适用于表示具有层次结构的数据。树中的某个结点(除根结点外)最多只和上一层的 一个
结点(即其父结点)有直接关系，根结点没有直接上层结点，**因此在 n 个结点的树中有 n- 1 条边**。 而树中每个结点与其下一层的零个或多个结点(即其孩子结点)都有直接关系。

#### 基本术语

![alt text](./img/树的树形表示.png)

1. 祖先、子孙、双亲、孩子、兄弟和堂兄弟
2. 结点的度和树的度
   树中一个结点的**孩子个数称为该结点的度**，树中结点的最大度数称为树的度。如结点 B 的度为 2，结点 D 的度为 3，树的度为 3
3. 分支结点和叶结点
   **度大于 0 的结点称为分支结点(又称非终端结点)**; **度为 0(没有孩子结点)的结点称为叶结点(又称终端结点)**;在分支结点中，每个结点的分支数就是该结点的度。
4. 结点的深度、高度和层次。
   结点的层次从树根开始定义，根结点第 1 层，它的孩子第 2 层，以此类推。结点的深度就是结点所在的层次。树的高度(或深度)是树中结点的最大层数。结点的高度是以该结点为根的子树的高度。图 5.1 中树的高度为 4
5. 有序树和无序树
   树中结点的各子树从左到右是有次序的，不能互换，称该树为有序树，否则称为无序树。
6. 路径和路径长度
   树中两个结点之间的路径是由这两个结点之间所经过的结点序列构成的，而路径长度是路径上所经过的边的个数
7. 森林
   森林是 m(m≥ 0)棵互不相交的树的集合。

#### 树的性质

> 树中结点数和度数的关系的应用(2010、2016)

1. **树的结点数 n 等于所有结点的度数之和加 1**。
   结点的度是指该结点的孩子数量，每个结点与其每个孩子都由唯一的边相连，因此树中 所有结点的度数之和等于树中的边数之和。树中的结点(除根外)都有唯一的双亲，**因此结点数 n 等于边数之和加 1，即所有结点的度数之和加 1**

2. 度为 m 的树中第 i 层上至多有 m^i-1 个结点(i≥1)
   第 1 层至多有 1 个结点(即根结点)，第 2 层至多有 m 个结点，第 3 层至多有 m^2 个结点，以此类推。使用数学归纳法可推出第;层至多有 m^i-1 个结点
3. 高度为 h 的 m 叉树至多有(m^h- 1)/(m- 1)个结点

> 指定结点数的三叉树的最小高度分析 (2022 )

![alt text](./img/最小高度分析.png)

> 常用于求解树结点与度之间关系的有:
> 总结点数=n0+n1+n2+.. +nm。
> 总分支数=1n1+2n2+...+mnm，(度为 m 的结点引出 m 条分支)
> 总结点数= 总分支数 +1

## 二叉树的概念

#### 二叉树的定义及其主要特征

1. 二叉树的定义

2. 几种特殊的二叉树

1） **满二叉树**。 一棵高度为 h，且有 2^h - 1 个结点的二叉树称满二叉树，即二叉树中的每层都含有最多的结点。
2） **完全二叉树**。高度 h、有 n 个结点的二叉树，当且仅当其每个结点都与高度为 h 的满二叉树中编号为 1~n 的结点一一对应时，称为完全二叉树
![alt text](./img/两种特殊形态的二叉树.png)
1️⃣ 若 i≤Ln/2」，则结点 i 为分支结点，否则为叶结点。
2️⃣ 叶结点只可能在层次最大的两层上出现。对于最大层次中的叶结点，都依次排列在该层最左边的位置上。
3️⃣ 若有度为 1 的结点，则最多只可能有一个，且该结点只有左孩子而无右孩子。
4️⃣ 按层序编号后，一旦出现某结点(编号为 i)为叶结点或只有左孩子，则编号大于;的结点均为叶结点。
5️⃣ 若 n 为奇数，则每个分支结点都有左孩子和右孩子:若 n 为偶数，则编号最大的分支结点(编号为 n/2)只有左孩子，没有右孩子，其余分支结点左、右孩子都有 。

3）**二叉排序树**。左子树上所有结点的关键字均小于根结点的关键字;右子树上所有结点的 关 键字均大于根结点的关键字;左子树和右子树又各是一棵二叉排序树

4）**平衡二叉树**。树中任意一个结点的左子树和右子树的高度之差的绝对值不超过 1。

5）**正则二叉树**。树中每个分支结点都有 2 个孩子，即树中只有度为 0 或 2 的结点

3. 二叉树的性质

1）非空二叉树上的叶结点数等于度为 2 的结点数加 1，即 n0 =n2 +1。
设度为 0，1 和 2 的结点个数分别为 n0.n1 和 n2，结点总数 n=n0+n1+n2。
2）非空二叉树的第 k 层最多有 2^(h-1) 个结点(k≥1)
3）高度为 h 的二又树至多有 2^h - 1 个结点
![alt text](./img/二叉树的性质.png)

#### 二叉树的存储结构

1. 顺序存储结构
   顺序存储结构 二叉树的顺序存储是指用一组连续的存储单元依次自上而下、自左至右存储完全二叉树上的结点元素，即将完全二叉树上编号为 i 的结点元素存储在一维数组下标为 i-1 的分量中,在最坏情况下，一个高度为 h 且只有 h 个结点的单支树却需要占据近 2^h- 1 个存储单 元
   ![alt text](./img/二叉树的顺序存储.png)

   > 建议从数组下标 1 开始存储树中的结点，保证数组下标和结点编号一致。

2. 链式存储结构

![alt text](./img/二叉链表.png)

```c
typedef struct BiTNode{
  ElemType data;
  struct BiTNode *lchild,*rchild;
}BiTNode,*BiTree
```

> 在 含 有 n 个 结 点 的 二 叉 链 表 中 ， 含 有 n + 1 个 空 链 域

## 二叉树的遍历和线索二叉树

#### 二叉树的遍历

二又树的遍历是指按某条搜索路径访问树中每个结点，使得每个结点均被访问一次，**而且仅被访问一次**

常见的遍历次序有先序(NLR)、中序(LNR)和后序(LRN)三种遍历算法，其中“序”指的是根结点在何时被访问

1. **先序遍历(PreOrder)**

若二叉树为空，则什么也不做:

1. 访问根结点；
2. 先序遍历左子树
3. 先序遍历右子树。

```c
void PreOrder(BiTree T){
   if(T !== NULL){
      visit(T);
      PreOrder(T->lchild);
      PreOrder(T->rchild);
   }
}
```

2. **中序遍历(InOrder)**

若二叉树为空，则什么也不做:

1. 先序遍历左子树
2. 访问根结点；
3. 先序遍历右子树。

```c
void InOrder(BiTree T){
   if(T !== NULL){
      PreOrder(T->lchild);
      visit(T);
      PreOrder(T->rchild);
   }
}
```

2. **后序遍历(PostOrder)**

若二叉树为空，则什么也不做:

1. 先序遍历左子树
2. 先序遍历右子树。
3. 访问根结点；

```c
void InOrder(BiTree T){
   if(T !== NULL){
      PreOrder(T->lchild);
      PreOrder(T->rchild);
      visit(T);
   }
}
```

不管采用哪种遍历算法，每个结点都访问一次且仅访问一次，所以时间复杂度都是 O(n)。在递归遍历中，递归工作栈的栈深恰好为树的深度，所以在最坏情况下，二叉树是有 n 个结点且深度内 n 的单支树，遍历算法的空间复杂度为 O(n)

4. 递归算法和非递归算法的转换

中序：
1️⃣ 沿着根的左孩子，依次入栈，直到左孩子为空，说明已找到可以输出的结点，此时栈内元
素依次为 ABD。
2️⃣ 栈顶元素出栈并访问:若其右孩子为空，继续执行 2️⃣;
3️⃣ 若其右孩子不空，将右子树转执行 1️⃣

```c
void InOrder2(BiTree T){
   InitStack(S);
   BiTree p =T;
   while(p || !IsEmpty(S)){
      if(p){
         Push(S , p);
         p = p->lchild
      }else{
         Pop(S,p);
         visit(p);
         p=p->rchild;
      }
   }
}
```

先序：

```c
void InOrder2(BiTree T){
   InitStack(S);
   BiTree p =T;
   while(p || !IsEmpty(S)){
      if(p){
         visit(p);
         Push(S , p);
         p = p->lchild
      }else{
         Pop(S,p);
         p=p->rchild;
      }
   }
}
```

5. **层次遍历**

进行层次遍历 ，需要借助一个队列。
层次遍历的思想如下:
1️⃣ 首先将二叉树的根结点入队。
2️⃣ 若队列非空，则队头结点出队，访问该结点，若它有左孩子，则将其左孩子入队;若它有右孩子，则将其右孩子入队。
3️⃣ 重复 2 步，直至队列为空。

```c
void LevelOrder(BiTree T ){
   InitQueue(Q);
   BiTree p;
   EnQueue(Q , T);
   while(!IsEmpty(Q)){
      DeQueue(Q,p);
      visit(p);
      if(p->lchild !== NULL) EnQueue(Q,p->lchild);
      if(p->rchild !== NULL) EnQueue(Q,p->rchild);
   }
}
```

6. 由遍历序列构造二叉树

> 先序序列对应的不同二叉树的分析(2015)

对于一棵给定的二叉树，其先序序列、中序序列、后序序列和层序序列都是确定的。然而，只给出四种遍历序列中的任意一种，却无法唯一地确定一棵二叉树。若已知中序序列，再给出其他三种遍历序列中的任意一种，就可以唯一地确定一棵二叉树

(1) 由先序序列和中序序列构造二叉树

![alt text](./img/先序和中序构造二叉树.png)

(2) 由后序序列和中序序列构造二叉树

(3) 由层序序列和中序序列构造二叉树

#### 线索二叉树

1. **线索二叉树的基本概念**

   遍历二叉树是以一定的规则将二叉树中的结点排列成一个线性序列，从而得到几种遍历序列，使得该序列中的每个结点 (第一个和最后一个除外)都有一个直接前驱和直接后继

引入线索 二叉树正是为了加快查找结点前驱和后继的速度。

规定:若无左子树，令 lchild 指向其前驱结点;若无右子树，令 rchild 指向其后继结点。 如图 5.17 所示，还需增加两个标志域，以标识指针域指向左(右)孩子或前驱(后继)

![alt text](./img/线索二叉树的结点结构.png)

线索二叉树的存储结构描述如下:

```c
typedef struct ThreadNode{
   ElemType data;
   struct ThreadNode *lchild,*rchild;
   int ltag,rtag;
}ThreadNode,*ThreadTree
```

2. **中序线索二叉树的构造**

二叉树的线索化是将二叉链表中的空指针改为指向前驱或后继的线索。而前驱或后继的信息 只有在遍历时才能得到，因此线索化的实质就是遍历一次二叉树

![alt text](./img/中序线索二叉树.png)

```c
void InThread (ThreadTree &p, ThreadTree &pre) {
   if(p != NULL){
      InThread(p->lchild,pre); // 递归，线索化左子树
      if(p->lchild == NULL){  // 当前结点的左子树为空
         p->lchild = pre;    //建立当前结点的前驱线索
         p->ltag = 1;
      }
   }
   if(pre != NULL && pre-rchild == NULL){// 前 驱 结 点 非 空 且 其 右 子 树 为 空
      pre->rchild = p;  //建立前驱结点的后继线索
      pre->rtag = 1;
   }
   pre = p;       //标记当前结点成为刚刚访问过的结点
   InThread(p->rchild,pre) // 递 归 ， 线 索 化 右 子树
}


void CreateInThread (ThreadTree T){
ThreadTree pre=NULL;
 if (T != NULL){ // 非空二叉树，线索化
  InThread (T, pre) : // 线 索 化 二叉 树
  pre->rchild=NULL; // 处 理 遍 历 的 最 后 一个结 点
  pre-›rtag=1;
 }
}

```

3. 中序线索二叉树的遍历

4. 先序线索二叉树和后序线索二叉树

## 树、森林

#### 树的存储结构

1. **双亲表示法**
   这种存储结构采用一组连续空间来存储每个结点，同时在每个结点中增设一个伪指针，指示其双亲结点在数组中的位置。如图 5.21 所示，根结点下标为 O，其伪指针域为-1。

![alt text](./img/树的双亲表示法.png)

双亲表示法的存储结构描述如下:

```c
#define MAX_TREE_SIZE 100;

typedef struct {
   ElemType data;
   int parent;
}PTNode;

typedef struct {
   PTNode nodes[MAX_TREE_SIZE];
   int n;
}PTree;
```

双亲表示法利用了每个结点(根结点除外)只有唯一双亲的性质，**可以很快地得到每个结点的双亲结点，但求结点的孩子时则需要遍历整个结构**

2. **孩子表示法**
   孩子表示法是将每个结点的孩子结点视为一个线性表，且以单链表作为存储结构，则 n 个结点就有 n 个孩子链表(叶结点的孩子链表为空表)。而 n 个头指针又组成一个线性表，为便于查找，可采用顺序存储结构。

   与双亲表示法相反，孩子表示法寻找孩子的操作非常方便，而寻找双亲的操作则需要遍历 n 个结点中孩子链表指针域所指向的 n 个孩子链表。

![alt text](./img/孩子表示法和孩子兄弟表示法.png)

3. **孩子兄弟表示法**

孩子兄弟表示法又称二叉树表示法(左孩子右兄弟)，即以二叉链表作为树的存储结构。孩子兄弟表示法使每个结点包括三部分内容:结点值、指向结点第一个孩子结点的指针，以及指向结点下一个兄弟结点的指针(沿此域可以找到结点的所有兄弟结点)

```c
typedef struct CSNode{
   ElemType data;
   struct CSNode *firstchild,*nextsibling;
}CSNode, *CSTree;
```

孩子兄弟表示法比较灵活，其最大的优点是可以方便地**实现树转换为二叉树的操作**，易于查找结点的孩子等，但缺点是从当前结点查找其双亲结点比较麻烦。若为每个结点增设一个 parent 域指向其父结点，则查找结点的父结点也很方便。

#### 树、森林与二叉树的转换

1. **树转换为二叉树**

“左孩子右兄弟”
![alt text](./img/树与二叉树的对应关系.png)

树转换为二叉树的画法:
1️⃣ 在兄弟 结点之间加一连线;
2️⃣ 对每个结点，只保留它与第一个孩子的连线，而与其他孩子的连线全部抹掉;
3️⃣ 以树根为轴心，顺时针旋转 45°

2. 森林转换为二叉树

![alt text](./img/森林转换为二叉树.png)

**二叉树转换 树或森林是唯一的**

#### 树和森林的遍历

1. 树的遍历
   树的遍历是指用某种方式访问树中的每个结点，且仅访问一次。主要有两种方式:

1️⃣ 先根遍历。若树非空，则按如下规则遍历:
• 先访问根结点。
• 再依次遍历根结点的每棵子树，遍历子树时仍遵循先根后子树的规则。
其遍历序列与这棵树相应二叉树的先序序列相同。

2️⃣ 后根遍历。 若树非空，则按如下规则遍历:
• 先依次遍历根结点的每棵子树，遍历子树时仍遵循先子树后根的规则。
• 再访问根结点。
其遍历序列与这棵树相应二叉树的中序序列相同。

2. 森林的遍历

   1️⃣ 先序遍历森林。若森林为非空，则按如下规则遍历:
   • 访问森林中第一棵树的根结点。
   • 先序遍历第一棵树中根结点的子树森林 。
   • 先序遍历除去第一棵树之后剩余的树构成的森林

   2️⃣ 中序遍历森林。森林为非空时，按如 下规则遍历:
   • 中序遍历森林中第一棵树的根结点的子树森林。
   • 访问第一棵树的根结点。
   • 中序遍历除去第 一棵树之后剩余的树构成的森林。

![alt text](./img/树、森林和二叉树的遍历对应关系.png)

## 树与二叉树的应用

#### 哈夫曼树和哈夫曼编码

1. **哈夫曼树的定义**

从树中一个结点到另一个结点之间的分支构成这两个结点之间的**路径**。
路径上的分支数目称为**路径长度**。
树中结点常常被赋子一个表示某种意义的数值，称该结点的**权**。
树中所有**叶结点**的带权路径长度之和称该树的**带权路径长度**，`WPL = Wi*Li`
Wi 是第 i 个叶子结点所带的权值，Li 是该叶结点到根结点的路径长度。

在含有 n 个带权叶结点的二叉树中，其中**带权路径长度(WPL)最小的二叉树称为哈夫曼树，也称最优二叉树**
![alt text](./img/带权路径二叉树.png)

c 树的 WPL 最小，它恰好为哈夫曼树。

2. **哈夫曼树的构造**

给定 n 个权值分别为 W1，W2，...，Wn，的结点，构造哈夫曼树的算法描述如下:

1️⃣ 将这 n 个结点分别作为 n 棵仅含一个结点的二叉树，构成森林 F。

2️⃣ 构造一个新结点，从 F 中选取两棵根结点权值最小的树作为新结点的左、右子树，并且将新结点的权值置为左、右子树上根结点的权值之和。

3️⃣ 从 F 中删除刚才选出的两棵树，同时将新得到的树加入 F 中。

4️⃣ 重复步骤 2️⃣ 和 3️⃣，直至 F 中只剩下一棵树为止 。

3. **哈夫曼树的性质**

   1️⃣ 每个初始结点最终都成为叶结点，且权值越小的结点到根结点的路径长度越大。
   2️⃣ 构造过程中共新建了 n-1 个结点(双分支结点)，因此哈夫曼树的结点总数为 2n-1。
   3️⃣ 每次构造都选择 2 棵树作为新结点的孩子，因此哈夫曼树中不存在度为 1 的结点
   ![alt text](./img/哈夫曼树的构造.png)

4. **哈夫曼编码**

在数据通信中，若对每个字符用相等长度的二进制位表示，称这种编码方式为**定长度编码**。
若允许对不同字符用不等长的二进制位表示，则这种编码方式称为**可变长度编码**。
可变长度编码比固定长度编码要好得多，其特点是对频率高的字符赋以短编码，而对频率较低的字符则赋以较长一些的编码，从而可以使字符的平均编码长度减短，起到压缩数据的效果。

> 根据哈夫曼编码对编码序列进行译码 (2017)

若没有一个编码是另一个编码的前缀，则称这样的编码前缀编码。
举例:设计字符 A,B 和 C 对应的编码 0，10 和 110 是前缀编码。对前缀编码的解码很简单，因为没有一个编码是其他编码的前缀。所以识别出第一个编码，将它翻译为原字符，再对剩余的码串执行同样的解码操作。例如，码串 0010110 可被唯一地翻译为 A,A,B 和 C。另举反例:若再将字符 D 的编码设计为 11，此时 11 是 110 的前缀，则上述码串的后三位就无法唯一翻译。

> 哈夫曼树的构造及相关的分析 (2012、2018、2021、2023)
> 前缀编码的分析及应用(2014、2020)

可以利用二叉树来设计二进制前缀编码。假设为 A，B,C，D 四个字符设计前缀编码，可以用图 5.27 所示的二叉树来表示，4 个叶结点分别表示 4 个字符，且约定左分支表示 0，右分支表示 1，从根到叶结点的路径上用分支标记组成的序列作为该叶结点字符的编码，可以证明如此得到的必为前缀编码。由图 5.27 得到字符 A,B,C,D 的前缀编码分别 0,10,110,111（左 0 右 1 or 左 1 右 0）

![alt text](./img/前缀编码.png)

> 哈夫曼编码和定长编码的差异(2022)

![alt text](./img/哈夫曼树构造哈夫曼编码.png)

`WPL=1×45+3×(13+12+16)+4×(5+9)=224`

此 处的 WPL 可视为最终编码得到二进制编码的长度，共 224 位。若采用 3 位固定长度编码，则得到的二进制编码长度为 300 位，因此哈夫曼编码共压缩了 25%的数据。利用哈夫曼树可以设计出总长度最短的二进制前缀编码

#### 并查集

1. 并查集的概念
   1️⃣ Initial(S):将集合 s 中的每个元素都初始化只有一个单元素的子集合。
   2️⃣ Union(S,Root1,Root2):把集合 s 中的子集合 Root2 并入子集合 Root1。要求 Root1 和 Root2 互不相交，否则不执行合并。
   3️⃣ Find(S,x):查找集合 s 中单元素 x 所在的子集合，并返回该子集合的根结点。

2. 并查集的存储结构
   ![alt text](./img/并查集.png)

3. 并查集的基本实现

结构定义:

```c
#define SIZE 100
int UFSets[SIZE]; // 集合元素数组 (双亲指针数组)
```

(1) 并查集的初始化操作

```c
void Initial(int S[]){
   for(int i=0;i<SIZE;i++){
      S[i] = -1;
   }
}
```

(2) 并查集的 Find 操作

在并查集 S 中查找并返回包含元素 x 的树的根

```c
int Find(int S[], int x){
   while(S[x]>=0){
      x = S[x];
   }
   return x;
}
```

判断两个元素是否属于同一集合，只需分别找到它们的根，再比较根是否相同即可

(3) 并查集的 Union 操作
求两个不相交子集合的并集 。若将两个元素所在的集合合并为一个集合，则需要先找到两个 元素的根，再令一棵子集树的根指向另一棵子集树的根。

```c
void Union(int S[],int Root1,int Root2){
   if(Root1 === Root2) return;
   S[Root2] = Root1;
}
```

Find 操作和 Union 操作的时间复杂度分别为 O(d)和 O(1)，其中 d 为树的深度

4. 并查集实现的优化

在极端情况下，n 个元素构成的集合树的深度为 n，则 Find 操作的最坏时间复杂度为 O(n)。改进的办法是:在做 Union 操作之前，**首先判别子集中的成员数量，然后令成员少的根指向成员多的根，即把小树合并到大树**，为此可令根结点的绝对值保存集合树中的成员数量
(1) 改进 Union 操作

```c
void Union(int S[], int Root1 , int Root2){
   if(Root1 === Root2) return ;
   if(S[Root2] > S[Root1]){ //Root2结点数更少
      S[Root1] += S[Root2]; // 累加集合树的结点总数
      S[Root2] = Root1;     //小树合并到大树
   }else{                  //Root1结点数更少
      S[Root2] += S[Root1];  // 累加集合树的结点总数
      S[Root1] = Root2;       //小树合并到大树
   }
}
```

(2) 改进 Find 操作
