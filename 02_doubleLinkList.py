class Node(object):
    #节点
    def __init__ (self,item):
        self.item=item
        self.prev=None #前驱结点
        self.next=None #后继节点

class DoubleLinkList(object):
    
    def __init__(self,node=None):
        self.__head=node
        #定义一个头节点

    def is_empty(self): 
        return self.__head is None

  
    def length(self):
        #查看此列表长度
        count=0
        cur=self.__head
        while cur!= None:
            count +=1
            cur=cur.next
        return count

    def travel(self):
        cur=self.__head
        while cur!=None:
            print(cur.item,end=" ")
            cur=cur.next
        print("")

    def add(self,item):
        node=Node(item)
        node.next=self.__head
        #self.head.prev=node
        self.__head=node
        node.next.prev=node #prev为前驱节点
    
 
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
            node.prev=cur
        

    def insert(self,pos,item):
        #如果pos自第一个则为头插法
        node=Node(item)
        cur=self.__head
        if pos<=0:
            self.add(item)
        elif pos>(self.length()-1): #pos为尾插法
            self.append(item)
        else:
            count=0
            while count<pos:
                count+=1
                cur=cur.next
            node.prev=cur.prev
            node.next=cur
            cur.prev.next=node
            cur.prev=node   

    def remove(self,item):
        cur=self.__head
        while cur != None: 
            if cur.item==item: #一直追加到末尾
                if item==self.__head:
                     #如果为头节点
                    self.__head=cur.next
                    if cur.next:
                    #判断链表是否只有一个节点
                        cur.next.prev=None
                    else:
                        cur.prev.next=cur.next
                        if cur.next:
                            cur.next.prev=cur.prev
                    break
            else:
                cur=cur.next

    
    def search(self,item):
        cur=self.__head
        while cur != None:
            if cur.item==item:
                return True
            else:
                cur=cur.next
        return False
     
if __name__=="__main__":
    dll=DoubleLinkList()
    print(dll.is_empty())
    print(dll.length())


    dll.append(1)
    print(dll.is_empty())
    print(dll.length())

    dll.append(2)
    dll.add(100)
    dll.append(5)
    dll.append(2500)
    dll.append(1000345)
    dll.travel()
    dll.append(9283)
    dll.append(2345)
    dll.travel()
    dll.insert(3,100211)
    dll.travel()
    print(dll.search(1))
