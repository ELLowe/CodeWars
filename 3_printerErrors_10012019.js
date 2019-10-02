// In a factory a printer prints labels for boxes.
// For one kind of boxes the printer has to use colors which,
// for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string.
// For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used
// three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and 
// a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will output 
// the error rate of the printer as a string representing a rational 
// whose numerator is the number of errors and the denominator the length of the control string.
// Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from a to z.

// My Solutions Option 1:
function printer_error(controlString){
    let a2m = [];
    let n2z = [];
    for (var i = 0; i < controlString.length; i++){
        if (controlString[i] < 'n'){
            a2m.push(controlString[i])
        } else{
            n2z.push(controlString[i])
        }
    }
    
    return "error_printers: " + n2z.length + "/" + (a2m.length + n2z.length);
}

printer_error("aanbbcccncddefghijklmn");

// My Solutions Option 2:
function printer_errors(inputString){
    let input = inputString.split("");

    let a2m = input.filter(a => a < "n");;
    let n2z = input.filter(a => a > "m");
    return n2z.length + "/" + (a2m.length + n2z.length);

}
printer_errors("aanbbcccncddefghijklmn");
    
// My solutions work based on the logic that characters have implicit ordering values, where a is less than b as demonstrated in this function:
function characterProof(){
    let something = "";
    if ("a" < "b"){
        something = "a";
    } else{
        something = "b";
    }
    
    return something;
}

characterProof();

// Best practice solution from kevink520:
function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}