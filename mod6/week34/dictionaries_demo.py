
book = {
    'title':'Goodnight Moon',
    'ratings':7492,
    'stars':4.8,
    'author': {'first_name':'Margaret', 'last_name':'Wise Brown'}, # another dictionary
    'images': ['goodnight1.png', 'goodnight2.png'] # list
}

print(book) # prints {'title': 'Goodnight Moon', 'ratings': 7492, 'stars': 4.8, 'author': {'first_name': 'Margaret', 'last_name': 'Wise Brown'}, 'images': ['goodnight1.png', 'goodnight2.png']}

print(len(book)) # prints 5

del book['stars'] # we can delete a property using del

print(book) # prints {'title': 'Goodnight Moon', 'ratings': 7492, 'author': {'first_name': 'Margaret', 'last_name': 'Wise Brown'}, 'images': ['goodnight1.png', 'goodnight2.png']} w/out the 'stars' key/value attribute

book['stars'] = 4.8

print(book) # prints {'title': 'Goodnight Moon', 'ratings': 7492, 'author': {'first_name': 'Margaret', 'last_name': 'Wise Brown'}, 'images': ['goodnight1.png', 'goodnight2.png'], 'stars': 4.8}, stars is back again

for i in book:
    print(i)
    # prints:
# title
# ratings
# author
# images
# stars

