# Given an array, find the int that appears an odd number of times.
# There will always be only one integer that appears an odd number of times.

# Solution 1:
# This method isn't the greatest because it requires adding to the list, but it is nice if you are only seeking one number,
# because you don't need to process the entire list to find that single number.
def oddInt(a):
    sortedArray = sorted(a)
    sortedArray.append(0)
    counter = 1
    for index,item in enumerate(sortedArray):
        if index == (len(sortedArray)-1):
            break
        if sortedArray[index] == sortedArray[index+1]:
            counter = counter+1
        else:
            if counter % 2 != 0:
                return sortedArray[index]
            else:
                counter = 1
        
print(oddInt([9,1,5,9,3,8,6,1,5,3,8,6,9]))

# Solution 2:
# This method is great because it can be adapted to find all numbers listed an odd number of times
# Unfortunately it will take longer to come up with the same answer in the case where only a single number is desired,
# because it will go through the entire array before returning an answer.
# Credit for this solution goes to my teacher, Steve Kain:

def oddInt2(a):
    counter = {}
    for item in a:
        if item in counter:
            counter[item] += 1
        else:
            counter[item] = 1
            
    for key in counter:
        if counter[key] % 2 != 0:
            return key
        
    return None

print(oddInt2([9,1,5,9,3,8,6,1,5,3,8,6,9]))


# Best Practice solution by cerealdinner:
def find_it(seq):
    for i in seq:
        if seq.count(i)%2!=0:
            return i