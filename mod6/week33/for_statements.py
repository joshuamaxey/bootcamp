
# ! For Statements

# ^ Range() Function
# The range() function generates a sequence of numbers,
# it is commonly used in loops to iterate a specific number of times
# It is written in this format:
# * range(start, stop, step)
print(range(5)) # prints range(0,5)
print(range(2, 5)) # prints range(2, 5)
print(range(2, 10, 2)) # prints range(2, 10, 2)

# To write a for() loop, we can create an iterable 'range' of numbers,
# which will determine how many times our loop will run
for i in range(5):
    print(i) # prints 1, 2, 3, 4

# What will the following code do?
print('My name is')

for i in range(5):
    print('Carlita Cinco (' + str(i) + ')')

"""
The above code prints:

My name is
Carlita Cinco (0)
Carlita Cinco (1)
Carlita Cinco (2)
Carlita Cinco (3)
Carlita Cinco (4)
"""

# What about this code?
total = 0

for num in range(101):
    total += num

print(total) # prints 5050

# The code above begins at 0, then adds 1, then 2, then 3...
# All the way to 101, at which point the total is 5050

# ! For Loops with Strings

for a in "abcdefg": # 'a' represents the current letter in the loop
    print(a)        # prints the letter at the current iteration of the loop
                    # "a" the first iteration, "b" the second iteration... and so on.

# ! Using the length of a list as a range to iterate over a list using a for loop in Python

supplies = ['pens', 'staplers', 'flame-throwers', 'binders'] # Make a list of strings

for i in range(len(supplies)):
    print('Index ' + str(i) + ' in supplies is: ' + supplies[i])

"""
The code above prints the following:

Index 0 in supplies is: pens
Index 1 in supplies is: staplers
Index 2 in supplies is: flame-throwers
Index 3 in supplies is: binders
"""

# ! Looping over and Destructuring a list of lists

my_list_of_lists = [[0, 1], [2, 3], [4, 5]]

for x, y in my_list_of_lists:
    print(x, ', ', y)

"""
The code above prints:

0 ,  1
2 ,  3
4 ,  5
"""
