# Create a function called `is_prime` that takes in a number and a variable that
# equates to 2. The function should return True/False if the number is a prime
# number. Bonus: Try to do this recursively.

# ! A prime number can ONLY be divided by 1 and itself, and must be greater than 1

# Write your solution here.

def is_prime(n, divisor=2):
    # Base cases
    # If the number is 1, it is not prime. Return False.
    if n <= 1:
        return False
    # If the number is equal to the current divisor, it means we've checked all possible divisors and found no divisors other than 1 and n, so we return True.
    if n == divisor:
        return True
    # If n is divisible by the current divisor, it is not a prmie number, so the function returns false
    if n % divisor == 0:
        return False
    # Recursive case: check the next divisor if none of the base cases are met
    return is_prime(n, divisor + 1)

print(is_prime(1))  #> False
print(is_prime(2))  #> True
print(is_prime(3))  #> True
print(is_prime(5))  #> True
print(is_prime(9))  #> False
print(is_prime(15)) #> False
