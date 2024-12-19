
# ! Try/Except Statements

# This code will throw an error:
a = 321
# print(len(a))   # we cannot print the length of 'a' because 'a' is an integer, and integers don't have length

# error:
# * Traceback (most recent call last):
# *   File "/home/joshuamaxey/aA/bootcamp/gitBootcamp/mod6/week33/tryExceptStatements.py", line 6, in <module>
# *     print(len(a))   # we cannot print the length of 'a' because 'a' is an integer, and integers don't have length
# * TypeError: object of type 'int' has no len()

# Now lets try this code with a try/except statement

a = 321

try:
    print(len(a))
except:
    print('Silently handle error here')
    a = str(a)
    print(len(a))

"""
The code above prints:

Silently handle error here
3
"""

# ! Throwing Custom Errors

# Use the 'raise' keyword to throw an error

a = 1

if (a):
    raise("Error!") # This is not a valid error, but is an example of how to use 'raise'
