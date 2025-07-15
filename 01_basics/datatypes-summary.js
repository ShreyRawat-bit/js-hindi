let arr=[3,4,5,5]
console.log(arr)
let myobj={
    name:"yashaj",
    age:20
}
let myfunc=function(){
    console.log("hello world")
    city:"dehradun"
}
console.log(typeof myfunc)
console.log(typeof myobj)
let ob2={
    name:"yash",
    age:12
}
console.log(ob2)
//stack and heap
//stack stores primitive dataype while heap store non primitive datatype
//any change made into stack will not be implemented into original but for heap any change made into heap will be implemented into original 
//lets take an example for better understanding 
let num1=12
let num2=num1
console.log(num1)
console.log(num2)
num1=100
console.log(num1)
console.log(num2)
let myob1={
    name:"Shrey",
    age:10
}
let myob2=myob1
console.log(myob1)
console.log(myob2)
myob2.name="Mr Shrey the boss"
console.log(myob1)
console.log(myob2)

