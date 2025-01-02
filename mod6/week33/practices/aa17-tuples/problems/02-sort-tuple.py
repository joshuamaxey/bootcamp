# Create a function that returns a tuple with sorted values.

# Write your function here.

# ^ We can use the sorted() method, which returns a new sorted list from the iterable provided, leaving the original iterable unchanged.
# NOTE That sorted() works with any iterable, not just lists

def sort_tuple(tuple):
    return sorted(tuple)

print(sort_tuple((5, 8, 9, 2, 3, 1, 4, 2))) #> (1, 2, 2, 3, 4, 5, 8, 9)
print(sort_tuple((5.2, 5, 1, 2.0, 3, 9.5, 8))) #> (1, 2.0, 3, 5, 5.2, 8, 9.5)
print(sort_tuple(("t", "a", "f", "p", "l", "b"))) #> ('a', 'b', 'f', 'l', 'p', 't')
print(sort_tuple(("app", "academy", "is", "great"))) #> ('academy', 'app', 'great', 'is')
