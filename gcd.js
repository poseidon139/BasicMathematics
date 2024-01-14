///Brute force approach to solve a problem

const findGcd=(a,b)=>{
   let min=(a<=b)?a:b;
   while(min>0){
    if((a%min)==0 && (b%min)==0){
        return min;
    }
    else{
        --min;
    }
   }
}

console.log(findGcd(10,2));