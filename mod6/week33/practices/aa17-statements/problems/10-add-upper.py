# Create a function `add_upper` that takes a string and returns all of the
# uppercase characters in the string.

# ^ Implementation
# initialize a variable new_string to an empty string
# loop through each character in the input string
# Check if the current character is uppercase
# If so, add (concatenate) it to the new_string
# At the end of the loop, return the new_string

# Write your solution here.

def add_upper(string):
    new_string = ""
    for char in string:
        if char.isupper():
            new_string += char
    return new_string

print(add_upper("ApPlE"))        #> APE
print(add_upper("Coding"))       #> C
print(add_upper("PIano"))        #> PI
print(add_upper("SUPREME"))      #> SUPREME
