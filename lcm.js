//find the LCm of two numbers 

const lcm=(a,b)=>{
    let max=(a>=b)?a:b
    while (true){
        if(max%a==0 && max%b==0 ){
            return max;
        }
        else{
            max++;
        }
    }
}

console.log(lcm(2,10));