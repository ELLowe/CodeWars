# Write a function that converts any sentence into a V A P O R W A V E sentence.
# V A P O R W A V E sentences convert all the letters into uppercase,
# and add 2 spaces between each letter (or special character),
#  to create this V A P O R W A V E effect.

# Examples:

# vaporcode("Lets go to the movies")
# # output => "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
# vaporcode("Why isn't my code working?")
# # output => "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

def vapor_code(input):
    spaceless = input.replace(" ", "")
    vaporized = spaceless.upper().replace("","  ").strip()

    return vaporized

# Best Practice solution from Blind4Basics:
def vaporcode(s):
    return "  ".join(s.replace(" ", "").upper())