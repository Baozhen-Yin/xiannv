def insert_sort(alist):
    n=len(alist)
    #外层循环 从右边的无序序列中取出多少个元素执行
    for j in range(1,n):
        i=j #i代表内层循环起始
        #内层循环代表执行从右边的无序序列中取出第一个元素，即I位置的元素，然后将其插入到正确位置中
        while i>0:
            if alist[i]<alist[i-1]:
                alist[i],alist[i-1]=alist[i-1],alist[i]
                i-=1
            else:
                break
if __name__=="__main__":
    alist=[2,3,4,1,2,456,332,445,223,433,235,56,233,23,45,89]
    print(alist)
    insert_sort(alist)
    print(alist)
