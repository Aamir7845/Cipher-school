
// Arrow function

let People = function(person, age) {
    this.person = person;
    this.age = age;
    this.info = function() {
  
        
        console.log(this + ' ');
  
    
        console.log(this.person + " is " + this.age + 
                                " years old");
  
    }
}
  
let person1
= new People('John', 21);
  

person1.info();
  
let separated = person1.info.bind(person1);
  

separated();



// /      

// Function definition
function welcomeMsg(name) {
    console.log("Hello " + name +" welcome to GeeksforGeeks");
 }
  
 // creating a variable
 var nameVal = "Admin";
  
 // calling the function
 welcomeMsg(nameVal);