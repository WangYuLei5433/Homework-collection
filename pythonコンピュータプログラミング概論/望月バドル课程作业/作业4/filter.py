ls1=[3,1,4,1,5,9,2,6,5,3]
ls2=[]
for i in range(len(ls1)):
    if(ls1[i]%2==0):
        ls2.append(ls1[i])
print(ls2)