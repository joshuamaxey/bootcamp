
# ! Strings

# Strings have the same syntax in Python as in JavaScript
string = "String" or 'String'

print(string == "String") # returns True
print(string == 'String') # returns True

# Multi-line strings are written using '''<string>''' syntax
print('''This is
a multi-line
string''')

'''Here is
another
multi-line
string'''

# Note that backticks (``) cannot be used to specify strings in Python. This syntax will throw an error.

# If we need to use both double ("") and single ('') quotes in a string, we can escape our quotes with a backslash
escapedString = 'Jodi asked, "What\'s up, Sam?"'

# Checking string length using len()
print(len("String")) # prints 6

# Indexing a string (Note that indexes in Python begin at 0, just like in JavaScript)
print("Spaghetti"[0]) # prints "S"

# Python also allows NEGATIVE INDEXING to access a character from the end of the string. THe last character is at index -1
print("Spaghetti"[-1]) # prints "i"
print("Spaghetti"[-2]) # prints "t"

# Get a series of characters from a string using a RANGE, which consists of a start value followed by a colon and then an end value.
print("Spaghetti"[0:4]) # prints "Spag" (NON-INCLUSIVE, does not include character located at end value)

# A shortcut for the beginning of a string is to omit the first number
print("Spaghetti"[:3]) # prints "Spa"

# Similarly, a shortcut for the end of a string is to omit the last number
print("Spaghetti"[1:]) # prints "paghetti"

# Trying to access a single index which does not exist will throw an error
# print("Spaghetti"[15]) # ^ IndexError: string index out of range

# However, ranges do not throw errors
print("Spaghetti"[0:15]) # prints nothing, no error

# Use 'index' to calculate the first position of a character within a string
print("Spaghetti".index("h")) # prints 4

# If the character is not found, an error occurs
# print("Spaghetti".index("z")) # ^ ValueError: substring not found

# Use 'count' to find out how many times a substring appears in the primary string (prints 0 if substring is not present)
print("Spaghetti".count("t")) # prints 2
print("Spaghetti".count("Spag")) # 1

# Concatenate strings together using the + operator
print("Spag" + "hetti") # prints Spaghetti

# Use the multiplication operator to to repeat a string a specific number of times
print("S"*5) # prints SSSSS
print("$1" + ",000"*3) # prints $1,000,000,000

# Formatting with the .format method and the 'f' shorthand
first_name = "Billy"
last_name = "Bob"

print('Your name is {0} {1}'.format(first_name, last_name)) # prints Your name is Billy Bob
print(f'Your name is {first_name} {last_name}') # also prints Your name is Billy Bob

# ~ INTERLUDE: INPUT

# The 'input' function will prompt the user to enter a response in the terminal when this file runs
# We typically want to store the response in a variable

# name = input("What is your name? ") # * prompts the user to enter a response to the question, "What is your name?" Notice the extra space after '...name? ' to give the user an extra line after the question mark in the terminal where the prompt appears.
name = "placeholder"

print(name) # prints the user's response to the input prompt
print("Your name is", name + ".")
print("Hello," + " " + name + ".")
print("Hello also, %s." % name) # %s (percent substitution) = for 'string'
print("Hello a third time, {0}.".format(name)) # Python formatting
print(f"Here is a fourth hello, {name}.") # use 'f' format shorthand to directly insert variable into the string using curly brackets

# age = input("What is your age?\n") # * We can use the "\n" after the end of the question, inside the quotes, to make the input prompt the user to answer the question on the next line
age = "placeholder"

print("Your age is", age)

# ~ INTERLUDE: ARITHMETIC WITH STRINGS

a = "a"
b = "b"
an = "an"

print(b + an) # prints "ban"
print(b + a*7) # prints "baaaaaaa"
print(b + an*2 + a) # prints 'banana'
print("$1" + ",000"*3) # prints '$1,000,000,000'd

# ^ STRINGS QUIZ

# print('run'.length); #^ This code throws an error, there is no '.length' property in Python, and the semi-colon doesn't belong

print(len('run')); # prints 'run' (though the semi-colon is bad form, it doesn't cause an error to be thrown)

# print('run'[3]) #^ This code throws an error because there is no index '3'

print('run'[2]) # prints 'n'
print('run'[-1]) # prints 'n'
print("run"[-1:2]) # prints an empty string
# print("run"[-2,-1]) # ^ Throws an error, 'TypeError: string indices must be ingegers'
# print('internet'.indexOf('e')) # ^ Throws an error, 'indexOf' is not a thing in Python
print('internet'.index('e')) # prints 3
print('internet'.index("net")) # prints 5, the index where the substring begins
# print("internet".index('x')) # ^ Throws an error, 'ValueError: substring not found'
