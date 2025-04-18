// Write a function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed". (JAMB-style)

const score = function (student){

    if (student >= 180) {
       console.log("Passed");
    }else{
        console.log("Failed");  
    }
}
score(179)

// Write a function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible"

const age = function(eligiblity){
    if (eligiblity >= 18){
        console.log("You are eligible to vote");   
    }else{
        console.log('Not eligible');
    }
}
age(4)

// Write a function that takes a name and score, then returns:
// "Excellent" if score >= 90
// "Good" if score >= 75
// "Average" if score >= 50
// "Fail" otherwise

const grading = function (name= "", score=0){

    if(score >= 90){
        console.log(`${name}: Excellen`);   
    }else if (score >= 75){
        console.log(`${name}: Good`);
    }else if (score >= 50){
        console.log(`${name}: Average`);
    }else{
        console.log(`${name}: Faild`);  
    }

}
grading('son', 40)

// Write a function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.

const values = function (hasID, isAbove18){
    if(hasID && isAbove18){
        console.log('Access granted');
    }else{
        console.log('Access denied');
    }
}
values(false,true)

//  Use a for loop to go through an array of student scores. For each score, print "Pass" if it’s above 50 or "Fail" if it’s 50 or below

const studentScore = [30,40,50,60,70,80,90]

for(let i = 0; i < studentScore.length; i++){
    if (studentScore[i] > 50){
        console.log('Pass');
    }else{
        console.log('Fail');
    }
}


//  Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".

const studentResult = (Math, English)=>{

    if (Math >= 50  && English >= 50){
        console.log('Yes');
    }else{
        console.log('No');
    }
} 
studentResult(400, 60)
 
// Creat'\e a function that checks if a user has either an email or a phone number before signing up.


const checkUser = (user) =>{
    
    if (user.email || user.phone){
        return " Email and Phone number confirm"
    }else{
        return "Email and Phone number not comfirm, sign up"
    }

}
console.log(checkUser({email:"godwin@gmail.com", phone: "09038278446"}));

// Write a function that takes username and password. If either one is empty, return "Invalid input" using the || operator.

const userPassword = (userName)=>{
    if (userName.userName || userName.password){
         return "valid user"
    }else{
        return "invalid user"
    }
       
}
console.log(userPassword ({userName: "Godwin", password: "35535131"}));

// Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.

const workHour = (hourly) =>{
    const workTime = hourly >= 40? 
    console.log('fulltime'):
    console.log('part-time');
}
workHour(30)

// Write an arrow function that takes two numbers and returns the larger one


const numberFun = (a, b)=>{
    return Math.max(a, b)

}
console.log(numberFun(20, 155));