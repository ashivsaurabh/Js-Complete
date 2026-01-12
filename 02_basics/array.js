const arr=[1,2,3,4,5]
const arr2=new Array(2,3,4,5,6,7,8,"w")
console.log(`arr value ${arr} and arr2 value is ${arr2}`)

let data=[12,'we are good',10]
console.log(data)
console.log(data[0])
data.push(123445)
console.log(data)

// array make shallow copy non primitive -works as same reference copy
//array mai input value convert karte hai to Array.from() use karte hai agar yaha object ata hai to value printk time {} kyuki array ko batana padega ki value do hai key pair
let s=10
let a=12
let x=100
console.log(Array.of(s,a,x));
