
# ! Ranges in Python

# Ranges are iterable and are specifically for counting numbers
# Declare using the range constructor

nums = range(10) # creates a range with 10 numbers, 0 - 9
print(nums) # prints range(0, 10)

# We can also print the values in a range within a list using the list constructor
print(list(nums)) # prints [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

counters = range(1, 11)
print(counters) # prints range(1, 11)
print(list(counters)) # prints [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Ranges can also take a step
fives = range(0, 51, 5)
print(list(fives)) # prints [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

# What happens if we forget the starting value?
test = range(51, 5)
print(list(test)) # prints an empty list [] because Python thinks 51 is the start and 5 is the end

# We use ranges to build our for loops
items = ['a', 'b', 'c']

for i in range(len(items)):
    print(i, items[i])

"""
The code above prints:

0 a
1 b
2 c
"""

for i in range(1, 10, 2):
    print(i) # prints 1, 3, 5, 7, 9
