# You are a bouncer at a club and you have a list of approved guests. Write a
# function `check_membership` that accepts the approved guests list `guest_list`
# and a name `guest_name` as arguments, and checks if the `guest_name` is on the
# list.

# 1. Iterate through the guest_list
# 2. Check if guest_name is on the list
# 3. If yes, return True. If no, return False

# Write your solution here.
def check_membership(guest_name, guest_list):
    if guest_name in guest_list:
        print(guest_name)
        return True
    else:
        return False

guest_list = ["George", "Anthony", "Susan", "Tiffany"]
print(check_membership("Sally", guest_list))        # False
print(check_membership("Anthony", guest_list))      # True
