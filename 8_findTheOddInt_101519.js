// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function oddInt(arrayInput){
    var sortedArray = arrayInput.sort();
    var counter = 1;
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i+1]) {
            counter = counter + 1;
        } else {
            if ( ( ((counter)/2) % 1) !== 0) {
                return sortedArray[i];
            } else {
                counter = 1;
            }
        }
    }
}

oddInt([2,4,6,8,10,10,2,4,6,8,1,3,5,7,9,1,3,5,7,9,9]);

// Best Practice solution by Unnamed:
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// Best Practice solution by harms280:
function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
}

// Best Practice solution by deathangel:
function findOdd(arr) {
    var result, num = 0;
  
    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i+1]) {
        num++;
      } else {
        num++;
        if (num % 2 != 0) {
          result = arr[i];
          break;
        }
      }
    }
    return result;
  }