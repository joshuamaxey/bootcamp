# Given a list of elements, write a function, `print_list` that prints each
# element of the list out.

# ! We can use a for loop to easily iterate through anything that is iterable
# lists are iterable

# Write your solution here.
def print_list(list):
    for a in list:
        print(a)


lst1 = [1, 2, 5, 1429]
lst2 = ['this', 'list', 'is', 'being', 'printed']
lst3 = ['there', 'are', 2, 'data', 'types', 'being', 'printed']
lst4 = [[1, 2], ['hello', 'from', 'within']]

print_list(lst1)        # 1 2 5 1429
print_list(lst2)        # this list is being printed
print_list(lst3)        # there are 2 data types being printed
print_list(lst4)        # [1, 2] ['hello', 'from', 'within']
