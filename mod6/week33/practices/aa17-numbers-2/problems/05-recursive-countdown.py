# Create a function that recursively prints a countdown from 5 to 1.

# Write your function here.

def recursive_countdown(num):
    # base case: If we hit 0, return
    if num == 0:
        return
    else:
        print(num) # print the number
        recursive_countdown(num-1) # recursively call the function on the number - 1

recursive_countdown(5) #> 5 4 3 2 1
