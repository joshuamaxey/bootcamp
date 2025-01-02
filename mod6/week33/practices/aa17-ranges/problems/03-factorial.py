# Write the factorial function. Remember, for a number n, the factorial is all
# numbers from 1 to n multiplied together.

# Write your function here.

# def factorial(n):
#     for i in range(1, n+1):
#         n * i
#     return n

# ^ POLYA
# 1. Initialize a variable 'result' to 1
# 2. Iterate through each number from 1 to n using a loop
# 3. Multiply result by each number i
# 4. Return the result, which contains the factorial of n

def factorial(n):
    result = 1
    for i in range(1, n+1):
        result *= i
    return result

print(factorial(1))     #> 1
print(factorial(8))     #> 40320
print(factorial(12))    #> 479001600
