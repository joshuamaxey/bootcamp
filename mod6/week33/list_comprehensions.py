
# ! List Comprehensions in Python

# ^ Populating Lists in Python

# To understand the utility of list comprehensions, we will look at several ways to pupulate lists in Python

# ^ Using for loops

# We can use a for loop to pupulate a list of elements in three steps:

# 1. Instantiate an empty list
# 2. Loop over an iterable or range of elements
# 3. Append the current element to the end of the list at each step

squares = []

for i in range(11):
    squares.append(i**2)

print(squares) # prints [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# ^ Using map()

# There is also a built-in map function
# We pass in a function and an iterable
# Then map creates a 'map object' that contains the values of the iterable passed through the function
# NOTE that we have to convert the 'map object' to a list before we can print it

squares = map(lambda x: x**2, range(11))

print(list(squares)) # prints [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# ^ Using List Comprehensions

# Rather than creating an empty list and adding each element to the end
# List Comprehensions allow us to define thel ist and its contents at the same time using the following format:
# ~ new_list = [(EXPRESSION) for (MEMBER) in (ITERABLE)]

squares = [i**2 for i in range(11)]

# The EXPRESSION is the member itself, a call to a method, or any expression that returns a value
# The MEMBER is the object or value in the list or iterable
# The ITERABLE is a list, set, sequence, generator, or ay other object that can return elements one at a time
# NOTE that the 'expression' requirement is very flexible, so a list comprehension in Python works well in places where we could use map() or a for loop.

# ^ Using Conditional Logic in List Comprehensions

# Comprehensions also include support for conditionals
# ** Conditionals are important because they allow us to FILTER values through our comprehensions
# The complete comprehension format is like this:
# ~ new_list = [(EXPRESSION) for (MEMBER) in (ITERABLE) (if CONDITIONAL)]

sentence = 'The rocket came back from Mars'
vowels = [x for x in sentence if x in 'aeiou']

print(vowels) # prints ['e', 'o', 'e', 'a', 'e', 'a', 'o', 'a']

# The conditional can test ANY valid expression
# If we need a more complex filter, we can move the conditional logic to a separate function

sentence = 'Mary, Mary, quite contrary, how does your garden grow?'

def is_consonant(letter):
    vowels = 'aeiou'
    return letter.isalpha() and letter.lower() not in vowels

consonants = [x for x in sentence if is_consonant(x)]

print(consonants) # prints ['M', 'r', 'y', 'M', 'r', 'y', 'q', 't', 'c', 'n', 't', 'r', 'r', 'y', 'h', 'w', 'd', 's', 'y', 'r', 'g', 'r', 'd', 'n', 'g', 'r', 'w']

# We can also put conditional logic near the BEGINNING of the expression:
# ~ new_list = [(EXPRESSION) (if CONDITIONAL) for (MEMBER) in (ITERABLE)]

original_prices = [1.25, -9.45, 10.22, 3.78, -5.92, 1.16]

# Using the following logic, we can select from multiple possible outputs
# For example, from the list of prices, we may want to replace negative prices with 0 AND leave positive values unchanged
# We will use a conditional statement similar to JavaSript's ternary operator (?)
# This tells Python to output the value of x if the number is positive, but change x to 0 if the number is negative

prices = [x if x > 0 else 0 for x in original_prices]

print(prices) # prints [1.25, 0, 10.22, 3.78, 0, 1.16]

# Consider this alternate format for clarity concerning the functionality we are implementing with the conditionals

def get_price(price):
    return price if price > 0 else 0

prices = [get_price(i) for i in original_prices]

print(prices) # prints [1.25, 0, 10.22, 3.78, 0, 1.16]

# ! When to NOT Use List Comprehensions

# Sometimes (such as in the case of flattening nested lists), using comprehensiosn can complicate your code and make it more confusing.
# One of Python's greatest pros is that it can be used to write readable code, so readability, clarity, and simplicity of our code is important
# The developer must make the judgement call as to whether a comprehension reduces or improves readability.

# ! List Comprehensions Demo

list = [1, "2", "three", True, None]

new_list = []

for l in list:
    new_list.append(l)

print(new_list) # prints [1, '2', 'three', True, None]

# Components needed for list comprehension:
# value AND for loop

new_list = [l for l in list]

print(new_list) # [1, '2', 'three', True, None]

# In Python, this is how we go about mapping and filtering things into lists

list = ["jerry", "MARY", "carrIE", "larry"]

new_list = []
for l in list:
    new_list.append(l.title())

# NOTE the 'title' method ^^^ above, which converts strings into the correct form for proper nouns (first letter uppercase, the rest lower)

print(new_list) # prints ['Jerry', 'Mary', 'Carrie', 'Larry']

# NOW with a comprehension:

new_list = [l.title() for l in list]

print(new_list) # prints ['Jerry', 'Mary', 'Carrie', 'Larry']

# NOTE that list comprehensions can both map AND filter in Python

list = [1, 11, 12, 17, 19, 21, 27, 33, 40]

new_list = []

for l in list:
    if l % 3 == 0:
        new_list.append(l)

print(new_list) # prints [12, 21, 27, 33]

new_list = [l for l in list if l % 3 == 0]

print (new_list) # prints [12, 21, 27, 33]

# ^ This is the 'Python' way of creating, filtering, and manipulating values within lists (comprehensions, vs loops/etc)

letters = ["a", "b", "c"]
nums = [1, 2]

new_list = []

for l in letters:
    for n in nums:
        new_list.append((n, 1))

print(new_list) # prints [(1, 1), (2, 1), (1, 1), (2, 1), (1, 1), (2, 1)]

# Next, with a comprehension:

new_list = [(n, l) for n in nums for l in letters]

print(new_list) # prints [(1, 'a'), (1, 'b'), (1, 'c'), (2, 'a'), (2, 'b'), (2, 'c')]

# This can also be written:

new_list = [(n, 1)
            for n in nums
            for l in letters]

print(new_list) # prints [(1, 1), (1, 1), (1, 1), (2, 1), (2, 1), (2, 1)]

keys = ["age", "name", "height"]
values = [32, "Corina", 1.4]

d = dict() # or d = {}

for i in range(len(keys)):
    d[keys[i].title()] = values[i]

print(d) # prints {'Age': 32, 'Name': 'Corina', 'Height': 1.4}

# Now with a dictionary comprehension
# Format {key: value for-loop}

d = {keys[i].title(): values[i] for i in range(len(keys))}

# ^ This is a dictionary comprehension ^^^

print(d) # prints {'Age': 32, 'Name': 'Corina', 'Height': 1.4}
