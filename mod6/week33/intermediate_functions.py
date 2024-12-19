
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
