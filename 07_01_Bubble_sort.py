def Bubble_sort(alist):
    n=len(alist)
    for j in range(n-1):
        #每一轮初始是True 用于判断元素是否需要交换 
        isSorted=True
       
        for i in range(0,n-j-1):
            if alist[i]>alist[i+1]:
                alist[i],alist[i+1]=alist[i+1],alist[i]
                #有交换行为设为 False
                isSorted= False
        #无交换行为 ，直接跳过本次循环git
        if isSorted:
            break

    return alist
        #冒泡

if __name__=="__main__":
    alist=[2,3,4,1,2,456,332,445,223,433,235,56,233,23,45,89]
    print(alist)
    Bubble_sort(alist)
    print(alist)
