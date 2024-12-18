# Create a function that takes an integer as an argument and returns the amount
# of digits it has.

# Write your function here.

def find_digit_amount(num):
    # If the number is negative (has a "-" as its first digit when converted to a string)
    # convert the number to a string and subtract 1 from the number of digits
    if str(num)[0] == "-":
        return len(str(num)) - 1
    # Otherwise convert to string and count the number of digits
    else:
        return len(str(num))

print(find_digit_amount(123))           #> 3
print(find_digit_amount(-56))           #> 2
print(find_digit_amount(7154))          #> 4
print(find_digit_amount(61217311514))   #> 11
print(find_digit_amount(0))             #> 1
