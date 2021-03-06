"""树的特点
1.每个节点有零个或多个节点
3.每一个非根节点有且仅有一个父节点
4.除了根节点外，每个子节点可以分为多个不相交的子树

树的术语
1.节点的度：一个节点含有的子树的个数称为该节点的度
2.树的度：一棵树中，最大的节点的度称为树的度
3.叶节点或终端节点：度为零的节点
4.父节点：若一个节点含有子节点，则这个节点称为其子节点的父节点
5.子节点：一个节点含有的子树的根节点称为该节点的子节点
6.兄弟节点：具有相同父节点的节点称为兄弟节点
7.节点的层次：从根开始定义起，根为第一层，根的子节点为第二层，以此类推
8.树的高度或深度：树节点的最大层次
9.堂兄弟节点：父节点在同一层的节点互为堂兄弟
10.节点的祖先：从根到该节点所经分支的所有节点
11.子孙：以某节点为根的子树中任一节点都称为该节点的子孙
12.森林：由m（m>=0）棵互不相交的树的集合称为森林

树的种类
1.无序树：树中任意节点的子节点之间没有顺序关系，这种树称为无序树，也称为自由树
2.有序树：树中任意节点的子节点之间都有顺序关系，这种树称为有序树
    二叉树
        完全二叉树：对于一颗二叉树，假设其深度为d（d>1)。除了第d层外，其他各层的节点数目均已经达到最大值，且d层所有节点从左向右
        连续的紧密排列，这样的二叉树称为完全二叉树，其中
        满二叉树的定义是所有叶节点都在最底层的完全二叉树。
        平衡二叉树（AVL树）：当且仅当任何节点两颗子树的高度差不多大于1的二叉树
        排序二叉树（二叉查找树 Binary search tree）：左边子节点比父节点小，右边子节点比父节点大或者等于
    霍夫曼树（用于信息编码）：带权路径最短的二叉树称为哈夫曼树或最优二叉树
    B树：一种对读写操作进行优化的自平衡二叉查找树，能够保持数据有序，拥有多余两个子树。
    
    
二叉树的性质
1."""

