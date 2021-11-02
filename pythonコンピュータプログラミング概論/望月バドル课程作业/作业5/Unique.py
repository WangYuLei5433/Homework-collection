l1=[1,1,2,2,3,3,4,5,6,6,7]
l1set=set()
l2=list()
for i in range(len(l1)):
    l1set.add(l1[i])

l2=list(l1set)
print(l2)
