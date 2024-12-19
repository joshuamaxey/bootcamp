# Create a function called `vowel_count` that takes in a string and returns a
# count of how many vowels are in the string.

# Write your solution here.

# ^ Implementation
# initialize a count variable to 0
# create a list of vowels for reference
# loop through each letter of the string
# For each letter, make lowercase and check if it is included in the reference list
# If so, increment the count
# At the end of the loop, return the count

def vowel_count(string):
    count = 0
    vowel_list = ["a","e","i","o","u"]
    for char in string:
        if char.lower() in vowel_list:
            count += 1
    return count

print(vowel_count("App Academy"))         #> 4
print(vowel_count("Coding Expert"))       #> 4
print(vowel_count("Supreme"))             #> 3
print(vowel_count("Chamber of Secrets"))  #> 5
