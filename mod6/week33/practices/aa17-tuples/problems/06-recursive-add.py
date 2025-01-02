# Create a recursive function that takes a tuple as an argument and returns the
# summed values in the tuple.

# Write your function here.

# ^ Remember that for a recursive solution, we need two primary components:
# 1. The base case (which ends the recursion)
# 2. The recursive case, where the function calls itself with a smaller problem

# In this case, we want to sum the values in a tuple. The base case will be when the tuple is empty or has only one element. The recursive case will be to add the first element of the tuple of the sum of the rest of the tuple.

def recursive_add(tup):
    # Base case: if the tuple is empty, return 0
    if not tup:
        return 0
    # Base case: if the tuple has only one element, return that element
    elif len(tup) == 1:
        return tup[0]
    # Recursive case: add the first element of the tuple to the sum of the rest of the tuple
    else:
        return tup[0] + recursive_add(tup[1:])


print(recursive_add((2, )))               #> 2
print(recursive_add((2, 4, 6, 8, 10)))    #> 30
print(recursive_add((25, 50, 75, 100)))   #> 250
