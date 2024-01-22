function sunN(n){
    if(n==0){
        return 0;
    }
    else
     return n+sunN(n-1);
}
console.log(sunN(9))