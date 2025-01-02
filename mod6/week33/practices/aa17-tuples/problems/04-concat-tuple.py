# Create a function that returns a concatenated tuple.

# Write your function here.

def concat_tuple(tuple1, tuple2):
    new_tuple = tuple1 + tuple2
    return new_tuple

print(concat_tuple((5, 8, 9, 2, 3, 1, 4, 2), (5, 8, 9, 2, 3, 1, 4, 2))) #> (5, 8, 9, 2, 3, 1, 4, 2, 5, 8, 9, 2, 3, 1, 4, 2)
print(concat_tuple((5, 8, 9), ("a", "b"))) #> (5, 8, 9, 'a', 'b')
print(concat_tuple(("a", "b", "c"), (8.0, 5.7, 9))) #> ('a', 'b', 'c', 8.0, 5.7, 9)
