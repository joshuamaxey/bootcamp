# Create a function that returns a list of tuples that are sorted by the sum of
# the tuples. Hint: use the built-in range function.

# Write your function here.

# ^ POLYA
# 1. Create a function that takes in a list of tuples
# 2. The function should return a new list where the tuples are sorted based on the sum of their elements
# 3. We can use the built-in sum() function to calculate the sum of the elements in teach tuple.
# 4. We can use the sorted() function with a custom key to sort the list of tuples by their sums

# ^ STEPS
# 1. Define the function
# 2. Sort the tuples using sorted() with a lambda function to calculate the sum of each tuple as the key for sorting
# 3. Return the sorted list

def bubble_sum(tuples_list):
    sorted_list = sorted(tuples_list, key=lambda x: sum(x))
    # ^ Here x represents the individual tuples, with sum(x) calculating the sum of the elements in each tuple so that it can be used for sorting
    return sorted_list

print(bubble_sum([(3, 5), (1, 3), (6, 5), (2, 8)])) #> [(1, 3), (3, 5), (2, 8), (6, 5)]
print(bubble_sum([(2, 5), (2, 5), (7, 8), (2, 6)])) #> [(2, 5), (2, 5), (2, 6), (7, 8)]
print(bubble_sum([(5, 6), (1, 2), (3, 0), (2, 4)])) #> [(1, 2), (3, 0), (2, 4), (5, 6)]
print(bubble_sum([(5, 4), (1, 0), (2, 1), (4, 1)])) #> [(1, 0), (2, 1), (4, 1), (5, 4)]
