# Create a function that takes in a list of prices, `prices` and a given value,
# `val`. Using list comprehension, return all of the prices that are greater
# than the given value. If the price is less than the given price, replace it
# with 0. Hint: This can be done in a single line of code.

# Write your function here.

# ^ POLYA
# 1. create a new empty list
# 2. loop through the list of prices
# 3. compare each price to the value
# 4. if the price is greater than the value, add it to the new list
# 5. if the price is lower than the value, add 0 to theh new list
# 6. return the new list

def gas_prices(lst, val):
    new_list = []
    for i in lst:
        if i >= val:
            new_list.append(i)
        elif i < val:
            new_list.append(0)
    return new_list

# Now using list comprehension

def gas_prices(lst, val):
    return [x if x >= val else 0 for x in lst]

print(gas_prices([2.55, -1.45, 10.22, 5.78, -5.92, 6.16], 3.99)) #> [0, 0, 10.22, 5.78, 0, 6.16]
print(gas_prices([5.95, 6.62, 2.22, 6.78, 8.92, 7.03], 2.50)) #> [5.95, 6.62, 0, 6.78, 8.92, 7.03]
print(gas_prices([4.55, 4.15, 2.57, 3.78, 2.92, 0.16], 5.00)) #> [0, 0, 0, 0, 0, 0]
