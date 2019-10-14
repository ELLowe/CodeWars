// My solution:
function pyramid(n){
    let answer = [];
    for (i=0; i<n; i++) {
        a=new Array(i)
        for (j = 0; j <= i; ++j) {
            a[j] = 1;
        }
        answer.push(a);
    }
    return answer;
}

pyramid(4);

// Best Practice solution from DeadIntegral:
function pyramid(n) {
    const res = [];
    for(let i = 0; i < n; i++){
      res.push([...Array(i+1)].fill(1))
    }
    return res;
  }

// Best Practice solution from SavagePixie:
const pyramid = n => Array(n).fill(1).map((x, i) => Array(i + 1).fill(1))