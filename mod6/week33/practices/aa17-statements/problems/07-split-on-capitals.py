# Create a function which adds spaces before every capital in a word. Lower case
# the whole string afterwards.

# ! The isupper() method checks if every letter in a string is uppercase
# It can also be used on substrings! Which means that we can loop through a string
# and check if each individual letter is uppercase.
# If a letter is uppercase, then we need to add a space before that letter
# Once we have added all of the spaces before the capitals,
# convert the entire string to lowercase using .lower()

# ^ Implementation
# Create an empty new_string since strings are immutable in Python
# Loop through the input string, checking if each letter is a capital
# If the current letter is a capital, add a space to the new_string and then add the current letter to the new_string
# If the current letter is not a capital, skip the space and add the letter to the new_string
# After looping through the input string and adding each letter (with spaces where appropriate), return the new_string

# Write your function here.

def cap_space(string):
    new_string = ""
    for char in string:
        if char.isupper():
            new_string += " "
        new_string += char.lower()
    return new_string

print(cap_space("helloWorld"))     #> "hello world"
print(cap_space("iLoveMyTeapot"))  #> "i love my teapot"
print(cap_space("stayIndoors"))    #> "stay indoors"
