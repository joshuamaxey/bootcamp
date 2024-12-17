# Create a function that returns whether or not the string is a Palindrome.

# Write your function here.

# ! Use this syntax to reverse a string: "string"[::-1]
# This is a slice statement. It means start at the end of the string, end at position 0 (the beginning of the string), and move with the step -1 (backward)

def is_palindrome(string):
    # print(string[0:])
    # print(string[::-1])
    if ((string == string[::-1])):
        return True
    else:
        return False

print(is_palindrome("kayak")) # True
print(is_palindrome("app"))  # False
print(is_palindrome("racecar")) # True
print(is_palindrome("valid")) # False
