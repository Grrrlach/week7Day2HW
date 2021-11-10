// JS doesn't just have double equal; it also has triple
//triple makes sure VALUE AND DATA TYPE are the same
//triple is like python's double equal
//double, unlike python, checks only that value is the same

console.log("1"==1);
console.log("1"===1);

//date function
//Date is a class, so must be initialized below, making
//a new date object
//must say "new"
let day = new Date();
console.log(day);
console.log(day.getDay());
console.log(day.getDate());
day = day.getDay()

let literal_day = new Date().toString(); //gives just the string
console.log(literal_day);
console.log(literal_day.split(" ")[0]) //splits it onspaces, and returns first index
literal_day = literal_day.split(" ")[0]
//0 is sunday, 3 is wed, 6 is sat, etc.


//Switch Case Statement

switch(day){
    case 0: //in the case that day = index 0
        console.log("Go to Church");
        break;
    case 1:
        console.log("Write Code...it's monday");
        break;
    case 2:
        console.log("Test Code, it's testing tuesday");
        break;
    case 3:
        console.log("Testing more code...it's hump day");
        break;
    case 4:
        console.log("write a fearure for our app on thursday");
        break;
    case 5:
        console.log("test our feature on feature friday");
        break;
    case 6:
        console.log("sleep all day, it's SATURDAY");
        break;
}

switch(literal_day){
    case "Sun": //in the case that day = index 0
        console.log("Go to Church");
        break;
    case "Mon":
        console.log("Write Code...it's monday");
        break;
    case "Tue":
        console.log("Test Code, it's LITERALLY testing tuesday");
        break;
    case "Wed":
        console.log("Testing more code...it's hump day");
        break;
    case "Thu":
        console.log("write a fearure for our app on thursday");
        break;
    case "Fri":
        console.log("test our feature on feature friday");
        break;
    case "Sat":
        console.log("sleep all day, it's SATURDAY");
        break;
}


//an object is basically a python dictionary

let person = {
    name:"John",
    age:28,
    fav_color:"Red",
}

console.log(person)  //prints the keys and values in a dictionary
console.log(person.fav_color) //OR
console.log(person['fav_color'])
//dot notation is easier, but brackets can use OTHER variables as assigned
key = "fav_color"
console.log(person[key])

let person2 = {
    name: "Max",
    age:31,
    prog_languages:['JavaScript','Python','C++', 'Java'],
    fav_color: "Blue",
    teams:[ //an array of 2 objects
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball:['Chicago Bulls','Chicago Sky'],
            soccer:['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball:'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United','Liverpool']
        }
    ]
}
/*
print Blue
c++
LA Rams
Chicago Fire
*/
console.log(person2.fav_color)
console.log(person2.prog_languages[2])
console.log(person2.teams[1]["football"])
console.log(person2.teams[0].soccer[0])


console.log(Object.keys(person2))
console.log(Object.values(person2))

//loop through an object ..the old and ugly way.
for (let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i]) //gives us the keys
    console.log(person2[Object.keys(person2)[i]])  //hard to follow
}

//for / in loop IS NOT THE SAME AS PYTHON
//for/in loops through keys  in dictionary
for (let key in person2){
    console.log(key)
    console.log(person2[key])
}

//list the top-level values from the person2 object
//that are arrays: prog_languages and teams
for (let key in person2){
    if (Array.isArray(person2[key])){
        console.log(person2[key])
    }
}