
# ! While Statements

spam = 0

while spam <= 5:                # While keyword + condition + colon
    print(f'Spam is {spam}')    # While clause (code to run WHILE condition is true)
    spam = spam + 1             # While clause contains updater code to update the variable in the condition
                                # The condition is checked at the beginning of each iteration.
                                # The first time the condition returns False, the loop stops executing.

"""
This statement prints:

Spam is 0
Spam is 1
Spam is 2
Spam is 3
Spam is 4
Spam is 5
"""

# ! Break Statements

spam = 0

while spam <= 5:
    print(f'Spam is {spam}')
    spam = spam + 1
    if spam > 4:            # if spam is greater than 4...
        break               # BREAK (stop code execution and exit the loop)
                            # This break statement causes the loop to stop after hitting 4,
                            # instead of continuing until it reaches five

# ! Continue Statements

spam = 0

while spam <= 5:
    print(f'Spam is {spam}')
    spam = spam + 1
    if spam < 5:            # If spam is less than 5...
        continue            # CONTINUE (return to the beginning of the loop and run again)
    break                   # BREAK (when the condition for 'continue' is not met, the loop moves forward and hits the BREAK)
                            # The CONTINUE statement will prevent the code from progressing if its condition is met
                            # Once the condition is no longer true (once spam > 4), the loop progresses to the BREAK statement,
                            # causing the loop to stop at spam = 4
