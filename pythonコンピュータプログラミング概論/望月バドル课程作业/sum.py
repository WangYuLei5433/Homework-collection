ls1=[3,1,4,1,5,9,2,6,5,3]
ls2=list(range(0,10))
ls3=[]
for i in range(0,10):
    ls3.append(ls1[i]+ls2[i])
print(ls3)