
# ! Built-In Functions in Python

# We can use these functions with iterables: filter, map, sorted, enumerate, zip
# We can analyze iterables with: len, max, min, sum, any, all
# We can view attributes and methods on any object or module using dir
# We can work with sets using operators &, |, -, ^

# ^ What are Iterables?

# In Python, iterables are objects capable of returning their members one at a time
# This includes lists, dictionaries, tuples, sets, and strings
# The iter() method accepts an iterable and creates an 'iterator' object which uses the next() method to return the next member of the iterable

names = ['Hannah', 'Lorraine', 'Hailey']

name_iter = iter(names)

first = next(name_iter)     # 'Hannah'
second = next(name_iter)    # 'Lorraine'
third = next(name_iter)     # 'Hailey'

# We can create our own 'iterable' class as long as it implements these two methods: __iter__() and __next__()
# Using built-in functions for iterables requires knowledge of what the returned values are for each iterable type
# i.e. using for ... in on a list will iterate over the values in the list, while using it on adictionary will iterate over the keys

# ! Functions Using Iterables

# ^ filter(function, iterable)

# filter creates a new iterable of the same type which includes each item for which the function returns True

# Parameters:
# 1. Function: takes an item and returns a boolean
# 2. iterable: list, tuple, range, dictionary, set, string

# ^ map(function, iterable)

# map creates a new iterable of the same type which includes the result of calling the funciton on every item in the iterable

# Parameters:
# 1. function: takes an item from the iterable and returns another item
# 2. iterable: list, tuple, range, dictionary, set, string

# ^ sorted(iterable, key=None, reverse=False)

# sorted creates a new sorted list form thei tems in an iterable
# NOTE that the output of sorted is always a list

# Parameters:
# 1. iterable: list, tuple, range, dictionary, set
# 2. key: optional function which converts an item to a value ot be compared (i.e. key=str.lower for case-insensitive sorting on a list of strings)
# 3. reverse: optional boolean (False by default)

# ^ Enumerate(iterable, start=0)

# Enumerate starts with a sequence and converts it to a series of tuples. Each tuple is made up of two elements: index and value
# THe parameter 'start' must be set using its name and an equal sign

quarters = ['First', 'Second', 'Thirt', 'Fourth']

print(enumerate(quarters))          # prints <enumerate object at 0x7fad80230e40>
print(enumerate(quarters, start=1)) # prints <enumerate object at 0x7fad80230e80>

# & ^^^ Wtf is this? Not the output given in the reading for these 'enumerate' calls

# ^ zip(*iterables)

# zip creates a zip object filled with tuples that combine 1-to-1 the items in each provided iterable
# if the iterables have uneven length, then zip stops when the shortest one runs out of itesm

# parameters:
# 1. two or more iterables: usually lists, tuples, or dictionaries

# ! Functions That Analyze Iterables

# ^ len(iterable)

# len returns the nuber of items in the iterable. WOrks on collections (dictionary and set) as well as sequences (list, tuple, range, string)

# ^ max(args, key=None)

# returns the largest of two or more argumetns

# ^ max(iterable, key=None)

# returns the largest item in the iterable

# Parameters:
# 1. args: series of items separated by commas
# 2. iterable: e.g. list, tuple, dictionary, set
# 3. key: optional funciton which converts an item to a value to be compared (i.e. key=str.lower for case-insensitive string comparison)
# NOTE that the 'key' parameter must be set using its name and an equal sign (key=func)

# ^ min(args, key=None)
# ^ min(iterable, key=None)

# Same as max but returns the smallest value

# ^ any(iterable)

# any returns true if any itesm in the iterable are true
# if the iterable is empty, then any returns False because it can't find an ytrue items
# NOTE that in Python, numbers are True when not 0, strings are True when not empty, and other kinds of objects are True when not None

# ^ all(iterable)

# all returns True if all items in the iterable are True
# If the iterable is empty, then al lreturns True because it did not find any items that were False.

# ^ dir(dictionary)

# dir returns a list of attributes and methods on objects or modules

# ! Working with Sets

# Sets are unique data structures because they have special mathematical operations

# ^ Union |

# The | operator produces a new set which is a combination of all elements in multiple sets

a = {1, 2, 3, 4}
b = {2, 4, 5, 6}

print(a | b) # prints {1, 2, 3, 4, 5, 6}

# ^ Intersection &

# The & operator produces a new set which consists only of elements that are in both sets

print(a & b) # prints {2, 4}

# ^ Difference - and Symmetric Difference ^

