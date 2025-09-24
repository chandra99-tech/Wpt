function getFactorial(choice){
    function loop(num){
        if(num<0){
            console.log("Please Enter Positive Number -")
        }
        else{
            let fact = 1;
    for(let i=1;i<=num;i++){
        fact = fact * i;
    }
    return fact;
        }
}
function recursive(num){
    if(num==0)
        return 1;

    return (num * recursive(--num));
}

    if(choice == "RECUR"){
        console.log("Factorial of Number Using Recursion is: ");
        return recursive
    }else{
        console.log("Factorial of Number Using For-Loop is: ");
        return loop
    }
}
let rv1 = getFactorial("RECUR");
console.log("The factorial of 3 is: " + rv1(3)); 

let rv2 = getFactorial();
console.log("The factorial of 5 is: " + rv2(5)); 