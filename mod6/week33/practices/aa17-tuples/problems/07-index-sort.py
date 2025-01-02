# Create a function that returns a list of tuples sorted by the value of the second index in the tuple.

# Write your function here.

# ^ So what we really want here is for each list of tuples to be sorted by the value of the second element (at index 1) of each tuple. So we're looking at the element at position 1 in each tuple and using it as the 'key' for sorting.

# ^ Remember that he sorted() method in python can take a KEY, which is a function to execute for deciding the order. The default is 'None.'

def index_sort(list):
    return sorted(list, key=lambda x: x[1])
    # So what we're doing here is calling the sorted() method on the list that has been passed into the function as a parameter.
    # Then we are sorting it based on the element located at index 1 of each tuple (x)

print(index_sort([(1, 2, 3), (6, 8, 9), (0, 5, 0), (2, 0, 4)])) #> [(2, 0, 4), (1, 2, 3), (0, 5, 0), (6, 8, 9)]
print(index_sort([(9, 55, 11), (7, 14, 5), (32, 41, 12), (8, 5, 2)])) #> [(8, 5, 2), (7, 14, 5), (32, 41, 12), (9, 55, 11)]
print(index_sort([(0, 9, 1), (4, 3, 0), (6, 5, 14), (64, 32, 28)])) #> [(4, 3, 0), (6, 5, 14), (0, 9, 1), (64, 32, 28)]
