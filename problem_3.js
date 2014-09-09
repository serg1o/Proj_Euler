var num = 600851475143;
var limit = Math.sqrt(num) + 1;
var max_factor = 0;
var partial_factors_product = 1;

var is_prime = function(value){
    for (var i = 2; i< value/2 + 1; i++){
        if(value % i === 0) return false;
    }
    return true;
};

for (var i = 2; i < limit; i++){
    if((num % i === 0) && is_prime(i)){      
        max_factor = i;
        var aux = num;
        do {
            console.log("prime factor: " + i);
            partial_factors_product *= i;
            aux /= i;
        } while (aux % i === 0);
    }
}
if ((num/partial_factors_product === 1) && (max_factor !== 0)){
    console.log("Largest prime factor = " + max_factor);
} else {
    console.log("Largest prime factor = " + num/partial_factors_product);
}
