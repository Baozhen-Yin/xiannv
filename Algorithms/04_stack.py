class Stack(object):
     #栈
    def __init__(self):
        #存放数据的容器 
        self.__list=[]
          #不希望操作栈的人直接操作容器 做成私有的

    def push(self,item):
        #添加一个新元素item到栈顶
        self.__list.append(item) #尾部添加 顺序表为o(1)
        #self.__list.insert(o,item) 头部添加  链表为o(1)

    def pop(self):
        return self.__list.pop() #弹出 从尾部
        # self.__list.pop(1) #从头部弹出
        #弹出栈顶元素

    def peek(self):
        #返回栈顶元素
        if self.__list:
            return self.__list[-1] #返回最后一个元素
        else:
            return None

    def is_empty(self):
        #判断栈是否为空
        return self.__list == [] #返回一个空列表
        # return not self.__list

    def size(self):
        #返回栈的元素个数
        return len(self.__list)

if __name__=="__main__":
    s=Stack()
    s.push(1)
    s.push(2)
    s.push(3)
    s.push(4)
    print(s.pop())
    print(s.pop())    
    print(s.pop())    
    print(s.pop()) #4先跳出来 先进后厨 后进先出


