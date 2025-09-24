class car{
    constructor(make,model){
        this.make=make
        this.model=model
    }
    startEngine(){
        return "Engine is running"
    }
}
const mycar=new car("Make in india","BMW")
console.log(mycar.startEngine())

