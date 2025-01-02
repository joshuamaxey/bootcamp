# Create a function that returns True if the first list can be nested inside the
# second.

# list1 can be nested inside list2 if:
# - list1's min is greater than list2's min
# - list1's max is less than list2's max

# You may want to consider writing a couple of functions to organize your thoughts better.

# ^ POLYA
# There are two lists
# We need to figure out:
# 1. Is list1's min greater than list2's max: if min(list1) > max(list2)
# 2. Is list1's max less than list2's max: if max(list1) < max(list2)

# 1. Define function, which takes in two lists
# 2. if min(list1) > max(list2) or max(list1) < max(list2): return True
# 3. else return False

# Write your code here.

def can_nest(list1, list2):
    if min(list1) > max(list2) or max(list1) < max(list2):
        return True
    else:
        return False

print(can_nest([1, 2, 3, 4], [0, 6]))  #> True
print(can_nest([3, 1], [4, 0]))        #> True
print(can_nest([9, 9, 8], [8, 9]))     #> False
print(can_nest([1, 2, 3, 4], [2, 3]))  #> False
