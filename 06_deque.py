class Deque(object):
    #双端队列 
    def __init__(self): #构造函数
        self.__list=[] #空列表用来保存队列数据

    def add_front(self,item):
        #往头部添加一个元素
        #self.__list.append(item) #尾部添加 o（1）
        self.__list.insert(0,item) #o(n)头部添加 

    def add_rear(self,item):
        self.__list.append(item) #尾部添加

    def pop_front(self):
        #从队列头部删除一个元素
        return self.__list.pop(0)  #时间复杂度o（1）
        # self.__list.pop()

    def pop_rear(self):
        #从队列尾部删除一个元素
        return self.__list.pop() # 尾部添加 弹出头部第一个 时间复杂度o（1）
        # self.__list.pop() 

    def is_empty(self):
        #判断一个队列是否为空
        return self.__list==[] #空列表返回false

    def size(self):
        #返回队列的大小
        return len(self.__list)     

if __name__=="__main__":
    d=Deque()
    d.add_front(1) #后进先出
    d.add_rear(5)
    d.add_front(2)
    d.add_rear(4)
    d.add_front(3)
    d.add_rear(3) #尾巴先出

    print(d.pop_front())
    print(d.pop_front())
    print(d.pop_front())
    print(d.pop_rear())
    print(d.pop_rear())
    print(d.pop_rear())
