let sum=0
function add(...a){
    for(i=0;i<a.length;i++){
        sum=sum+a[i]
     
    }
    console.log("The Addition of Numbers is: "+sum)
}
add(15,45,85)
add(10,50,25,42,75)