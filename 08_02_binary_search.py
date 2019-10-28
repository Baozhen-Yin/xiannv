def binary_search(alist,item):
    #二分查找 非遞歸
    n=len(alist)
    first=0
    last=n-1
    while first <= last:
        mid=(first+last)//2
        if alist[mid]==item:
            return True
        elif item < alist[mid]:
            last=mid-1
        else:
            first = mid+1
    return False

if __name__=="__main__":
    li=[1,3,4,5,6,66,77,88,99,100]
    print(li)
    print(binary_search(li,55))
    print(binary_search(li,100))
    print(binary_search(li,99))
    print(binary_search(li,5))