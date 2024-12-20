# Create a function that returns the sum of the first value in the first list
# and the last value of the second list.

# ! POLYA
# 1. isolate first value in first list
# 2. isolate last value in the second list
# 3. return sum of two values

# Write your function here.

def sum_first_last_list(list_1, list_2):
    first_value_list_1 = list_1[0]
    last_value_list_2 = list_2[-1]
    return first_value_list_1 + last_value_list_2

print(sum_first_last_list([1, 2, 3], [5, 8, 9]))     #> 10
print(sum_first_last_list([53, 26], [5]))            #> 58
print(sum_first_last_list([9], [5, 8]))              #> 17
print(sum_first_last_list([64], [5, 6, 2]))          #> 66
