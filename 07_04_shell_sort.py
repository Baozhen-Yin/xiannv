def shell_sort(alist):
    #希尔排序

#gap变化到0之前，插入算法执行的次数
    n=len(alist)
    gap=n//2
    while gap > 0:
    #插入算法，与普通插入算法的区别就是gap步长
        for j in range(gap,n):
            #j=[gap,gap+1,gap+2,gap+3...n+1]
            i=j
            while i>0:
                if alist[i]<alist[i-gap]:
                    alist[i],alist[i-gap]=alist[i-gap],alist[i]
                    i-=gap
                else:
                    break
        #缩短gap步长
        gap//=2
if __name__=="__main__":
    alist=[2,3,4,1,2,456,332,445,223,433,235,56,233,23,45,89]
    print(alist)
    shell_sort(alist)
    print(alist)


