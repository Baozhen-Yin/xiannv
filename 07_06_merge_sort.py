def merge_sort(alist):
    #歸并排序
    n=len(alist)
    if n<=1:
        return alist
    mid=n//2 #分爲兩個部分
    #left采用歸并排序后形成的有序的列表
    left_li=merge_sort(alist[:mid]) #調用從頭到中間
    #right采用歸并排序后形成有序的新的列表
    right_li=merge_sort(alist[mid:])#調用從中間到末尾
    
    #將兩個有序的子序列合并為一個新的整體
    # merge_sort(left_li,right_li)
    left_pointer,right_pointer=0,0 #左右兩個指針都指向第一個索引
    result=[] #新列表

    while left_pointer<len(left_li) and right_pointer<len(right_li):
        if left_li[left_pointer]<right_li[right_pointer]:
            result.append(left_li[left_pointer]) #左邊的小拿左邊的
            left_pointer +=1
        else:
            result.append(right_li[right_pointer]) #右邊的小拿右邊的
            right_pointer +=1

    result += left_li[left_pointer:]
    result += right_li[right_pointer:]
    return result


if __name__=="__main__":
    li=[2,3,4,1,2,456,332,445,223,433,235,56,233,23,45,89]
    print(li)
    sorted_li=merge_sort(li)
    print(li)
    print(sorted_li)

