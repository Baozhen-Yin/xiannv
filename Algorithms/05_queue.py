#队列 一边入一边出
class Queue(object):
    #队列
    def __init__(self): #构造函数
        self.__list=[] #空列表用来保存队列数据

    def enqueue(self,item):
        #往队列中添加一个元素
        self.__list.append(item) #尾部添加 o（1）
        #self.__iist.insert(0,item) o(n)头部添加 尾部出
    def dequeue(self):
        #从队列头部删除一个元素
        return self.__list.pop(0) # 尾部添加 弹出头部第一个 时间复杂度o（1）
        # self.__list.pop() 

    def is_empty(self):
        #判断一个队列是否为空
        return self.__list==[] #空列表返回false

    def size(self):
        #返回队列的大小
        return len(self.__list)

if __name__=="__main__":
    q=Queue()
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    q.enqueue(14)
    q.enqueue(5)
    print(q.dequeue())
    print(q.dequeue())
    print(q.dequeue())
    print(q.dequeue())
    print(q.dequeue())  #队列 怎么进怎么出
  