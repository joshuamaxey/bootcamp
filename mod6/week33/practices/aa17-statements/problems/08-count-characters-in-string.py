# Create a function that takes two strings as arguments and returns the number
# of times the first string (the single character) is found in the second
# string.

# ^ Implementation
# initialize a count variable to 0
# loop through each letter in the input string
# check if the current letter = the input character
# If so, increment count by 1
# At the end of the loop, return the count

# Write your function here.

def char_count(char, string):
    count = 0
    for letter in string:
        if letter == char:
            count += 1
    return count

print(char_count("a", "App Academy"))         #> 1
print(char_count("c", "Chamber of Secrets"))  #> 1
print(char_count("b", "big fat bubble"))      #> 4
