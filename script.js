var myName = "Oluwatobi";

console.log(myName);

var favoriteFoods = ["rice", "beans", "dodo", "eba", "pasta"];
console.log(favoriteFoods)
console.log(favoriteFoods[1])
favoriteFoods[4] = "yam";
console.log(favoriteFoods)
favoriteFoods.shift()
console.log(favoriteFoods)
favoriteFoods[4] = "amala";
console.log(favoriteFoods)
favoriteFoods.unshift("pizza")
console.log(favoriteFoods)
 

var empty = [];
empty.pop()
console.log(empty)

var arr = [];

arr.unshift("Oluwatobi")
console.log(arr)

arr.push("Akangbe")
console.log(arr)

arr.unshift("green")
console.log(arr)

arr.shift()
console.log(arr)

var arr2 = []
console.log(arr2)

arr2.push(3)
console.log(arr2)

arr2.push("JavaScript")
console.log(arr2)

arr2.indexOf(3);
console.log(arr2)

var combinedArr = arr.concat(arr2)
console.log(combinedArr)

let arr3 = ["JavaScript","Python","Ruby","Java"];
console.log(arr3)

console.log(arr3.splice(1,2));
console.log(arr3)

for (let i = 0; i < 10; i+=3) {console.log(i);}

let decimals = [1.1, 1.6, 2.8, 0.4, 3.5, 1.6];


// ARRAYS ITERATION EXERCISES


let people = ["Greg", "Mary", "Devon", "James"];

for (let i=0; i < people.length; i++) {console.log(people);}

people.shift()
console.log(people)

people.pop()
console.log(people)

people.unshift("Matt")
console.log(people)

people.push("Jedah")
console.log(people)

for (let i=0; i < people.length; i++) {if(i > 1) {break;} console.log(people[i])}

console.log(people.slice(1,4))

console.log(people.slice(2))

console.log(people.indexOf("Mary"))

console.log(people.indexOf("Foo"))

let peoples = ["Greg", "Mary", "Devon", "James"];
console.log(peoples)

console.log(peoples.splice(2,1, "Elizabeth", "Artie"))
console.log(peoples)

let withbob = people.concat("Bob");









// OBJECTS EXERCISES


let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

console.log(namesAndHobbies.elie);

for(let key in namesAndHobbies){
    console.log(`${namesAndHobbies[key]} => ${key}`)
}



let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};




// number 1
programming.languages.push("Go");
console.log(programming.languages)

// number 2
programming.difficulty = 7  
console.log(programming)

// number 3
delete programming.jokes;
console.log(programming)

// number 4
programming.isFun = true
console.log(programming)

// number 5
for (let i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);}

// number 6
for (let key in programming) {
    console.log(key);
}

// number 7
for (let key in programming) {
    console.log(programming[key]);
}