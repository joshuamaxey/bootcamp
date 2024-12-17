# Create a function that takes a string (a random name). If the last character
# of the name is an "n", return `True`, otherwise return `False`.

# Write your function here.

def is_last_character_n(string):
    if(string[-1] == "n"): return True
    else: return False

print(is_last_character_n("Aiden"))  #> True
print(is_last_character_n("Piet"))   #> False
print(is_last_character_n("Bert"))   #> False
print(is_last_character_n("Dean"))   #> True
