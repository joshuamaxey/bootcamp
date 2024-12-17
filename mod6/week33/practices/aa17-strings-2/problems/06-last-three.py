# Create a function that returns a boolean indicating whether the last three
# letters of the string match the given letters (regardless of the letter's
# case).

# Write your function here.

def last_three(string, substring):
    return string[-3:].lower() == substring.lower()

print(last_three("Power", "wer"))  #> True
print(last_three("Application", "App"))   #> False
print(last_three("Raw", "raw"))   #> True
print(last_three("Bonjour", "OUR"))   #> True
