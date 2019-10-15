// Your work will be to implement the two following functions:

// toLocString(int) -> string: Should take any integer in the open interval (-2^52, 2^52) 
// and produce the most simplified locator number string which can represent that number. 
// This means the output string should be sorted from least significant digit to most significant digit, from left to right, 
// with no repeating digits. Thus, the value -4095 should produce the string "-abcdefghijkl".

// toInt(string) -> int: Should take a locator number string, and return the matching integer value.
// The input may have repeating digits and be in any order; It must still accept this string like normal and produce its value.

// Both functions should be able to take eachother's output as input directly.
// String arguments to toInt() may have whitespace (\t, \v, \r, \n, and space) anywhere in the string and must be ignored. 
// Do not check for range or errors, assume inputs will always be valid.

function toInt(string){
    newString = string.replace(/ /g, '');
    
}

// This topic is tag Regular Expressions... not a focus at this time

// FUNDAMENTAL... strings, numbers, boolean -> like how do you reverse a string or depcit if a string is a palendrome?
// How do you know if one string is inside of another string?
// 
// ALGORITHMS ARE HUGE

// Arrays and data types

// math problems

// Learn REACT