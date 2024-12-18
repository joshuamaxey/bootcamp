# Create a function that returns the Fibonacci sequence of the given value.

# ! The fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence looks like this: 1, 1, 1, 2, 3, 5, 8, 13, 21, etc

# Write your function here.

def recursive_fib(n):
    # Base cases: IF n is 0 or 1, return n
    if n == 0:
        return 0
    elif n == 1:
        return 1
    # Recursive case: return the sum of the previous two Fibonacci numbers
    else:
        return recursive_fib(n-1) + recursive_fib(n-2)

print(recursive_fib(1))     #> 1
print(recursive_fib(2))     #> 1
print(recursive_fib(4))     #> 3
print(recursive_fib(6))     #> 8
print(recursive_fib(12))    #> 144
