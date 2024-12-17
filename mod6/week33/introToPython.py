# For Python setup, go to: https://github.com/appacademy/practice-for-SETUP-unified-setup/blob/main/08-python-setup.md

# To install Python, go to: https://www.python.org/downloads/?form=MG0AV3

# Make sure to add to PATH when installing

# Install Python VSCode extension

# Open  command palette (ctrl+shift+p) and search for Python: Select INterpreter. Then select the interpreter that you installed.

# You should now be able to run Python code using the 'python3 <filename>' command

# To run python files in the terminal, use shift+enter

# * To open the Python REPL, type 'python3' into your VSCode (or any) terminal

# ^ Anything that can be done in a Python file, you can also in the REPL (for the most part)

# ! Basic for() loop

for i in range(0,10): # for loop, which will run from 0 to 9, increasing by 1 each interval.
    print(i, 2**1) # at each interval, it will print the number (i) as well as 2^(i) (in python, the "**" operator means 'to the power of,' like an exponent)

# ! Factorial function

def factorial(num): # 'def' is the keyword used to define functions in Python
    if num <= 1:
        return 1
    else:
        return num * factorial(num-1)

result = factorial(4) # variable definition without a keyword
print(result) # 'print' prints to the console

# ^ Note that Python and JavaScript are two inherently different languages, there is no way to 'escape' and write JavaScript within a Python file.

def validate(num): # use 'def' to define a function called validate that takes a num as an argument
    if (num < 1 or num > 9): # notice that 'or' is used instead of ||
        print("out of range") # 'print' prints to the console
    elif (num != int(num)): # notice the abbreviation 'elif' to define an 'else if' statement
        print('Not an integer')
    else:
        print('Just right')
        return True # booleans (True, False) must be capitalized in Python

    return False

# Additionally, notice that we do not use any curly braces to define functions. There is only a colon with an indentation.
# Whitespace matters here. If we decide to put an 'extra' indent, or to remove the indent, from any line of this code, the function breaks.

print(validate(-5))
print(validate(15))
print(validate(5.2))
print(validate(5))

# ! ?? Don't understand the following code. It pertains to file reading, I'm not familiar with this in JavaScript.

# Scripting code below is commented out so that the file will run correctly

# import json

# f = open('../app-config.json', 'r')
# app_config = f.read()
# app_config = json.loads(app_config)

# app_config('background') = '#333333'
# app_config = json.dumps(app_config, indent=4)
# f = open('../app-config.json', 'w')
# print(app_config, end='\n',file=f,flush=True)

# ! Sharks: Comments, Variables, and Loops

# Define sharks variable as a list of strings
sharks = ['hammerhead', 'great white', 'dogfish', 'frilles', 'bullhead', 'requiem' ]

# For loop that iterates over sharks list and prints each string item
for shark in sharks:
    print(shark)

# ! Comment Etiquete in Python: Make comments on the same level as the code it is commenting

# Make comments on the same level as the code
print("Same level as the comment above")

# Define again() function to ask user if they want to use the calculator again
def again():
    #Take input from user
    calc_again = input()

# Block comments are written
# using this syntax
# and should also be written
# at the same level
# as the code that they are commenting on

print("Here there is an inline comment") #inline comments are short and should be used sparingly

# print("You can also comment out lines of code, which is useful for testing/etc")

# ! Intro to Python Functions

# A function is a set procedure that will run when called. They are defined once and invoked as many times as needed, just like in JavaScript

# Functions are defined using the 'def' keyword, followed by the name of the function with a list of parameters enclosed in parenthesis
# There is a colon at the end of the line, then one tab indentation for the block of code that will run.

def printCopyright():
    print("Copyright 2024. Me, myself and I. All rights reserved.")

def average(num1, num2):
    return (num1 + num2) / 2

printCopyright() # prints the message
print(average(6, 2)) # returns 4
