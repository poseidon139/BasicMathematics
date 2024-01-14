///Brute force approach to solve a problem

const findGcd=(a,b)=>{
   let max=(a>=b)?a:b;
   while(max>0){
    if((a%max)==0 && (b%max)==0){
        return max;
    }
    else{
        --max;
    }
   }
}

console.log(findGcd(10,2));