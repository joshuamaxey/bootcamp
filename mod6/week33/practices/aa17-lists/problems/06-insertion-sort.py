# Create a function that uses the insertion sort algorithm to sort the list.

# Write your function here.

def insertion_sort(list):
    # Take length of the list
    length = len(list)

    # Base case: If the array has 0 or 1 element, it is already sorted, so return
    if length <= 1:
        return

    for i in range(1, length):
        key = list[i]
        j = i - 1
        while j >= 0 and key < list[j]:
            list[j+1] = list[j]
            j -= 1
        list[j+1] = key

print(insertion_sort([55, 21, 5, 3, 6, 95])) #> [3, 5, 6, 21, 55, 95]
print(insertion_sort([4, 1, 0, 3, 8, 9])) #> [0, 1, 3, 4, 8, 9]
print(insertion_sort([1, 4, 3, 0, 3, 0, 2, 8])) #> [0, 0, 1, 2, 3, 3, 4, 8]
