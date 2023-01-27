import  React, { startTransition } from "react"



const js=()=>{

    // var datatype
var a = 10
        function f(){
            console.log(a)
        }
    f();
    console.log(a)


    // let datatype 
    let a = 10;
    function f() {
        let b = 9
        console.log(b);
        console.log(a);
    }
    f();
    // const

    const a = 10;
    function f() {
        a = 9
        console.log(a)
    }
    f();


    // String Interpolation 

    const x="anoop ayfav"
    console.log(`I like ${x}.`);
  

function greet() {
    return "hello!";
}
  

console.log(`${greet()} I am a student.`); 
  

console.log(`sum of 5 and 6 is ${5+6}.`);


// spread operatopr

function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun(1,2)); //3
console.log(fun(1,2,3)); //6
console.log(fun(1,2,3,4,5));

// rest operator
let arr = [1,2,3];
let arr2 = [4,5];
  
arr = [...arr,...arr2];
console.log(arr); 

}






export default js;