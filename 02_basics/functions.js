function saymyname(){
    console.log("hi")
    console.log("my name is")
    console.log("Shrey")
}
saymyname()
function addtwonumbers(number1,number2){
    console.log(number1+number2)
}
const ans=addtwonumbers(3,9)
console.log(ans)
saymyname()
function addtwonumbers2(number1,number2){
    console.log(number1+number2)
    return (number1+number2)
}
const ans2=addtwonumbers(3,9)
console.log(ans2)
function logger(username){
    if(username===undefined){
        console.log("Enter values bruh")
        return
    }
    return `${username} just logger in`
}
// console.log(logger("Shrey"))
console.log(logger())