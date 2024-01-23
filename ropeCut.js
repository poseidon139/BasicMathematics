// to find the maximum number of pieces a rope can be cut which is of length n 
// if it can be cut only in smaller length a, b & c 

function ropecut(n, a, b, c){
    let res=-1;
    if( n==0 ){
    return 0;
  }
  if (n <0){
    return 1;
  }
  else{
    res=Math.max(ropecut(n-a,a,b,c),ropecut(n-b,a,b,c),ropecut(n-c,a,b,c));
  }
  if (res==-1){
    return -1;
  }
  return res+1;

}

console.log(ropecut(30,2,1,10))