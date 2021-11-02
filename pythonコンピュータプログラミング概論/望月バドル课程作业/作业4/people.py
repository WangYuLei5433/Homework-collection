dc={'Alice':(22,'女性'),'Bob':(18,'男性'),'Charlie':(20,'男性'),'Diana':(19,'女性')}
dcValues=list(dc.values())
l1,l2=[],[]

for a,b in dcValues:
    if(a>=20):
        l1.append((a,b))
    if(b=='女性'):
        l2.append((a,b))

print('%s\n%s\n%s'%(dc,l2,l1))