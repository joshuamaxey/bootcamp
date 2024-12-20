
# ! Intermediate Functions in Python

# ^ Python supports default values for parameters

# Note that parameters with default values must come AFTER paramters without default values
# This will throw an error: def greeting(saying="Hello", name)
# Instead, it must be written like this:
def greeting(name, saying="Hello"):
    print(saying, name)

greeting("Joshua") # prints Hello Joshua
# We can also specify arguments by name without resorting to destructuring
# Just write the name of the parameter and an equal sign before the value.
greeting("Joshua", saying="Goodbye") # prints Goodbye Joshua
# This also means you can provide the arguments in any order
greeting(saying="Hi", name="Joshua") # prints Hi Joshua
# In idiomatic python, developers usually use positional arguments for paramters with no default value
# and use keyword arguments for paramters that do have default values.
# So by convention, the invocation on line 14 is the correct way to invoke our greeting function

# ^ Python supports anonymous functions using lambda

# lambda functions in Python are similar to arrow functions in JavaScript
# This is the syntax we use if we want to assign an anonymous function to a variable
# lambda functions are meant to be one-liners
# you can wrap them in parenthesis to make them multi-line but this is bad form and is discouraged
# COnsider a function where we want to create a function that 'uppercases' a string:
toUpper = lambda string: string.upper()

print(toUpper("joshua")) # prints JOSHUA

# ^ Python number-of-argument Errors
# Note that unlike in JavaScript, we cannot provide more argument or fewer arguments than expected
# If we invoke a function with more or less arguments than expected, Python will throw an error

# ~ Functions Returning Functions (DEMO)

def greeting_maker(salutation):
    def greeting(name):
        return f'{salutation} {name}'
    return greeting

hello = greeting_maker("Hello")
hiya = greeting_maker("Hiya")

print(hello("Monica"))
print(hiya("Raja"))

# ^ Variable-number (Additional) Positional Arguments

# In Python, we can use extra positional arguments using the * operator in the function definition
# By convention, these arguments are to be called 'args'
# Python collects all of the extra arguments and puts them into a tuple
def add(a, b, *args):
    total = a + b
    for n in args:
        total += n
    return total

print(add(1, 2)) # prints 3
print(add(2, 3, 4, 5)) # prints 14

# ^ Variable-number (additional) Keyword Arguments

# For extra keyword arguments (formatted: keyword="value"), we can use the ** operator in the function declaration
# By ocnvention, these arguments are to be called "kwargs" (keyword arguments)
# Python will collect them all and put them into a dictionary
def print_names_and_countries(greeting, **kwargs):
    for key, value in kwargs.items():
        print(greeting, key, "from", value)

print_names_and_countries("Hi", Monica="Sweeden", Charles="Britain", Carlo="Portugal")

"""
The function above prints:

Hi Monica from Sweeden
Hi Charles from Britain
Hi Carlo from Portugal
"""

# ^ Python Functions and Order of Arguments

# In Python, the ordering of our arguments matters. Order parameters/argumetns like this:
# 1. formal positional arguments
# 2. *args (tuple)
# 3. Keyword arguments with default values
# 4. **kwargs (dictionary)

def exampmle(arg1, *args, kw1="shark", **kwargs):
    pass
