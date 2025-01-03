# Given a list of dictionaries representing credit cards, sort the list in
# descending order according to the `num_users` property. Do the sort out-of
# place without mutating the original list, using the `sorted` built in
# function, and then return only the company names in a list, in the correct
# sorted order.

# ^ POLYA
# 1. use sorted() to filter the cards by the num_users property
# 2. return company names from each card after sorting

cards = [
    {
        "company": "Wells Fargo",
        "card_name": "Active Cash",
        "annual_fee": 0,
        "intro_reward_type": "cash",
        "intro_reward_amount": 200,
        "num_users": 20
    },
    {
        "company": "Chase",
        "card_name": "Sapphire Preferred",
        "annual_fee": 95,
        "intro_reward_type": "points",
        "intro_reward_amount": 60000,
        "num_users": 54
    },
    {
        "company": "Citi",
        "card_name": "Diamond Preferred",
        "annual_fee": 0,
        "intro_reward_type": "cash",
        "intro_reward_amount": 150,
        "num_users": 13
    }
]

# Write your code here.
def sort_cards(card_list):
    sorted_cards = sorted(card_list, key=lambda card: card["num_users"], reverse=True)
    # print(sorted_cards) # correctly prints the cards in sorted order
    names = [card["company"] for card in sorted_cards]
    return names


print(sort_cards(cards))        # ['Chase', 'Wells Fargo', 'Citi']
