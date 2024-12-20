# In Python, lambda functions work as anonymous functions that evaluates to a
# single expression. You could say it's a little more petite than its JavaScript
# counterpart.

# Write a function `string_multi_print` that accepts a string, `str`, and
# returns a lambda that prints `str` `i` times.

# ! Note that THIS is the format for defining a lambda function:
# lambda parameter(s): expression
# For instance:
add_one = lambda x: x + 1
print(add_one(5)) # prints 6

# Write your code here.
def string_multi_print(str):
    return lambda i: print(str * i)

string_multi_print('hello ')(2)  # Prints "hello hello "
string_multi_print('wahoo ')(3)  # Prints "wahoo wahoo wahoo "
