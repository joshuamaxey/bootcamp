
# ! Tuples in Python (pronounced too-puhls)

# declared using parenthesis
# immutable
# can be declared WITHOUT parenthesis IF there are multiple items

a = (1, 2, 3, 4, 5, 6, 7, 8, 9)
b = ('a', 'b', 'c', 'd', 'e')
c = 10, 20, 30

print(a)
print(b)
print(c) # prints (10, 20, 30)

# If you try to add an item (append, extend) to a tuple, Python will throw an error

# a.append(10) # ^ throws AttributeError: 'tuple' object has no attribute 'append'

# The same is true for sort, since it modifies the object it is invoked on (Rather than creating a copy)

# a.sort() # ^ throws AttributeError: 'tuple' object has no attribute 'sort'

# Note that the sorted() method WILL work on tuples, since it creates a copy instead of mutating the object
# It will convert the tuple to a list by default, then sort it

shopping = ('apples', 'milk', 'bread')

alphaShopping = sorted(shopping)

print(alphaShopping) # prints ['apples', 'bread', 'milk']

# If you want it to REMAIN a tuple, you can do this:

alphaShopping2 = tuple(sorted(shopping))

print(alphaShopping2) # prints ('apples', 'bread', 'milk')

# We can make a list of tuples, or tuple of lists
# Note we CAN leave trailing commas here (useful if we intend to add more in the future)

shoppingStops = (
    ['bread', 'milk', 'eggs'],
    ['picture hooks', 'extension cord'],
)

print(shoppingStops) # prints (['bread', 'milk', 'eggs'], ['picture hooks', 'extension cord'])

# We can access items in a tuple the same way we do in a list

print(shoppingStops[0]) # prints the first list ['bread', 'milk', 'eggs']

# We CAN modify this list, since it's a list, even though it's inside of a tuple (which is immutable)

shoppingStops[0].append('apples')

print(shoppingStops) # prints (['bread', 'milk', 'eggs', 'apples'], ['picture hooks', 'extension cord'])

# We can also do lists of tuples

users = [
    (1, 'user_a'),
    (2, 'user_b'),
    (3, 'user_c'),
]

print(users) # prints [(1, 'user_a'), (2, 'user_b'), (3, 'user_c')]

scores = (15, 66, 34, 99, 29, 54, 12)
print(scores)
print(max(scores)) # highest
print(min(scores)) # lowest
print(int(sum(scores) / len(scores))) # average
print(sorted(scores))
print(tuple(sorted(scores)))

"""
The code above prints the following:

(15, 66, 34, 99, 29, 54, 12)
99
12
44.142857142857146
[12, 15, 29, 34, 54, 66, 99]
(12, 15, 29, 34, 54, 66, 99)
"""

def minmax(numbers):
    return min(numbers), max(numbers)

myNums = (1, 4, -2, 3.3, -8, 25, 9, 0)

print(minmax(myNums)) # prints (-8, 25)

(lowest, highest) = minmax(myNums)

print(lowest) # prints -8
print(highest) # prints 25
print(lowest + highest) # prints 17
