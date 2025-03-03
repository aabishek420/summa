


let n = 111;
let p = 0;

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        p++;
    }
}

if (p === 2) {
    console.log(n + " is a Prime");
} else {
    console.log(n + " is not a Prime");
}



"<br>" 










let f = 0;
for (let a = 1; a <=n; a++) {
    for (let b = 1; b <= a; b++) {
        if (a % b === 0) {
            f++;
        }
    }
    if (f === 2) {
        console.log(a + " is a Prime");
    }
    f = 0;
}

















