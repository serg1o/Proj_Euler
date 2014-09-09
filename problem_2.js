var n = 1;
var np1 = 2;
var even_sum = 0;

while (np1 < 4000000){
    if (np1 % 2 === 0) even_sum += np1;
    var aux = np1;
    np1 += n;
    n = aux;
}

console.log("Sum of the even terms of the Fibonacci sequence below 4000000: " + even_sum);
