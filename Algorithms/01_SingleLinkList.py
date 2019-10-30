class Node(object):
    #节点
    def __init__(self,elem):
        #定义一个节点类和一个函数
         self.elem=elem
         self.next=None

class SingleLinkList (object):
    #单链表
    def __init__(self,node=None):
        self.__head=node
        #初始化空链表 私有变量 别人不需要知道我的头部节点
    
    def is_empty(self):
        #查看此列表是否为空
        return self.__head==None

    def length(self):
        #查看此列表长度
        count=0
        cur=self.__head
        while cur!= None:
            count +=1
            cur=cur.next
        return count

    def travel(self,end=" "):
        #遍历链表
        cur=self.__head
        while cur != None:
              print(cur.elem,end=" ")
              cur=cur.next
        print("")

    def add(self,item):
        #插入头节点 头插法
        node=Node(item)
        node.next=self.__head
        self.__head=node #时间复杂度为o(1)

    def append(self,item):
        #在尾部插入节点 尾插法
        node=Node(item)
        if self.is_empty():
            self.__head=node #特殊情况 万一是空列表
        else:
            cur=self.__head
            while cur.next!=None: #none没有next 所以有if特殊情况
                  cur=cur.next
            cur.next=node #时间复杂度为o(n)
        
    def insert(self,position,item):
        #在指定位置插入节点
        if position<=0:
            self.add(item) #如果位置在0或者小于0等于头插法 直接插入
        elif position>(self.length()-1):
            self.append(item) #如果位置在最尾部
        else:
            pre=self.__head
            count=0
            while count<(position-1):
                count +=1
                pre=pre.next
            node=Node(item)
            node.next=pre.next
            pre.next=node  #时间复杂度为o(n)
            
    def remove(self,item):
        #删除具体的数据 不看位置 重复的只删除第一个
        cur=self.__head
        pre=None
        while cur != None:    #空链表考虑特殊情况 不执行任何操作 此循环可执行
            if cur.elem==item:
                #先判断此节点是否是头节点
                #如果是头节点
                if cur==self.__head:
                    self.__head=cur.next
                    break
                else:   
                    pre.next=cur.next
                    break
            else:
                pre=cur
                cur=cur.next  #删除完毕        
    
    def search(self,item):
        #查找元素
        cur=self.__head
        while cur!= None:
            if cur.elem==item:
                return True
            else:
                cur=cur.next
        return False #时间复杂度为o(n)
        
if __name__=="__main__":
    ll=SingleLinkList()
    print(ll.is_empty())
    print(ll.length())


    ll.append(1)
    print(ll.is_empty())
    print(ll.length())

    ll.append(2)
    ll.add(100)
    ll.append(5)
    ll.append(2500)
    ll.append(1000345)
    ll.travel()
    ll.append(9283)
    ll.append(2345)
    ll.travel()
    ll.insert(3,100211)
    ll.travel()
    print(ll.search(1))
