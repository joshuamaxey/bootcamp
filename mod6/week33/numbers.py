
# ! Numbers
# There are three types of Numbers in Python, 2 of which matter within the context of App Academy's curriculum

# ^ Integers
# Integers are counting numbers, positive and negative, with no decimal point
print(3) # prints 3
print(int(3)) # prints 3
print(int()) # prints 0

# ^ Floating-Point Numbers
# Note 'floating-point' numbers are called floating because the decimal 'floats' to different places depending on the number
# i.e. position 1 for 1.0 and position 7 for 123456.38
print(2.24) # prints 2.24
print(2.0) # prints 2.0
print(float()) # prints 0.0
print(27e-5) # SCIENTIFIC NOTATION, prints 0.00027

# ^ Complex numbers are a one-part real and one-part imaginary.
# I don't know what that means and we won't be assessed on this concept during this course, so this is the end of my notes on complex numbers

# ^ Type-Casting
# We can 'type-cast' one type of number to convert it to another (or into a string) using built-in functions
print(17) # prints 17
print(float(17)) # prints 17.0

print(5.0) # prints 5.0
print(int(5.0)) # prints 5

print(10) # prints 10
print(str(10)) # prints 10

# ^ Exponentiation, Integer Division, and Modulo
# We use '**' for exponentiation
print (10**3) # prints 1000

# We use '//' for integer division
print (47 // 8) # Returns only the WHOLE NUMBER component of the result (in this case 5, since this operation returns 5.7)
# Compare to Modulo (it does the opposite)
print (47 % 8) # Returns 7

# ~ NUMBERS DEMO

x = 25 # integer
y = 17.0 # float (floating-point number)

# Floats are more 'complex' than integers.
# So if we perform operations on a combination of numbers that are both float and integer,
# the value that is returned will be a float
# (Python returns the a result which will be in the format matching the more 'complex' number involved in the operation)
print(x)
print(y)
print(x + y) # returns floating-point sum
print(x - y) # returns floating-point sum
print(x * y) # returns floating-point product
print(x / y) # returns floating-point quotient (1.461988304093567)
print(x // y) # returns 1.0 (integer division operator)
print(x % y)

print(f'The result is {x // y}, remainder {x % y}')
print(f'The integer result is {int(x // y)}, remainder {int(x % y)}') # typecast to integer

print(x ** 2) # prints x^2, x squared (625), still an integer
print(y ** 2) # prints y^2, y squared (289.0), still a float

# Note that in Python, floats can have ROUNDING ERRORS while whole numbers will not
