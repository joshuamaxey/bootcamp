# Create a function that takes a list of numbers and returns the smallest number
# in the list.

# Write your function here.

# ^ POLYA
# 1. use min(list) to find the smallest number in the list
# 2. return the smallest number in the list

def find_smallest_num(list):
    smallest = min(list)
    return smallest

print(find_smallest_num([34, 15, 88, 2]))                   #> 2
print(find_smallest_num([34, -345, -1, 100]))               #> -345
print(find_smallest_num([-76, 1.345, 1, 0]))                #> -76
print(find_smallest_num([0.4356, 0.8795, 0.5435, -0.9999])) #> -0.9999
print(find_smallest_num([7, 7, 7]))                         #> 7
