
# ! Duck-Typing

# Duck-typing is a programming style which avoids checking an object's "type" in order to figure out what it can do.
# Instead of checking an object's types, we just use it's methods or attributes directly.
# This means that we assume that an object will work as expected and handle any expections if things go wrong.
# * "If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck."

# ! Assigning Variables

# There are no assignment keywords.
# Assignment of value automatically declares the variable
a = 7
b = "Marbles"
print(a) # prints 7
print(b) # prints Marbles

# ! Manipulating Variables

# The value, and the TYPE, of a variable can be reassigned at any time
a = 17
print(a) # prints 17

a = "seventeen"
print(a) # prints seventeen

# ! None

# None indicates the absence of any value.
# It is actually an object (of type 'NoneType'), which means that it can be used wherever other objects are used
my_variable = None
print(my_variable) # prints None

# ~ NONETYPE VARIABLES QUIZ

# If we use a return statement without a value, Python will return None
def myFunction():
    return

print(myFunction()) # prints None

x = 5
print(x) # prints 5

x = "five"
print(x) # prints "five"
