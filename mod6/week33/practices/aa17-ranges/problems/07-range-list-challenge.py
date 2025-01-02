# Create a function that returns a list of 100 randomly generated numbers.

import random
# Write your function here.

# ^ POLYA
# 1. import the random module (already done)
# 2. Define the function (rng)
# 3. Generate the random numbers using a loop, and append them to a list
# 4. return the list of random numbers

def rng():
    random_numbers = [random.randint(1, 100) for _ in range(100)]
    return random_numbers

print(rng())
