# In a factory a printer prints labels for boxes.
# For one kind of boxes the printer has to use colors which,
# for the sake of simplicity, are named with letters from a to m.

# The colors used by the printer are recorded in a control string.
# For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used
# three times color a, four times color b, one time color h then one time color a...

# Sometimes there are problems: lack of colors, technical malfunction and 
# a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

# You have to write a function printer_error which given a string will output 
# the error rate of the printer as a string representing a rational 
# whose numerator is the number of errors and the denominator the length of the control string.
# Don't reduce this fraction to a simpler expression.

# The string has a length greater or equal to one and contains only letters from a to z.

# My solution with fstrings, which the website doesn't understand but is still valid:
def printer_error(controlString):
    a2m = []
    n2z = []
    listed = list(controlString)
    for index,item in enumerate(listed):
        if (item < 'n'):
            a2m.append(item)
        else:
            n2z.append(item)
    
    return f"error_printers: {len(n2z)}/{len(listed)}"


printer_error("aanbbcccncddefghijklmn")

# My solution without fstrings:
def printer_error(controlString):
    a2m = []
    n2z = []
    listed = list(controlString)
    for index,item in enumerate(listed):
        if (item < 'n'):
            a2m.append(item)
        else:
            n2z.append(item)
    
    return str(len(n2z)) + "/" + str(len(listed))


printer_error("aanbbcccncddefghijklmn")

# Best Practice solution by beznos:
def printer_error(s):
    return '{}/{}'.format(sum(color > 'm' for color in s), len(s))

# Best Practice solution by NaMe613:
from re import sub
def printer_error(s):
    return "{}/{}".format(len(sub("[a-m]",'',s)),len(s))