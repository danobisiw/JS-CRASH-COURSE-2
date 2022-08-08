//LOGICAL OPERATORS
// let num1 =10;
// let num2=20;
// let num3="10";
// let word1 ="Hello";
// let word2 = "hello";

// console.log(num1 < num2);
// console.log(num1> num2);
// console.log(num1 <= num2);
// console.log(num1 <= num2);

// console.log(!true);
// console.log(!false);
// console.log(num1 == num3)//equality check
// console.log(word1 === word2);
// console.log(word1 !``== word2);

//CONTROL FLOW
let item="Gino";
if(item === "Annapurna"){
    console.log("Buy Annapurna")
}else if(item==="U2"){
    console.log("Buy U2")
}else if(item==="A1"){
    console.log("Buy A1")
}else{
    console.log("Buy Rocky Salt")
}

//Grading System

let score=80

if(score >= 0 && score <=100){
    if(score>=90){
    console.log("Excellent");

}else if(score >=80){
    console.log("Very Good")

}else if(score >=70){
    console.log("Good")

}else if(score >=60){
    console.log("Average")
}

else if(score >=50){
    console.log("Credit")
}
else if(score>= 40){
    console.log("Pass")

}else if(score >=0){
    console.log("Fail")
}
else{
    console.log("Please a valid Score")
}
}

// //FUNCTION
function sum(a, b=0){
    let total=(a+b);
    return total;
// // console.log(a+b)
}
let eleven =sum(5,7);
let  fifteeen =sum(7,8);
let nineteen=sum(9,10);

function multiply(a,b=0){
    let total=(a*b);
    return total;
};
let product =multiply(5)
console.log(product)

// LOOPS
for(let i=1;i <= 10; i++){
    console.log(i + " I will not talk in class again");
}

// //WHILE LOOP
let num =1
while(num <= 10){
    console.log(num)

    num =num +1;
}

//DO WHILE LOOP
let age = 1;
do{
    console.log(age + ' You cant vote');
    age ++;
}while(age <18);

// ARRAY METHODS

let ages =[19,26,25,30,35,44, 18];
for(let age of ages){
    console.log(age)

    console.log(Math.pow(age,2))
}

let marriage = ages.filter(num =>num >25)
    console.log (marriage);


// //MAP
let squares =ages.map((age)=> age*age);
console.log(squares)

// FIND
let eighteen = ages.find(age => age === 18);
console.log(eighteen);
