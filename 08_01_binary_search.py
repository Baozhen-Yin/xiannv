def binary_search(alist,item):  #在某個序列中查找特定元素是否存在
    #二分查找 遞歸版本
    #比較次數少，查找速度快，平均性能好。但是待查表必須爲有序列表，且插入刪除困難
    n = len(alist)
    if n >0:
        mid=n//2
        if alist[mid] == item: #如果mid的值等於查找的值 直接找到 返回true
            return True
        elif item < alist[mid]: #判斷是在左邊還是右邊
            return binary_search(alist[:mid],item)
        else:
            return binary_search(alist[mid+1:],item)
    return False

if __name__=="__main__":
    li=[1,3,4,5,6,66,77,88,99,100]
    print(li)
    print(binary_search(li,55))
    print(binary_search(li,100))
    print(binary_search(li,99))
    print(binary_search(li,5))
