class Node(object):
    #节点
    def __init__(self,elem):
        #定义一个节点类和一个函数
         self.elem=elem
         self.next=None

class SingleCycleLinkList (object):
    #单向循环链表
    def __init__(self,node=None):
        self.__head=node
        #初始化空链表 私有变量 别人不需要知道我的头部节点
        if node:
           self.__head.next=self.__head
    
    def is_empty(self):
        #查看此列表是否为空
        return self.__head is None

    def length(self):
        #查看此列表长度
        if self.is_empty(): #如果列表为空链表
            return 0
        #cur 游标，用来移动和遍历节点
        #count记录数据
        count=1 #因为考虑只有一个节点的情况所以从一开始
        cur=self.__head
        while cur.next != self.__head:
            count += 1
            cur=cur.next
        return count

    def travel(self):
        if self.is_empty():
            return 
        #遍历链表
        cur=self.__head 
        while cur.next != self.__head: #打印不出来最后一个节点
              print(cur.elem,end=" ")
              cur=cur.next
        #退出循环cur指向尾节点 但尾节点没有被打印出来
        print(cur.elem)

    def add(self,item):
        #插入头节点 头插法
        node=Node(item)
        if self.is_empty():
            self.__head=node
            node.next=node
        else:
            cur=self.__head
            while cur.next != self.__head:
                cur=cur.next #当退出循环 cur指向尾节点
            node.next=self.__head #node节点指向第一个节点
            self.__head=node  #头指向node
            cur.next=node #时间复杂度为o(1)

    def append(self,item):
        #在尾部插入节点 尾插法
        node=Node(item)
        if self.is_empty():
            self.__head=node
            node.next=self.__head  #特殊情况 万一是空列表
        else:
            cur=self.__head
            while cur.next != self.__head:
                cur=cur.next #找到尾节点
            node.next =self.__head
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
        if self.is_empty():
            return
        cur=self.__head
        pre=None
        while cur != self.__head:    #空链表考虑特殊情况 不执行任何操作 此循环可执行
            if cur.elem==item:
                #先判断此节点是否是头节点
                #如果是头节点
                if cur==self.__head: #头节点
                    #找尾节点 rear游标
                    rear=self.__head
                    while rear.next != self.__head:
                        rear=rear.next #找到尾节点
                        self.__head=cur.next  #此时cur=self.__head,指向了head
                        rear.next=self.__head
                        return
                else: #中间节点
                    pre.next=cur.next
                    break
            else: 
                pre=cur
                cur=cur.next  #删除完毕        
        #退出循环代表为尾节点
        if cur.elem == item:#有尾节点
            if cur==self.__head: #链表只有一个节点
                self.__head=None
            else:
                pre.next=cur.next


    def search(self,item):
        #查找元素
        if self.is_empty():
            return False
        cur=self.__head
        while cur!= self.__head:
            if cur.elem==item:
                return True
            else:
                cur=cur.next
        if cur.elem == item:
            return True
        #退出循环 判断尾节点
        return False #时间复杂度为o(n)

if __name__=="__main__":
    ll=SingleCycleLinkList()
    print(ll.is_empty())
    print(ll.length())


    ll.append(1)
    print(ll.is_empty())

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
