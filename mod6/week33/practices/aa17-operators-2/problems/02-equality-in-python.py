# Try to explore the difference between equality operators in JavaScript and
# Python. Try comparing primitive data types using `==` and then reference data
# types.

x = 1
y = '1'
list1 = [1, 2]
list2 = [1, 2]
list3 = [2, 3]

# Use "==" to compare these values and see what gets printed! How does this
# compare with JavaScripts "==="?

# Compare "x" with itself
print(x == x) # True
# Compare "x" with "y"
print(x == y) # False
# Compare "list1" with "list2"
print(list1 == list2) # True
# Compare "list1" with "list3"
print(list2 == list3) # False
