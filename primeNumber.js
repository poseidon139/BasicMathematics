const isPrime=(a)=>{
    for ( let i=2 ; i*i < a ; i++){
        if(a%i == 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(10));