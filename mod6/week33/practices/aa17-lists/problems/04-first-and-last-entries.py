# Create a function that takes a list of elements and return the first and last
# elements as a new list.

# Write your function here.

# ! POLYA
# 1. isolate first element of list, list[0]
# 2. isolate last element of list, list[-1]
# 3. return new list, newList = list[first, second]

def first_last(list):
    first_element = list[0]
    last_element = list[-1]
    newList = [first_element, last_element]
    return newList

print(first_last([5, 10, 15, 20, 25]))            #> [5, 25]
print(first_last([13, None, False, True]))        #> [13, True]
print(first_last([None, 4, "6", "hello", None]))  #> [None, None]
