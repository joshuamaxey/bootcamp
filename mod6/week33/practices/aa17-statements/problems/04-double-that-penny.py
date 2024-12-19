# It's time to practice writing a `while` loop in Python. As you've seen, the
# syntax is similar to JavaScript, except using `:` at the end of the loop
# definition and indentation for the block of code to run with that loop.

# Write a while loop to calculate the times we need to double a penny to reach 1,000,000
# If the total is 0, add 0.01 (one penny)
# If it is one penny or greater, double the total and add 1 to the count
# When the total reaches 1,000,000 stop the loop

print("** Doubling Penny **")

# How many times would a penny need to double to generate a million dollars?
count = 0
total = 0

# STEP 2: Write the while loop

while total <= 1000000:
    if total == 0:
        total += 0.01
    elif total >= 0.01:
        total *= 2
        count += 1

print('Double', count, 'times')

# How much money has been generated at that point?
print('${:,}'.format(total))
