// My solution:
function vaporCode(string){
    let str = string.replace(/\s/g,'');
    return str.toUpperCase().split("").join("  ").trim();
}

// Best Practice solution from ooflorent
function vaporcode(string) {
    return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ")
}