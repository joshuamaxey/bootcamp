
# ! Lists in Python

# List is an iterable (similar to array in JavaScript)
empty = []
print(empty)

friends = ["Sammy", "Jo", "Will", "Sara", "James", "Mike"]
print(friends)

# Note that lists are ordered objects, numbered by indices starting at 0
print(friends[0]) # prints Sammy
# print(friends[15]) # throws an error (list index is out of range)
print(friends[-1]) # prints Mike
print(friends[-1:]) # prints ['Mike']
print(friends[1:-1]) # prints ['Jo', 'Will', 'Sara', 'James']
print(friends[1::2]) # (start at 2, go to end of list, with step 2) prints ['Jo', 'Sara', 'Mike'], every other person
print(friends[::2]) # start at 0, go to the end, step 2: prints ['Sammy', 'Will', 'James'], every other person

# We can use len() to take the length of a list
print(len(friends)) # prints 6

# ^ Math with Lists

scores = [159, 210, 188, 76]
print(scores)

# Sum takes an iterable (which includes lists) adn sums the values
team_score = sum(scores)
print(team_score) # prints 633

# Max finds the highest value in an iterable
highest_score = max(scores)
print(highest_score) # prints 210

# Min finds the lowest
lowest_score = min(scores)
print(lowest_score) # prints 76

average_score = sum(scores) / len(scores)
print(int(average_score)) # prints 158

ranked_scores = sorted(scores, reverse=True)
print(ranked_scores) # prints [210, 188, 159, 76], scores from highest to lowest

# ^ Mutability and Sorting of Lists

supplies = ['crayons', 'pencils', 'paper', 'Kleenex', 'eraser']
print(supplies) # prints ['crayons', 'pencils', 'paper', 'Kleenex', 'eraser']

supplies.append('markers')
print(supplies) # prints ['crayons', 'pencils', 'paper', 'Kleenex', 'eraser', 'markers'], new item added to the end

supplies.remove('crayons')
print(supplies) # prints ['pencils', 'paper', 'Kleenex', 'eraser', 'markers']

supplies.sort() # note that sort actually mutates the list, changing its order in memory
# Also, notice that the proper noun (capitalized 'Kleenex') comes before lower-case words.
print(supplies) # prints ['Kleenex', 'eraser', 'markers', 'paper', 'pencils']
# To make the sort non-case-sensitive, use key=str.lower
# This will cause each item (key) in the list and makes them lower-case
# This does NOT edit the items themselves! Only the order in which they are sorted (Kleenex still has its capital)
supplies.sort(key=str.lower)
print(supplies) # prints ['eraser', 'Kleenex', 'markers', 'paper', 'pencils']

colors = ['red', 'orange', 'blue', 'pink']
print(colors) # prints ['red', 'orange', 'blue', 'pink']

alphabetical_colors = sorted(colors)
print(colors) # prints ['red', 'orange', 'blue', 'pink']
print(alphabetical_colors) # prints ['blue', 'orange', 'pink', 'red']

alphabetical_colors_reverse = sorted(colors, reverse=True)
print(alphabetical_colors_reverse) # prints ['red', 'pink', 'orange', 'blue']

reversed_colors = reversed(colors)
print(reversed_colors) # creates a new kind of iterator, printing: <list_reverseiterator object at 0x7f0802cddfd0>
print(list(reversed_colors)) # prints ['pink', 'blue', 'orange', 'red']

