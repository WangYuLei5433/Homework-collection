ls1=[3,1,4,1,5,9,2,6,5,3]
ls2=[1,7,3,2,0,5,0,8,0,7]
ls1set=list(set(ls1))
for i in range(len(ls1set)):
    if(ls1set[i] in ls2):
        print(ls1set[i])