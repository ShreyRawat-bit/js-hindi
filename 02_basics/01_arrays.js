let newarr=new Array(0,1,2,3,4,5)
newarr.unshift(9)
console.log(newarr)
newarr.shift()
console.log(newarr)
newarr.pop()
console.log(newarr)
const myarr=newarr.join()
console.log(myarr)
console.log(typeof newarr)
console.log(typeof myarr)
//diff bw slice and splice is slice prints the sliced elements whereas splice prints splice elements including boundary and another important difference is that slice doesnt make any changes to the original array whereas spllice makes the array=everything-spliced elements
console.log(newarr)
console.log(newarr.slice(1,3))
console.log("A",newarr)
console.log(newarr.splice(1,3))
console.log("B",newarr)
let marvel=["Thor","Ironman","Captain America"]
let dc=["Superman","Batman","Flash"]
// marvel.push(dc)
// console.log(marvel)
marvel.concat(dc)
console.log(marvel)
let superheros=marvel.concat(dc)
console.log(superheros)
console.log(...marvel,...dc)
console.log(Array.isArray("shrey"))
console.log(Array.from("Shrey"))
console.log(Array.from({name:"Shrey"}))//ineteresting case for INTERVIEW
let finalarr=[1,2,[3,5,6,[2,3]]]
console.log(finalarr.flat(Infinity))
let ans1=200;
let ans2=300;
let ans3=400;
console.log(Array.of(ans1,ans2,ans3))