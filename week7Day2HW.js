console.log('\n\n=============Exercise #1 ============\n\n')
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(person3.pizza[0])

function fav_foods(){
    for (let key in person3){
        person3.shakes[0]
    }
    console.log(`I'm not totally sure what the instructions for Day 2, Exercise 1 are, but...\n
Person3's favorite pizza is either ${person3.pizza[0]} or ${person3.pizza[1]}.\n
His/Her favorite tacos are simply "${person3.tacos}."\n
Their favorite burgers are ${person3.burgers}, which is odd because I really think the hot dogs are the thing everyone goes there for.\n
Their favorite ice cream is either ${person3.ice_cream[0]}, ${person3.ice_cream[1]}, or ${person3.ice_cream[2]}, but I think ${person3.ice_cream[2]} is probably the best.\n
He or she is a HUGE milkshake fan. From each restaurant they have different flavors they favor:\n

Oberwise: ${person3.shakes[0].oberwise}\n
Dunkin: ${person3.shakes[0].dunkin}\n
Culvers: "${person3.shakes[0].culvers}"\n
McDonald's: ${person3.shakes[0].mcDonalds}\n
Cupid's Candies: ${person3.shakes[0].cupids_candies}\n\n
Overall, I'd say Person3 is probably pretty awesome to hang out with for an afternoon.`)

}
fav_foods(person3)


console.log('\n\n=============Exercise #2 ============\n\n')
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/


// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
    this.printInfo = () => {console.log(`The person you're inquiring about has the following info:\nName: ${this.name}\nAge: ${this.age}`)}
    this.older = (age) =>{
        this.age++
    }
    // this.older2 = (age)=>{
    //         this.age+5
    // }
}


// myAddOne = this.older2()
// console.log(myAddOne())

let Mark = new Person('Mark', 39)
Mark.printInfo()
Mark.printInfo()
console.log('-------------------')
let Alex = new Person ('Alex', 74)
Alex.printInfo()
Alex.older()
Alex.older()
Alex.older()
console.log('----------Alex has aged----------')
Alex.printInfo()
console.log('-------------------')
let Kevin = new Person ('Kevin', 23)
Kevin.printInfo()
console.log('-------------------')


console.log('\n\n=============Exercise #3 ============\n\n')
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"*/

let isBigWord = (myString) => {
    return new Promise(
        (resolve, reject) =>{
            if (myString.length > 10){
                resolve (console.log('Big Word'))
            }else if (myString.length<=10){
                resolve (console.log('Small Number'))
            }else{
                reject (console.log('error'))
                }
                            }
                    )
                            }
            
isBigWord('Supercalifraglisticexpialodotious')
isBigWord('Duh')
