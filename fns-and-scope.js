//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var name = "tyler"

var isTyler = function() {
    if (name === "tyler") {
        return true;
    }
    
    else {
        return false;
    }
    
    isTyler(name);
}

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var namefirst = "Sam";

function getName() {
    prompt("What is your name User?");
    return namefirst;
}

getName();


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome() {
    var name = "What is your name User?";
    
    function getName() {
        var user = prompt(name);
        alert("Welcome " + user + "!");
    }
    return getName();
}
welcome();


//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
parameter === something that is given to a function declaration.
argument === is something that is passed when calling the function.

a and b below would be considered parameters.

function something(a, b) {     ... }

and "hello" and 10 would be considered arguments.

something("hello", 10);


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
If statements  
0-undifined-NaN-null-false-""


//Next Problem



//Create a function called myName that returns your name

  //Code Here
function myName(name) {
    return name;
}
myName("Sam");
                          
//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName;
                    
function myName(name) {
    return name;
}
myName("Sam");

//Now alert the result of invoking newMyName

var newMyName= myName;
alert(newMyName("Sam"));

function myName(name) {
  return name;
}


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
            
function outerFn() {
  
  function anony(name) {
    alert(name);
  }
  return anony;
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
                          
var innerFn = outerFn();

//Now invoke innerFn.
                          
innerFn("Sam");
