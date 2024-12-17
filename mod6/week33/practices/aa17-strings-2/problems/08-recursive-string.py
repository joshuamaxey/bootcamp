# Create a function that reverses the string using recursion.

# Write your function here.

def recursive_string(string):
    # Base case: If the string is empty or has one character, it is already reversed. Return.
    if len(string) <= 1:
        return string
    # Recursive case: reverse the rest of the string and append the first character at the end
    return recursive_string(string[1:] + string[0])

print(recursive_string("civic")) # civic
print(recursive_string("refer")) # refer
print(recursive_string("string")) # gnirts
print(recursive_string("avocado")) # odacova
print(recursive_string("application")) # noitacilppa
