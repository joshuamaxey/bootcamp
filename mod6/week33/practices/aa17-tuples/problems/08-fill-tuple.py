# Create a function that takes in a `tuple` of tuples with varying lengths, a
# given `value`, and a given `length`. The function should return a copy of
# tuple where each nested tuple has the specified `length`. To increase a
# tuple's length, the function should append the value the necessary number of
# times. (You may assume that all tuples originally in the tuple have a length
# <= `length`.)

# Write your function here.

# ^ POLYA
# 1. iterate over the main tuple of tuples
# 2. For each nested tuple, check its length
# 3. If the length is less than the specified length, append the given value until it reaches the desired length
# 4. Finally, return a new tuple containing all the modified nested tuples

def fill_tuple(tup_of_tups, value, length):
    modified_list = []

    for inner_tup in tup_of_tups:
        # If the length of the inner tuple is less than the specified length...
        if len(inner_tup) < length:
            # Calculate how many times we need to append the value
            to_add = length - len(inner_tup)
            # Create a new tuple by adding the necessary number of values
            new_tup = inner_tup + (value,) * to_add
        else:
            # If the inner tuple already meets the requried length, keep it as it is
            new_tup = inner_tup
        # ppend the new or original tuple to the modified list
        modified_list.append(new_tup)

    # Convert the modified list back to a tuple and return it
    return tuple(modified_list)

print(fill_tuple(((58, 1, 5), (0, 3), (45, ), (24, 23)), 2, 3))    #> ((58, 1, 5), (0, 3, 2), (45, 2, 2), (24, 23, 2))
print(fill_tuple(((1, ), (5, 7), (55, 22), (80, 52, 20)), 5, 4))   #> ((1, 5, 5, 5), (5, 7, 5, 5), (55, 22, 5, 5), (80, 52, 20, 5))
print(fill_tuple(((), (0, 14), (5, 2, 8), (2, 4, 2, 3)), 0, 5))    #> ((0, 0, 0, 0, 0), (0, 14, 0, 0, 0), (5, 2, 8, 0, 0), (2, 4, 2, 3, 0))
