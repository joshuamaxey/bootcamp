
# ! Built-In Data Types in Python

# ^ Lists

# Lists are very similar to arrays.
# They are typically homogeneous (store items of the same type)
# They can be instantiated with square brackets
empty_list = []

# They can also be instantiated using the built-in list constructor
new_list = list()

my_list = []
my_other_list = list([1, 2, 3])
my_same_list = list(my_list)

print(my_list) # prints []
print(my_other_list) # prints [1, 2, 3]
print(my_same_list) # prints []

# We can use the 'in' operator to see if a value is in a list

if 1 in my_other_list:
    print(True) # prints True

if 1 in my_list:
    print(True)
else:
    print(False) # prints False

# ^ Tuples

# Tuples are similar to lists, except that they are immutable
# They are instantiated using parenthesis
days_of_the_week = ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")

# They CAN also be instantiated without parenthesis
# This means that instantiating a list of values to a variable without container creates a tuple
my_number_tuple = 1, 2, 3
print(my_number_tuple) # prints (1, 2, 3)

my_color_tuple = "red", "blue", "green"
print(my_color_tuple) # prints ('red', 'blue', 'green')

# They can also be instantiated using the built-in tuple constuctor
# Notice that if we use the constructor with a string, each character becomes a value in the tuple
my_second_color_tuple = tuple('abc')
print(my_second_color_tuple) # prints ('a', 'b', 'c')

# We can also use the tuple constructor to convert other iterables
# (like lists, or like the string above) into a tuple
my_converted_tuple = tuple(my_other_list)
print(my_converted_tuple) # prints (1, 2, 3), the list now in tuple form

# We can also test if a value is in a tuple by using the in operator
print(1 in my_converted_tuple) # prints True
print(5 in my_converted_tuple) # prints False

# ^ Ranges

# A range is an immutable list of ordered numbers
# They are often used with for() loops
# They are declared with three parameters:
    # 1. (optional) start: 0 by default
    # 2. (required) stop: next number past the last number in the sequence (stop itself not included in the sequence)
    # 3. (optional) step: the difference between each number in the sequence
for n in range(5):
    print(n) # prints 0, 1, 2, 3, 4

for n in range(5, 11):
    print(n) # prints 5, 6, 7, 8, 9, 10

for n in range(2, 12, 2):
    print(n) # prints 2, 4, 6, 8, 10

# Ranges can also cover negative numbers

for n in range(-10, 2, 2):
    print(n) # prints -10, -8, -6, -4, -2, 0

# ^ Dictionaries

# A dictionary is a mappable collection
# A hash is used as a key to reference an object stored in the dictionary
# Dictionaries often hold arbitrary objects which can be different (heterogeneous)
# Dictionaries are mutable

# A dictionary can be declared with curly braces
# When declared in this way, string keys must be written as stringss
dictionary_1 = {'one':1, 'two':2, 'three':3}
print(dictionary_1) # prints {'one': 1, 'two': 2, 'three': 3}

# They can also be declared using the built-in dict constructor
# Notice that when using the constructor, string keys don't need to be written as strings
dictionary_2 = dict(one=1, two=2, three=3)
print(dictionary_2) # prints {'one': 1, 'two': 2, 'three': 3}

# We can also put lists and tuples, or even lists within tuples, into dictionaries
dictionary_3 = dict([('one', 1), ('two', 2), ('three', 3)])

# In Python, dictionaries with the same keys/values are the same,
# regardless of how they are defined
print(dictionary_1 == dictionary_2) # prints True

# We can also test to see if a KEY exists within a dictionary by using 'in'
print('one' in dictionary_1) # prints True
print(1 in dictionary_1) # prints False (beacuse it is a value in dictionary, not a key)

# ^ Sets

# A set is an UNORDERED collection of DISTINCT objects
# The objects must be hashable
# They will always be unique, duplicates are dropped
# Sets are useful for:
    # 1. Removing duplicates
    # 2. membership testing (finding out if something is included)
    # 3. Mathematical operators (intersection, union, difference, symmetric difference)
# A standard Set is mutable
# There is an immutable variation in Python called a frozenset

# Sets are created by putting comma-separated values inside braces
school_bag_set = {'book', 'paper', 'pencil', 'pencil', 'book', 'book', 'book', 'eraser'}
print(school_bag_set) # prints {'pencil', 'book', 'eraser', 'paper'}

# We can also create a set using Python's built-in set constructor:
letters_set = set('abcdefg')
print(letters_set) # prints {'f', 'a', 'd', 'g', 'c', 'e', 'b'} (notice they are unordered!)

# We can also test if a value is in a set using the in operator
print('a' in letters_set) # prints True
print('b' not in letters_set) # prints False
print(1 in letters_set) # prints False

# ! Data Types Quiz

nums = [1,6,4.3,7,-8,9,2]
sorted(nums)
print(nums[4:])

nums = [1, 6, 7, 9, 2]
print(sorted(nums)[4:])

nums = 1, 2, 3, 4, 5
print(sum(nums))

nums = set([1, 2, 3, 4, 5, 4, 3, 2, 1])
print(sum(nums))

nums = ['1','2','3','4','5','4','3','2','1']
print(sum(nums))
