var sum = 0;
for(var i = 3; i < 1000; i++){
    if ((i % 3 === 0) || (i % 5 === 0)){
        sum += i;
    }
}

console.log("Sum of all multiples of 3 or 5 below 1000: " + sum);
