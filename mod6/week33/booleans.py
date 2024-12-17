
# ! Booleans

print(True and False) # prints False
print(not True) # prints False
print(True or False) # prints True

# Remember DeMorgan's Law
A = 5
B = 1
print( (not (A or B)) == (not A and not B) ) #prints true

# Falsy values
C = None
print(C == True) # prints False

emptyString = ''
print(emptyString == True) # prints False

emptyList = []
print(emptyList == True) # prints False

emptyTuple = ()
print(emptyTuple == True) # prints False

emptyDictionary = {}
print(emptyDictionary == True) # prints False

emptySet = set()
print(emptySet == True) # prints False

emptyRange = range(0)
print(emptyRange == True) # prints False
