# Create a function that determines whether a string is a valid hex code.

# A hex code must begin with a pound key # and is exactly 6 characters in
# length. Each character must be a digit from 0-9 or an alphabetic character
# from A-F. All alphabetic characters may be uppercase or lowercase.

# 1. check that the code begins with a pound key
# 2. check that the string is 6 characters in length
# 3. check if any character is NOT a digit from 0-9 OR an alphabetic character from A-F (lowercase)

# Write your function here.

# If the code doesn't start with #, return False
# If the total length of the code != 7, return False
# Slice the "#" off the beginning of the code, save to new variable 'newCode' (strings are immutable in Python)
# For each character in the newCode...
    # If the character is within range of 0-9, or a-f (not case-sensitive), continue
    # Otherwise, return False
# If all of these conditions are met, return True

def is_valid_hex_code(code):
    if not code.startswith("#"):
        return False
    elif len(code) != 7:
        return False
    newCode = code[1:]
    for char in newCode:
        if char in ["0","1","2","3","4","5","6","7","8","9"] or char.lower() in ["a","b","c","d","e","f"]:
            continue
        else:
            return False
    else:
        return True

print(is_valid_hex_code("#CD5C5C"))  #> True
print(is_valid_hex_code("#EAECEE"))  #> True
print(is_valid_hex_code("#eaecee"))  #> True

print(is_valid_hex_code("#CD5C58C"))
# Prints False
# Length exceeds 6

print(is_valid_hex_code("#CD5C5Z"))
# Prints False
# Not all alphabetic characters in A-F

print(is_valid_hex_code("#CD5C&C"))
# Prints false
# Contains unacceptable character

print(is_valid_hex_code("CD5C5C"))
# Prints False
# Missing #
