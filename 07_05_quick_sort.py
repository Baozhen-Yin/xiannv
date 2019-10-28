def quick_sort(alist,first,last):
    #快速排序
    if first >= last:
        return
    mid_value=alist[first] #定义第一个元素为中间元素 通过alist[0]把文件分为两个部分
    low_index=first #經歷過的元素比mid_value小
    high_index=last #經歷過的元素比mid_value大

    while low_index<high_index:
        #high 左移
        while low_index<high_index and alist[high_index] >= mid_value: #把等於的情況放到一邊去處理
            high_index-=1
        alist[low_index]=alist[high_index]

        while low_index<high_index and alist[low_index]< mid_value:
            low_index+=1
        alist[high_index]=alist[low_index]

        #從循環退出時 low==high
    alist[low_index]=mid_value

    #對low左邊列表執行快速排序
    quick_sort(alist,first,low_index-1)
    
    #對low右邊列表排序
    quick_sort(alist,low_index+1,last)


if __name__=="__main__":
    li=[2,3,4,1,2,456,332,445,223,433,235,56,233,23,45,89]
    print(li)
    quick_sort(li,0,len(li)-1)
    print(li)



    