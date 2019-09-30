// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.



// integers = [3,5,7,9,13,11,15,4,7,9,21,15,1]

// Using Modulo:
function findOutlier(integers){
    var output = 0;
    if ( (((integers[0]/2) % 1 === 0) || ((integers[1]/2) % 1 === 0)) && (((integers[2]/2) % 1 === 0) || ((integers[3]/2) % 1 === 0)) ){
        integers.forEach((integer) => {
            if ( ( ((integer)/2) % 1) !== 0) {
                output = integer;
            }
        });
    } else {
        integers.forEach((integer) => {
            if ( ( ((integer+1)/2) % 1) !== 0) {
                output = integer;
            }
        });
    }
    return output;
}

findOutlier([3,5,7,9,13,11,15,4,7,9,21,15,1]);

// COOL SOLUTION, using 3 lines of code, modulus, and ternary operator from Obolensky:
function findOutlier(int) {
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
}