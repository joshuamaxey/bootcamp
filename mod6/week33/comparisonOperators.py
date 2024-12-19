
# ! Comparison Operators

# Python (mostly) uses the same comparison operators as JavaScript.
# One distinction is that there is ONLY strict equality in Python:
print("a" == "a") # prints true
print("a" != "a") # prints false

# Additionally, logical operators are the words instead of symbols:
print("a" and "a") # prints a
print("a" or "b") # prints a
print(not "a" or "b") # prints b

# ! Precedence in Python
# equality operators are processed from left to right BEFORE the logical operators
# then logical operators are processed in this order: 1. NOT, 2. AND, 3. OR

# ! Short-Circuit Execution in Python
# Python will stop processing conditional expressions (from left to right) as soon as it has a True or False answer
# This means that the order of our statements matters.
# When we place the faster, shorter, simpler operation on the left...
# Python can potentially derive an answer from that operation and then quickly exit the expression
# This is called 'short-circuiting'
# ^ So always place the least-intensive and fastest code first in conditional expressions

# ~ THE MEANING OF TRUTH (DEMO)

a = 1
b = 1.0
c = "1"

# Integers and floats are equivalent (if they are the same number)
# Strings and numbers (integers or floats) are not equivalent
print(a == b) # True
print(a == c) # True
print(b == c) # False

if a == c:
    print("match") # prints match for a == b
elif b == c:
    print("also match") # prints match for b == a
else:
    print("not a match") # prints not a match for a == c, or b == c

a = 0               # falsey
a = 0.0             # falsey
a = 1               # truthy
a = "dart"          # truthy
a = ''              # falsey
a = None            # falsey
a = []              # falsey (this is a 'list' in Python, not an array)
a = ["a", "b", "c"] # truthy

if a:
    print("match") # prints match if a = 1 (1 is truthy), or if a = "dart" (string is truthy)
    print(f'{a} is truthy') # prints the value if a is truthy
else:
    print('not a match') # prints not a match if a = 0 (0 is falsey whether integer or float)
    print(f'{a} is falsey')

# ! Identity Operators

# The 'is' identity operator checks to see if something IS strictly equal to something else
# The 'is not' identitity operator checks to see if something IS NOT strictly equal to something else
print(1 is 1) # true
print(1 is not 1) # false

# Note that the IS identity operator distinguishes between integers and floats
# This is NOT the case for the equality operator
print(1 == 1.0) # prints True
print(1 is 1.0) # prints False
print(1 is not 1)

# In this way, 'is' is stricter than '=='
# Identity operators are preferable to equality operators, because they are more strict

# ~ IDENTITY VS EQUALITY (DEMO)

a = 1
b = 1.0
c = "1"

print(a == b) # True
print(a is b) # False

print(c == "1") # True
print(c is "1") # True

print(b == 1) # True
print(b is 1) # False

print(b == 1 and isinstance(b, int)) # False
print(a == 1 and isinstance(a, int)) # True

b = int(b)
print(b) # prints 1 (b is no longer a float, it is an integer)

print(a) # prints 1
print(float(a)) # prints 1.0
print(str(a)) # prints 1
print(str(a) == c) # True
print(str(a) is c) # False (Because even though the values are the same, they are not literally the same variable)
