// function saymyname(){
//     console.log("hi")
//     console.log("my name is")
//     console.log("Shrey")
// }
// saymyname()
// function addtwonumbers(number1,number2){
//     console.log(number1+number2)
// }
// const ans=addtwonumbers(3,9)
// console.log(ans)
// saymyname()
// function addtwonumbers2(number1,number2){
//     console.log(number1+number2)
//     return (number1+number2)
// }
// const ans2=addtwonumbers(3,9)
// console.log(ans2)
// function logger(username){
//     if(username===undefined){
//         console.log("Enter values bruh")
//         return
//     }
//     return `${username} just logger in`
// }
// // console.log(logger("Shrey"))
// console.log(logger())
// const myobj={
//     name:"shrey",
//     age:20,
//     class:"s"
// }
// for (const num in myobj){
//     console.log(num)
// }
// if(Object.keys(myobj).length!=0){
//     console.log("not empty")}
// const myarr=[1,2,3,4,5]
// myarr.forEach((item)=>{
//     console.log(`so the item here is ${item}`)
// })
const mynum=["hi","how ","are","you"]
const newnums=mynum.filter((item)=>item>"m")
console.log(newnums)