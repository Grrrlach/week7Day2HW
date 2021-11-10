//Object prototypes (from ES-5)

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    //give it a method
    this.printInfo = function(wheels = 0, color){
        console.log(`This is a ${this.year}, ${this.make}, ${this.model}, and has ${wheels} wheels and is ${color} in color.`)
        
    }
}

let myCar = new Car ('Toyota', 'Tundra', '1995')
console.log(myCar)
console.log(myCar.make) 
/*seems like it'll be myCar.this.make, 
but "this" is referring to the instance 
that's defined by myCar
*/

//add parameter
console.log(myCar.something="something else")
console.log(myCar)

myCar.make="honda"
console.log(myCar)

myCar.printInfo(4)
myCar.printInfo(4,"red")

//can add method
myCar.drive = function(){
    console.log("VROOOOOOM")
}
myCar.drive()

//make a method for the string class
//"string methods" 
//.prototype
//"this" refers to instance of our string
//objecttype.prototype.functionname
String.prototype.first_letter = function(){
    return this[0]
}
console.log("Jerry".first_letter())



//JavaScript Classes
class Human{
    constructor(name, age, gender){
        this.name=name,
        this.age = age,
        this.gender = gender
    }
    returnInfo(){
        return `Name:${this.name} \nAge: ${this.age}  \nGender: ${this.gender}`
    }
}

let wilma = new Human("Wilma", "25", "Female")
console.log(wilma)
console.log(wilma.returnInfo())

//inheritance
//class Baby(Human) <-- python
class Baby extends Human{
    constructor(name, age, gender, walking){
    super(name, age, gender)
    this.walking = walking
    }
    isBabyWalking(){
        if (this.walking) {
            return "Baby is walking"
        }
        else{
            return "Baby ain't walking yet"
        }
    }
}
let bambam = new Baby ("BamBam", 1, "Male", true)
console.log("\nNEW BABY\n")
console.log(bambam.returnInfo())
console.log(bambam.isBabyWalking())



//--------------------------------------//
/*NEW SUBJECT
----------------------------------------
*/


//JavaScript Closures -- a function inside another function
let countUp = function (){
    let counter = 2;  //private variable, only usable in this func
    console.log("Hit")

    function addOne(){
        return counter++;
    }
    return addOne
}

myAddOne=countUp()
console.log(myAddOne())
console.log(myAddOne())
console.log(myAddOne())
console.log(myAddOne())
console.log(myAddOne())
console.log(myAddOne())
console.log(myAddOne())


//----------------------------------------------------------------
/* ASYNC FUNCTIONS

JavaScript is single threaded: does one thing at a time
but it can run asynchronously, which
gives same effect as double threaded
"make a promise" asks JavaScript to do something...
"when it has time"

*/

// JS Callbacks
/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/
console.log('====================================================')
//basic example (commented out)
// function first(){
//     console.log(1)
// }

// function second (){
//     console.log(2)
// }

// first()
// second()

// function first_delay(){
//     setTimeout(first,0) //will wait 5 sec (5k millisecs), wait for stack to clear, then run function
// }

// first_delay()
// second()

// function doHomework(subject, callback){
//     console.log(`starting my ${subject} homework`)
//     setTimeout(()=>console.log(5), 1000)
//     setTimeout(()=>console.log(4), 2000)
//     setTimeout(()=>console.log(3), 3000)
//     setTimeout(()=>console.log(2), 4000)
//     setTimeout(()=>console.log(1), 5000)
//     setTimeout(()=>callback(),6000)
// }

// function myCallback(){
//     console.log("I have finished my homework. Time for a beer!")
// }

// doHomework("python", myCallback)



//=====Creating a JS Promise=====
const isEvenNumber = (num) =>{
    return new Promise(
        (resolve, reject)=>{
            if (num%2==0){
                resolve(true)
            }
            else{
                reject(false)
            }
        }
    )
}

// isEvenNumber(10).then(
//     (result)=>{
//         console.log(`isEvenNumber is ${result}`)
//     }
// ).catch(
//     (error)=>{
//         console.log(`isEvenNumber is ${error}`)
// }
// )

//=====Async and await=======
//normal old function
function increase_salary(base, increase){
    const new_salary=base+increase;
    console.log(`Your new salary is ${new_salary}`)
    return new_salary
}
console.log(increase_salary(30000, 3000))

//slow version of this using async and await:
function slowAddition(num1, num2) {
    return new Promise(
        (resolve)=>{
            setTimeout(()=>resolve(num1+num2), 2000)
        }
    
)
    }

async function increase_salary_slowly(base, increase){
    const new_salary = await slowAddition(base, increase)
    console.log(`your new salary is ${new_salary}`)
    return new_salary
}

console.log('before')
increase_salary_slowly(40000,4000)
console.log('after')