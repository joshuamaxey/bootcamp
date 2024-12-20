# Create a function that returns the indices of all occurrences of an item in
# the list.

# ! POLYA
# Create a result list to hold the indices of the specified item
# loop through the list, using its length as the 'range' for the for loop
# If the list item at the current index is equal to the input value...
# ...append that index (location of the item in the input list) to the result list
# After the loop is complete, return the result list

# Write your function here.

def get_indices(list, value):
    res = []
    for i in range(len(list)):
        if list[i] == value:
            res.append(i)
    return res

print(get_indices(["a", "a", "b", "a", "b", "a"], "a"))
# Prints [0, 1, 3, 5]

print(get_indices([1, 5, 5, 2, 7], 7))
# Prints [4]

print(get_indices([1, 5, 5, 2, 7], 5))
# Prints [1, 2]

print(get_indices([1, 5, 5, 2, 7], 8))
# Prints []
