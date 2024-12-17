# Declare a variable that contains a string. Then try to change the first letter
# of the string and `print` your string.

# ^ Documentation for str.replace() method (FROM VELOCITY):

# * str.replace(old, new, count=-1)
# Return a copy of the string with all occurrences of substring old replaced by new. If count is given, only the first count occurrences are replaced. If count is not specified or -1, then all occurrences are replaced.

# Write your function here.

def change_first_letter(string, letter):
    return string.replace(string[0], letter, 1)

print(change_first_letter("Test", "J")) # prints Jest
print(change_first_letter("Joshua", "T")) # prints Toshua
