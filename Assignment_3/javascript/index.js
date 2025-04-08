// No1
// making a varible of my details
const firstName = "Ajah"
const lastName = "Godwin"
const age = 29
const nationality = "Nigeria"

 console.log(`My name is ${firstName} ${lastName}, I am ${age} years old. My Nationality is ${nationality}`);
// This code above shows a constant variable,that contain my detiles. which is consoleloged with bactick.


// NO2
// writing my favority quto
let favoriteQuote = "Believe you can and you're halfway there"
// making the quto to display in uppercase
let result = favoriteQuote.toUpperCase()
console.log(result);
// making the quto to display in lowercase
result = favoriteQuote.toLowerCase()
console.log(result);


// NO3
// taking a word to rearrange it in a reverse order
const rearrangeWord = "Arrangeed"
const reversedWord =rearrangeWord.split('').reverse().join('')
console.log(reversedWord);


// NO4
// varible of price of 3 iteam
const priceA = 2000
const priceB = 10000
const priceC = 30000

// getting the total price of iteam
const totalPrice = priceA + priceB + priceC

console.log(`The total price of the 3 items is ${totalPrice}`);
// This code explains the price of 3 items in 3 different variables. Calculate the total and display it with a message.


// NO5
// sores from 1 to 5
const score1 = 5
const score2 = 20
const score3 = 50
const score4 = 70
const score5 = 100

// adding the all scores together
const totalScore = score1 + score2 + score3 + score4 + score5
// to get the avarge score, divide the total by 5
const avarageScore = totalScore / 5
console.log(`The average of 5 test scores stored in variables is ${avarageScore}`);



// NO6
// array of my favorite food
const favoriteFood = ["rice", "yam", "beans", "garri", "paster"]
// displaying the first and the last iteam
console.log(`my favorite food is ${favoriteFood[0]} amd ${favoriteFood[favoriteFood.length -1]}`);


// NO7
// adding ittheem at the end of the array
const itemAtEnd = favoriteFood.push("moimoi")
console.log(favoriteFood);

// adding item at the beginning of the array
const itemAtBeginning = favoriteFood.unshift("shawama")
console.log(favoriteFood);


// NO8
// creating array on each of the following
// Array for JSS One students
const jssOne = [
    "Michael", "Daivd","Chichi","Bekky", "Denis",
    "Mike", "Sammy", "Matthew", "Emma", "Emmy"
]
console.log(jssOne);

// NO9
// Array for JSS Two students
const jssTwo = [
    "Ojir", "Ajah", "Ndubuisi", "Matter", "Diskson",
    "Victor", "Bunja","Samson", "Victoria", "Tina"
]
console.log(jssTwo);

// NO10
// Array for JSS Three students
const jssThree = [
    "Biggy", "Dan", "Loveth","Gift","Benitha",
    "Spensa", "Bright", "Light", "Maria", "Mary"
]
console.log(jssThree);


