def select_sort(alist):#定义一个选择排序接收一个列表
    n=len(alist)
    for j in range(n-1): #j实际产生0~n-2
        min_index=j
        for i in range(j+1,n):
            if alist[min_index]>alist[i]:
                min_index=i
        alist[j],alist[min_index]=alist[min_index],alist[j]

if __name__=="__main__":
    alist=[54,65,43,54,56,22,34,21,234,90]
    print(alist)
    select_sort(alist)
    print(alist)