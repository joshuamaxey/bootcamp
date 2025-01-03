# Create a function that takes in a `string`. Using list comprehension, the
# function should return all of the vowels from the string.

# Write your function here.

# ^ POLYA
# 1. Define the function vowels(string)
# 2. Use list comprehension to filter and collect the vowels from the input string
# 3. Return the list of vowels

def vowels(string):
    return [char for char in string if char.lower() in 'aeiou']

print(vowels("An amazing person")) #> ['A', 'a', 'a', 'i', 'e', 'o']
print(vowels("Coding is cool")) #> ['o', 'i', 'i', 'o', 'o']
print(vowels("People are NICE")) #> ['e', 'o', 'e', 'a', 'e', 'I', 'E']
