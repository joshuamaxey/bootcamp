# Write a function using the `not` and `or` operator that returns the Boolean
# result of the `not` and `or` operator being applied to the function's
# arguments.

# Write your function here.

def not_or(arg1, arg2):
    return(not arg1 or arg2)

print(not_or(True, False))    #> False
print(not_or(True, True))     #> True
print(not_or(False, True))    #> True
print(not_or(False, False))   #> True
