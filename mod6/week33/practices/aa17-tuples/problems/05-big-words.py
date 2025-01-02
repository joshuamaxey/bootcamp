# Create a function that takes in a tuple of strings. It should return a tuple
# including only the strings that are greater than 8 letters in length.

# Write your function here.

# ^ Since we can't mutate tuples, let's just create a list so that we can run a loop and add the current element of the 'tup' parameter to the list at each iteration. Once the list is full of the values from the tuple, we'll just convert the list into a tuple using the tuple() constructor

def big_words(tup):
    new_list = []
    for x in tup:
        if len(x) > 8:
            new_list.append(x)
    new_tuple = tuple(new_list)
    return new_tuple

print(big_words(('earth', 'jupiter', 'mars', 'neptune'))) #> ()
print(big_words(('wakanda', 'melbourne', 'london', 'france'))) #> ('melbourne',)
print(big_words(('app', 'academy', 'app academy', 'xylophone'))) #> ('app academy', 'xylophone')
