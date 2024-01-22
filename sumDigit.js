function sumDigit(n){
    if(n<=9){
        return n;
    }
    else{
        return (n%10) +sumDigit(Number.parseInt(n/10))
    }
}
console.log(sumDigit(123))