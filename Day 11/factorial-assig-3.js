function argument(callback)
{
    console.log(process.argv)
    let a=process.argv[2];
    let num=Number(a);
    console.log(factorial(num));
    console.log(a);
}
argument();

function factorial(a)
{
    //console.log(a)
    if(a === 0 || a < 0)
    {
        return 1;
    }
    else{
        return a * factorial(a-1)
      
    }
}



