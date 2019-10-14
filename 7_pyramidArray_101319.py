# Write a function that when given a number >= 0,
# returns an Array of ascending length subarrays.
# Ex. pyramid(0) => [ ]
# Ex. pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
# NOTE: The subarrays should be filled with 1s

# This is a very ugly surefire solution:
def pyramid(n):
    block = []
    subar = []
    for num in range(n):
        subar.append(1)
        ones = subar[0:(num-1)]
        ones.append(1)
        value = num
        if num > 1:
            value = num-1
        if value > 0:
            ones.append(1)
        block.append(ones)
    return block

# Using a loop in the return statement is the key:
def pyramid(n)
    answer = []
    for i in range(1,n+1):
        answer.append(i * [1])
    return answer

# Best Practice soluion by sahglie:
def pyramid(n):
    return [[1]*x for x in range(1, n+1)]