# The - operator produces a new set of ONLY elements that appear in the first set but NOT the other(s)
# The ^ operator produces a new set of only the elements that appear in EXACTLY ONE set and NOT in both (or all) sets

a = {1, 2, 3}
b = {2, 4, 6}
print(a - b) # prints {1, 3}
print(b - a) # prints {4, 6}
print(a ^ b) # prints (1, 3, 4, 6)

# ! Custom Sort Demo

# ^ Processing Lists
# any, all
# filter
# map
# zip
# custom sort

users = [
    {'id': 12323, 'displayName':'Joe_Smith', 'email':'joe.smith@here.com'},
    {'id': 22312, 'displayName':'Bob_Smith', 'email':'bob.smith@here.com'},
    {'id': 37373, 'displayName':'angel_chen', 'email':'angel.chen@here.com'},
]

print(users) # prints [{'id': 12323, 'displayName': 'Joe Smith', 'email': 'joe.smith@here.com'}, {'id': 22312, 'displayName': 'Bob Smith', 'email': 'bob.smith@here.com'}, {'id': 37373, 'displayName': 'angel chen', 'email': 'angel.chen@here.com'}]

def sorter(user):
    return user['displayName']

users.sort(key=sorter) # Note that here we are actually mutating the current list in place, which is why this is called a 'destructive sort'
# If we want to copy the list and then change it (non-destructive), we can use the sorted() function instead

print(users) # prints our sorted list [{'id': 22312, 'displayName': 'Bob_Smith', 'email': 'bob.smith@here.com'}, {'id': 12323, 'displayName': 'Joe_Smith', 'email': 'joe.smith@here.com'}, {'id': 37373, 'displayName': 'angel_chen', 'email': 'angel.chen@here.com'}]

# ^^^ Notice that angel_chen is sorted LAST even though it is first alphabetically because when we sort, capital letters come before lowercase letters.
# This is why Bob_Smith is first, and why angel_chen comes AFTER Joe_Smith is this situation

reverseUsers = sorted(users, key=sorter, reverse=True) # Here we are using the non-destructive sorted() function to create a new list, AND use the reverse parameter to sort in reverse order

# ! All and Any Demo

# All checks to see if any items are falsy
# If no items are falsy, it returns True
# If at least one item is falsy, it returns False

titles1 = ['Mr.', 'Mrs.', 'Ms.']
titles2 = ['Mr.', 'Mrs.', 'Ms.', '']
titles3 = []

print(all(titles1)) # True (No values are falsy)
print(all(titles2)) # False (One value [empty string] is falsy)
print(all(titles3)) # True (No values are falsy)

# Any checks to see if any items are truthy

feedback1 = ['', '', '', '']
feedback2 = ['So much fun!', '', '', '']
feedback3 = []

print(any(feedback1), feedback1) # False (No truthy values)
print(any(feedback2), feedback2) # True (At least one truthy value)
print(any(feedback3), feedback3) # False (No truthy values)

# ! Filter and Map Demo

scores = [90, 86, 75, 91, 62, 99, 88, 90]

# We want to find out how many A's there are, or which ones are A's
# Take a single score, return True if an A or False if not

def isA(num):
    return num >= 90

aScores = filter(isA, scores) # filter returns an iterable, so we need to convert it to a list to see the values

print(scores)           # prints [90, 86, 75, 91, 62, 99, 88, 90]
print(list(aScores))    # prints [90, 91, 99, 90]

# Map is similar to filter, but it returns the result of the function instead of a boolean

def getGrade(number):
    if number >= 90:
        return 'A'
    elif number >= 80:
        return 'B'
    elif number >= 70:
        return 'C'
    elif number >= 60:
        return 'D'
    else:
        return 'F'

grades = list(map(getGrade, scores))

print(scores)           # prints [90, 86, 75, 91, 62, 99, 88, 90]
print(grades)           # prints ['A', 'B', 'C', 'A', 'D', 'A', 'B', 'A']

print("-----ZIPPED GRADES AND SCORES-----")
combined = list(zip(scores, grades))
print(combined)         # prints [(90, 'A'), (86, 'B'), (75, 'C'), (91, 'A'), (62, 'D'), (99, 'A'), (88, 'B'), (90, 'A')]

# ! Built-In Functions Quiz

set1 = {1, 'hello', 3, 4}
set2 = {'hello', 3, 6}

print(set1 - set2)
print(set1 ^ set2)
print(set2 & set1)

lst = [
    {'a': 1, 'b': 0},
    {'a': 0, 'b': 0},
    {'a': 1, 'b': 1},
    {'a': 0, 'b': 1}
]

print(list(filter(lambda x: x['a'] or x['b'], lst)))
