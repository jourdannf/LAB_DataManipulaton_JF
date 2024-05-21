//PART ONE: Math Problems

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

//Check all numbers are divisible by 5
//%5 is 0 should all equal 0 if the number is divisible by 5
const isDivisibleByFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;

//Check first number is larger than last
const firstLargerThanLast = n1 > n4;

//Arithmetic Chain
const arithmeticChain = ((n3 * (n2 - n1))%n4);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
// Rewrote this so the ! operator isn't included for isOver25
const isValid = isSum50 && isTwoOdd && isUnique || isOver25;

// Finally, log the results.
console.log("The four numbers are " + isValid + "according to the following critera: the sum equals 50, at least two of them are odd, they're all unique.");

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  let x = 10;


//PART TWO: Practical Math

//Setting up variables all if statements will use
const totalDistance = 1500;
const budget = 175;
const fuelPerGallon = 3;
let fuelEfficiency = 55;

//How much fuel, the budget, and how long I'll travel for at fuel efficiency 55 mph
if (fuelEfficiency === 55){
   let gallons = totalDistance/30;
    console.log("You will need " + gallons + " gallons of fuel.");

   let actualAmount = fuelPerGallon*gallons;
   if (actualAmount <= budget){
        console.log("The buget will cover travleing at 55 miles per hour");
   }else{
        console.log("The budget will not cover traveling at 55 miles per hour");
   }

   console.log("You will travel for " + totalDistance/fuelEfficiency + " hours.");
}

//Repeated the same logic for other fuel efficiencies
//Just replaced the numbers so that it'd match the prompt logically
fuelEfficiency = 60;
if (fuelEfficiency === 60){
    let gallons = totalDistance/28;
     console.log("You will need " + gallons + " gallons of fuel.");
 
    let actualAmount = fuelPerGallon*gallons;
    if (actualAmount <= budget){
         console.log("The buget will cover travleing at 55 miles per hour");
    }else{
         console.log("The budget will not cover traveling at 55 miles per hour");
    }
 
    console.log("You will travel for " + totalDistance/fuelEfficiency + " hours.");
 }

 fuelEfficiency = 75;
 if (fuelEfficiency === 75){
    let gallons = totalDistance/23;
     console.log("You will need " + gallons + " gallons of fuel.");
 
    let actualAmount = fuelPerGallon*gallons;
    if (actualAmount <= budget){
         console.log("The buget will cover travleing at 55 miles per hour");
    }else{
         console.log("The budget will not cover traveling at 55 miles per hour");
    }
 
    console.log("You will travel for " + totalDistance/fuelEfficiency + " hours.");
 }

 //Traveling at 60 mph makes the most sense for this trip.
 //as it will get you to your destination the fastest within
 //the realm of your budget.