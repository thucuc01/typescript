let x:string ='codegym';
console.log(x);
let arrawFuntio=()=>{
    console.log("CodeGym")
}
arrawFuntio();

class  Student{
    private _id: number;
    private _name:string;
    constructor(id:number,name:string) {
        this._id=id;
        this._name=name;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

}
let student=new Student(1,"Cuc");
console.log(student);


let promise=new Promise((resolve,reject)=>{
    return resolve(25);
})
promise.then(value => {
    console.log(value)
})


let money= 10000;
const buyCar=(car:any)=>{
    return new Promise(((resolve,reject)=>{
        setTimeout(()=>{
            if(money>=10000){
                resolve("buy a new car")
            }else {
                reject("not")
            }
        },1000)
    }))
}
money=1;
const  promise1=buyCar("Vinfast").then(value => {
    console.log(value);
}).catch(error=>{
    console.log(error);
})
console.log(promise1);


interface Product{
    id :number;
    name ?:string
}

let product:Product ={
    id:1
}
