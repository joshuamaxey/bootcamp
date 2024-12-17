# Create a function that returns the `xor` result of two values.

# Are the results a bit confusing when integer values are passed in? You can
# learn more about Python's bitwise operators in the python wiki.
# https://wiki.python.org/moin/BitwiseOperators

# Write your function here.

# ! In Python, use the '^' operator to perform the XOR operation. Xor stands for 'exclusive or' and only returns true (or 1) when two input values are different. If both input values are the same, the xor operation returns false (or 0)

def xor(num1, num2): return num1 ^ num2

print(xor(False, False))   #>  False
print(xor(True, False))   #>  True
print(xor(True, True)) #>  False
print(xor(5, 3))  #> 6
print(xor(8, 4))  #> 12
print(xor(2, 2))  #> 0
print(xor(1, 2))  #> 3
print(xor(4, 4))  #> 0
