# Recall the merge sort algorithm:

# 1. Find midpoint to divide list in half
# 2. Call `merge_sort` recursively on the first half
# 3. Call `merge_sort` recursively on the second half
# 4. Merge the two sorted halves with `merge`

# Implement the `merge_sort` function with the `merge` helper function.

# Write your code here.
def merge_sort(list):
    # base case: if the list has 1 or 0 elements, it is already sorted
    if len(list) <= 1:
        return list

    # find the midpoint to divide the list in half
    mid = len(list) // 2 # notice we use whole number division

    # recursively sort the first half
    left_half = merge_sort(list[:mid])

    # recursively sort the second half
    right_half = merge_sort(list[mid:])

    # merge the two sorted halves
    return merge(left_half, right_half)

def merge(first_half, second_half):
    sorted_list = []
    i, j = 0, 0

    # Merge the two halves while maintaining order
    while i < len(first_half) and j < len(second_half):
        if first_half[i] < second_half[j]:
            sorted_list.append(first_half[i]) # append used to add single element to the end of the list
            i += 1
        else:
            sorted_list.append(second_half[j])
            j += 1

    # Append any remaining elements
    sorted_list.extend(first_half[i:]) # extend used in case there are multiple elements
    sorted_list.extend(second_half[j:]) # instead of append

    return sorted_list

list = [5, 2, 38, 91, 16, 427]

sorted_list = merge_sort(list)        # Out of place solution
print(sorted_list)

merge_sort(list)                     # In place solution
print(list)
