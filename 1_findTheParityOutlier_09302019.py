# Using Modulo:
def findOutlier(integers1):
    output = 0
    if (((integers1[0]/2) % 1 == 0) or ((integers1[1]/2) % 1 == 0)) and (((integers1[2]/2) % 1 == 0) or ((integers1[3]/2) % 1 == 0)):
        for integer in integers1:
            if ( ((integer)/2) % 1) != 0:
                output = integer
    else:
        for integer in integers1:
            if ( ((integer+1)/2) % 1) != 0:
                output = integer
    
    return output

print(findOutlier([3,5,7,9,13,11,15,4,7,9,21,15,1]))

# This is a solution I came up with as an adaption from the Obolensky JS solution:
def findOutlier2(integers2):
    evens = list(filter(lambda x: x % 2 == 0, integers2))
    odds = list(filter(lambda x: x % 2 != 0, integers2))
    if len(evens) == 1:
        return evens[0]
    else:
        return odds[0]

print(findOutlier2([3,5,7,9,13,11,15,4,7,9,21,15,1]))

# Best Python Practice solution from user1978124:
def find_outlier(integers3):
    odds = [x for x in integers3 if x%2!=0]
    evens= [x for x in integers3 if x%2==0]
    return odds[0] if len(odds)<len(evens) else evens[0]