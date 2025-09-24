function file()
{
    let f=require('fs');

    setTimeout(()=>{
        
    f.writeFile('chandrakant.txt',"hello this data After the asyn function call", (err,value)=>{
            if(err)
            {
                console.log(err);
            }else{
                console.log(value)
            }
    });

     f.readFile("chandrakant.txt",'utf8', (err,value)=>{
        if(err)
        {
            console.log(err);
        }else{
            console.log(value)
        }
    })


},2000)
    
    f.readFile("chandrakant.txt",'utf8', (err,value)=>{
        if(err)
        {
            console.log(err);
        }else{
            console.log(value)
        }
    })
}

file()