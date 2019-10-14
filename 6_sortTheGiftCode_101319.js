// Happy Holidays fellow Code Warriors!
// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts,
//  by assigning a unique alphabetical character to each gift.
// After each gift was assigned a character,
// the gift organizer Elf then joined the characters to form the gift ordering code.

// Sort the Gift Code:
// Write a function called sortGiftCode that accepts a string
// containing up to 26 unique alphabetical characters,
// and returns a string containing the same characters in alphabetical order.

// Ex. sortGiftCode( 'abcdef' ); //=> returns 'abcdef'

function sortGiftCode(input){
    let splitLetters = input.split("");
    let sorted = splitLetters.sort().join("");
    return sorted;
}

// Best Practice solution from palmerj3
function sortGiftCode(code){
    return code.split('').sort().join('');
}