# Create a function that takes in a tuple, `tup` and a value, `val`. The
# function should return a tuple with the given value added to the end of the
# tuple.

# Write your function here.

# ^ Note that tuples in Python are IMMUTABLE, which means there is no way to directly add a value to the end of an existing tuple (no concatenation, no '.append()', etc)

def add_value(tup, value):
    new_tuple = tup + (value,)
    # NOTE that in order to add the 'value' to the tuple, we have to do several things:
    # First, we have to create a 'new_tuple' variable because tuples are immutable so we must breate a new one if we want to save the result of adding the value to the original tuple
    # Second, we must turn the 'value' into a single-element tuple because we can't add the value directly to the tuple unless the 'value' is a tuple itself, as tuples can be concatenated together but we cannot concatenate a tuple with something that is not also a tuple. and, importantly, NOTE that in order to turn the 'value' into a single-element tuple, we must put it into parenthesis WITH A COMMA FOLLOWING THE VALUE. Without the comma, Python will interpret (value) as a regular value within parenthesis, NOT as a single-element Tuple.
    return new_tuple

print(add_value((1,2,3,4), 5)) #> (1, 2, 3, 4, 5)
print(add_value(("a", "b", "c"), "d")) #> ('a', 'b', 'c', 'd')
print(add_value((8, 9, "d", 6), "a")) #> (8, 9, 'd', 6, 'a')
