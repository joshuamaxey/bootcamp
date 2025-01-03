# Create a function that takes in a list, `lst`. The function should return a
# list including all the values divisible by both 3 and 5. Hint: This can be
# done in a single line of code.

# Write your function here.

# ^ POLYA
# 1. create a new empty list
# 2. loop through the list
# 3. if a number is divisible by 3 AND 5, add it to the list
# 4. otherwise do nothing
# 5. return the list

def fizzbuzz(lst):
    new_list = []
    for x in lst:
        if x % 3 == 0 and x % 5 == 0:
            new_list.append(x)
    return new_list

# Now with comprehension

def fizzbuzz(lst):
    return [x for x in lst if x % 3 == 0 and x % 5 == 0]

print(fizzbuzz([15, 5, 10, 30])) #> [15, 30]
print(fizzbuzz([60, 20, 90, 20])) #> [60, 90]
print(fizzbuzz([-15, 120, 35, -30])) #> [-15, 120, -30]
