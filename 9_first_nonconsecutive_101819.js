// Your task is to find the first element of an array that is not consecutive.
// If the whole array is consecutive then return null or Nothing.

function firstNonConsec(inputArray) {
    for (i=0;i<inputArray.length;i++){
        if (i == ((inputArray.length)-1)){
            return null;
        }
        if (inputArray[i]+1 !== inputArray[i+1]){
            return inputArray[i+1];
        }   
    }
}

firstNonConsec([1,2,3,4,5,7,8,9,10]);
// -> should return 7 as the first non-consecutive number in the array

// Best Practice Solution from ooflorent:
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i + 1];
        }
    }
    return null;
}