# Create a function that returns `True` if an integer is evenly divisible by 5,
# and `False` otherwise.

# Write your function here.

def divisible_by_five(num):
    if num%5 == 0:
        return True
    else:
        return False

print(divisible_by_five(5))    #> True
print(divisible_by_five(-55))  #> True
print(divisible_by_five(37))   #> False
