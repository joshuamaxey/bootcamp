# In Python, default and keyword arguments are allowed, similar to JavaScript.
# Write a function that accepts at least 2 arguments, with at least one that has
# a default value. Try moving the position of the positional and default
# arguments' declaration and see what happens!

# Write your code here.
def sample_function(input2, input1, input="a"):
    return input, input1, input2

# sample_function(input = "asdf", "a", "b")      # ERROR
# sample_function("asdf", input = "a", "b")      # ERROR
print(sample_function("asdf", "a", input = "b"))      # VALID
