#二叉树广度优先遍历  """从树的root开始，从上到下从左到右遍历整个树的节点"""

#利用队列实现树的层次遍历

class Node(object): #树的节点类
    def __init__(self,item): #添加数据
        self.elem=item
        self.lchild=None #左子节点
        self.rchild=None #右子节点
    
class Tree(object): #二叉树
    def __init__(self): #构造函数
        self.root=None#根节点
    
    def add(self,item):
        node=Node(item)
        if self.root is None:
            self.root=node
            return
        queue=[self.root] #添加根节点
        while queue: #只要队列不为空
            cur_node=queue.pop(0) #读出根  #cur_node当前处理的节点
            if cur_node.lchild is None: #判断当前节点左孩子是否为空
                cur_node.lchild=node
                return
            else:
                queue.append(cur_node.lchild)
            if cur_node.rchild is None:
                cur_node.rchild=node
                return
            else:
                queue.append(cur_node.rchild) 

    def breadth_travel(self): #宽度遍历
        """广度遍历"""
        if self.root is None:  #如果树一开始就是一个空树
            return
        queue = [self.root]
        while queue: #当队列不为空
            cur_node = queue.pop(0) #当前的节点为队列第一个
            print(cur_node.elem)  #打印一下当前节点的数据
            if cur_node.lchild is not None:
                queue.append(cur_node.lchild)
            if cur_node.rchild is not None:
                queue.append(cur_node.rchild)


    def preorder(self,node): # 递归方式 把某一部分当作一棵树对待 去按照前序后序中序遍历 为了调用自身 根节点在变化 遍历不同子树 所以根每次都要传进来
        """先序遍历"""
        if node == None:
            return
        print(node.elem,end=" ") #根
        self.preorder(node.lchild)  #左
        self.preorder(node.rchild)  #右


    def inorder(self,node): # 递归方式 把某一部分当作一棵树对待 去按照前序后序中序遍历 为了调用自身 根节点在变化 遍历不同子树 所以根每次都要传进来
        """中序遍历"""
        if node == None:
            return
        self.inorder(node.lchild)  #左
        print(node.elem,end=" ")  #根
        self.inorder(node.rchild) #右


    def postorder(self,node): # 递归方式 把某一部分当作一棵树对待 去按照前序后序中序遍历 为了调用自身 根节点在变化 遍历不同子树 所以根每次都要传进来
        """后序遍历"""
        if node == None:
            return
        self.postorder(node.lchild)  #左
        self.postorder(node.rchild) #右
        print(node.elem,end=" ")  #根

if __name__=="__main__":
    tree=Tree()
    tree.add(0)
    tree.add(1)
    tree.add(2)
    tree.add(3)
    tree.add(4)
    tree.add(5)
    tree.add(6)
    tree.add(7)
    tree.add(8)
    tree.add(9)
    tree.breadth_travel()
    print(" ")
    tree.preorder(tree.root)
    print(" ")
    tree.inorder(tree.root)
    print(" ")
    tree.postorder(tree.root)
    print(" ")
