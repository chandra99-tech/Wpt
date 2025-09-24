let arr=[1,5,9,6,3,7,4]
var largest=arr[0]
arr.forEach(element=>{
    if(largest<element){
        largest=element
    }
    
})
console.log("First Method For Largest Number in Array : "+largest)

function findLargest(arr){
    arr.sort((a,b)=>a-b)
    return arr[arr.length-1]
}
console.log("Second Method For Largest Number in Array : " + findLargest(arr))

for(let i=0;i<arr.length;i++){
    if(largest<arr[i])
        largest=arr[i]
}
console.log("Third Method For Largest Number in Array : "+largest)

