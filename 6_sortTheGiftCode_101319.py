# This solution works but I remembered after the fact that sorted will work without making a list
def sortGiftCode(code):
    ordered = sorted(list(code))
    return "".join( q for q in ordered)


# Best Practice solution from Random-ax:
def sort_gift_code(code):
    return "".join(sorted(code))