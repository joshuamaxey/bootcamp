# It's time to explore the *tuple* object and how to use it.

# Follow the instructions in the code comments. Be sure to test your work by
# running your code!

# For the bonus, remember you can split a returned tuple to variables: `(a,b,c)
# = myfunc()`

# DO NOT EDIT
odds = 1,3,5,7,9
evens = 2,4,6,8

# Step 1: Print out the result of adding evens to odds

print(evens + odds) # prints (2, 4, 6, 8, 1, 3, 5, 7, 9)

# Step 2: Print out the result of multiplying odds by three

print(odds * 3) # prints (1, 3, 5, 7, 9, 1, 3, 5, 7, 9, 1, 3, 5, 7, 9)

# Step 3A: Use print to find out if odds is less than evens

odd_sum = sum(odds)
print(odd_sum) # prints 25
even_sum = sum(evens)
print(even_sum) # prints 20

if (odd_sum > even_sum):
    print("Odds is not less than evens") # prints Odds is not less than evens

if (odd_sum < even_sum):
    print("Odds is less than evens")

# ^ I think I misunderstood the question. Here is the correct expression:

print(odds < evens) # prints TRUE

# Step 3B: Print out your explanation of why 3A has that result

print("Python uses 'lexicographical order' to determine whether odds is 'less than' evens. This means that it compares the first elements of each tuple. This would 1 (from odds) and 2 (from evens). Since it is able to derive a True/False value from this initial comparison, Python short-circuits and responds 'True' since the first number in odds is less than the first number in evens. This is why odds is 'less than' evens")

# Step 4: Print out the average of the numbers in evens using one line of code

print(sum(evens) / len(evens)) # prints 5.0

# Step 5A: Write a function 'minmaxmean' that accepts an iterable and
#         returns the minimum value, the maximum value and the average (mean)

def minmaxmean(iterable):
    for x in iterable:
        if x == max(iterable):
            print(x)
        if x == min(iterable):
            print(x)
    print(sum(iterable) / len(iterable))

minmaxmean(odds) # prints 1, 9, 5.0 (each on separate line)

# ^ This solution correctly identifies the min, max, and average, then prints them. But it does not RETURN these values (ideally as another tuple). So lets refactor it.

def minmaxmean(iterable):
    maximum = max(iterable)
    minimum = min(iterable)
    average = sum(iterable) / len(iterable)
    return minimum, maximum, average

print(minmaxmean(odds)) # prints (1, 9, 5.0), which is better
print(minmaxmean(evens)) # prints (2, 8, 5.0)

# Step 5B: Use print to confirm you function is working on evens and odds

# BONUS: Call your function with a new tuple of your own creation
#        And print the results in a pretty way
