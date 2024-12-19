# You are given three inputs: a string, one letter, and a second letter.

# Write a function that returns `True` if every instance of the first letter
# occurs before every instance of the second letter.

# Look at the String Methods to possibly help you find some methods that can
# make this easier.
# https://docs.python.org/3.9/library/stdtypes.html?highlight=strings#string-methods

# ! Use the string.rfind() method with the string.find() OR string.index() method
# This method is similar to string.find()
# Except that it finds the LAST occurrence of the specified substring
# To solve this problem:
# First, we need to find the LAST occurrence of the first letter
# Second, we need to find the FIRST occurrence of the second letter
# If the LAST occurrence of the first letter is BEFORE the first occurrence of the second, then
# we know that every isntance of the first letter occurs before every instance of the last letter

# Write your function here.

def first_before_second(string, a, b):
    last_occurrence_first_letter = string.rfind(a)
    first_occurence_second_letter = string.index(b) # string.find() would also work
    if last_occurrence_first_letter < first_occurence_second_letter:
        return True
    else:
        return False

print(first_before_second("a rabbit jumps joyfully", "a", "j"))
#> True
# Every instance of "a" occurs before every instance of "j".

print(first_before_second("knaves knew about waterfalls", "k", "w"))
#> True

print(first_before_second("happy birthday", "a", "y"))
#> False
# The "a" in "birthday" occurs after the "y" in "happy".

print(first_before_second("precarious kangaroos", "k", "a"))
#> False
