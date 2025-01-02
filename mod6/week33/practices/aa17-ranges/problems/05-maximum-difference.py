# Given a list of integers, return the difference between the largest and
# smallest integers in the list.

# ^ POLYA
# 1. Identify the largest number in the list, max(list)
# 2. Identify the smallest number in the list, min(list)
# 3. subtract the smallest number from the largest number in the list
# 4. return the difference

# Write your function here.

def difference(list):
    largest = max(list)
    smallest = min(list)
    difference = largest - smallest
    return difference

print(difference([10, 15, 20, 2, 10, 6]))
# 20 - 2 = 18

print(difference([-3, 4, -9, -1, -2, 15]))
# 15 - (-9) = 24

print(difference([4, 17, 12, 2, 10, 2]))
# 17 - 2 = 15
