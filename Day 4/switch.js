let a =[1,2,5,8,7,4,]

switch (5) {
    case 1:
        a.push(7)
        console.log(a)
        break;
    case 2:
        a.shift()
console.log(a)
        break;
    case 3:
        a.unshift(2)
console.log(a)
        break;
    case 4:
       a.pop()
console.log(a)
        break;
    case 5:
        a.splice(1,2)
console.log(a)
        break;
    case 6:
        console.log(a.slice(1,5))
        break;

    default:
        break;
}
