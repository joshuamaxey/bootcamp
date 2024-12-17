# Create a function that uses DeMorgan's Law to get the expected `True`/`False`
# statement.

# Write your function here.

def de_morgans_law(a, b):
    return (not (a or b) == (not a and not b))

print(de_morgans_law(True, True)) # False
print(de_morgans_law(True, False)) # True
print(de_morgans_law(False, False)) # True
print(de_morgans_law("", [])) # True
print(de_morgans_law(2, 2)) # False
print(de_morgans_law(2, 0)) # True
