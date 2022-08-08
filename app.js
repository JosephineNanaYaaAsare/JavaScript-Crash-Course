// LOGICAL OPERATORS

let num1 = 10;
let num2 = 20;
let num3 = "10"
let word1 ="Hello";
let word2 ="hello";

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 >=num2);
console.log(!true);
console.log(!false);
console.log(num1 == num3);
console.log(num1 ===num3); //equality check
console.log(word1 ===word2);
console.log(word1 !== word2);

//CONTROL FLOW
let item = "U2";
if (item === "Annapurna") {
console.log("Buy Annapurna");
} else if (item ==="U2") {
    console.log("Buy U2");
} else if (item ==="A1") {
    console.log("Buy A1");
}

// GRADING SYSTEM
let score =0;
if (score >= 0 && score <= 100){
    if (score>= 90) {
        console.log(" Excellent");
    } else if (score >=80) {
       console.log("Very Good");
    } else if (score >=70) {
       console.log("Good");
    } else if (score >=60) {
       console.log("Average");
    } else if (score >=50) {
      console.log("Credit");
   } else if (score >=40) {
     console.log("Pass");
   } else if (score >= 0) {
     console.log("Fail");
   } else {
      console.log("Please enter a valid score")
    }

}
// FUNCTION
function sum(a, b) {
  let total = a +b;
  return total;
}


function multiply(x, y) {
  let total = x * y;
  return total;

let eleven = sum(5, 7);
console.log(eleven);
let fifteen = sum(7, 8);
let nineteen  = sum(9, 10);
console.log(multipy(5, 6))
}



let thirty = multiply(5, 6);
let fiftySix= multiply(7, 8);
let ninety  = multiply(9, 10);
console.log((5, 6))

//LOOPS
for (let i = 1; i <= 100;i++) {
  console.log(i +". I will not talk in class again");
}

//WHILE LOOP
let num = 1;
while (num <= 10) {
  console.log(num);

  num = num + 1;
}

//DO...WHILE LOOP
let age = 18;
do {
  console.log(age + ". You can't vote");
  age++;
} while (age < 18);

//ARRAY METHODS
let ages = [18, 26, 24, 18, 22, 35, 30, 33, 31, 29, 18]

for (let age of ages) {
  console.log(Math.pow(age, 2));
}

//FILTER
let marriage =ages.filter((mark) => mark >25);
console.log(marriage);

//MAP
let squares = ages.map((age) => age === 18);
console.log(squares);

//FIND
let eighteen = ages.find((age) => age * age);
console.log(eighteen);