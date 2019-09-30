// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
// Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.
// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.


// basic function style:
function jadenCased(quotedWords){
    let splitWords = quotedWords.split(" ");
    let upperCased = [];
    splitWords.forEach((splitWord) => {
        let capWord = splitWord.charAt(0).toUpperCase() + splitWord.slice(1);
        upperCased.push(capWord)
    });
    
    return upperCased.join(" ");
}

// String.prototype style:
String.prototype.jadenCased = function () {
    splitWords = this.split(" ");
    let upperCased = [];
    splitWords.forEach((splitWord) => {
        let capWord = splitWord.charAt(0).toUpperCase() + splitWord.slice(1);
        upperCased.push(capWord)
    });
    
    return upperCased.join(" ");
};

let str = "How can mirrors be real if our eyes aren't real";
str.jadenCased();

// Best Practice solution from shernshiou:
String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}