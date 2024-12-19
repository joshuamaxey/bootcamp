# In Python, error handling can be done using a `try`/`except` block. Implement
# `except` blocks to handle the exceptions that will be raised for the following
# `try` blocks:

# Example 1
try:
    str = 'hello'
    str[0] = 'm'
    print(str)
except:
    print("TypeError: 'str' object does not support item assignment")
finally:
    print('I happen regardless of any exceptions.')

# Example 2
try:
    print(x)
except:
    print("NameError: 'x' is not defined")
finally:
    print('I happen regardless of any exceptions.')
