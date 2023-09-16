// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
{
var userName:string = "Farhad Ahmad,";
var greeting:string = "Hello "+userName;
var asking:string = greeting+" would you like to learn typeScript today.?"

console.log(asking)
}
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
{
var personName:string =  "farhad ahmad"
console.log(personName.toLowerCase())
console.log(personName.toUpperCase())
// console.log(personName.titleCase())

}


// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

{
    var FamousQoute:string = `Jhon Elia once said,"Neend aygi to iss qader soingy,humay jagany waly bh roengy"`
    console.log(FamousQoute)
   

}

// amous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
{
var authorName:string = "Jhon Elia once said,";
var message:string = `"Jo guzari na jaski humse,humney woh zindagi guzaari hai"`;
var result:string = authorName+message;

console.log(result)
}

// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
{{
var a:number = 5;
var b:number = 3;

var addition:number = a+b;
console.log("addition result "+addition)
}
{
    var a:number = 10;
    var b:number = 2;
    var subtraction:number = a-b;
    console.log("subtraction result "+subtraction)
}
{
    var a:number = 4;
    var b:number = 2;
    var multiplication:number = a*b;
    console.log("multiplication result "+multiplication)
}
{
    var a:number = 2;
    var b:number = 16;

    var division:number = b/a;
    console.log("division result "+division)

}
    

}

// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.


{
    const favNum:number = 56;
    const message:string = `  My favorite number is: ${favNum}`;
    console.log(message)

}

// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
{
let friendsName:string [] = ["Waleed","Ahmed","Dawood","Adil"]

console.log(friendsName[0])
console.log(friendsName[1])
console.log(friendsName[2])
console.log(friendsName[3])
}

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

{
    let name:string = "\t\Ahmed\n";
    console.log("Name with Whitespace "+name);
    let strippedName = name.trim();
    console.log("strippedName "+strippedName);
}
// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.

{
    console.log(4+4);
    console.log(2+2+4);
    console.log(4*2);
    console.log(6+2);
}

// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

{
let myFavCars:string [] = ["AudiRS8" , "BWMi8" , "NissanGTR" , "EtronGT"];
 for(let  myFavCar of myFavCars){

    console.log(`i would love to own a ${myFavCar}`)
 }


}



// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items. typescript

{
 let cities:string [] = [
    "Faisalabad",
    "Multan",
    "Lahore",
    "Islamabad",
    "Quetta"
 ]

 cities.forEach((FamousCities)=>(console.log(`${FamousCities}`)))
}


// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
  {
  type mytype ={Name:string, ReleaseDate:number , RankedInEsports:boolean};

  let myFavGames:mytype[] = [{ 
    Name: "Tekken 7",
    ReleaseDate: 2017,
    RankedInEsports: true,
  },
  {Name: "Gta 5",
  ReleaseDate: 2013,
  RankedInEsports: true,
},
{Name: "PUBG",
ReleaseDate: 2018,
RankedInEsports: true,
}

]
  console.log("List of my FavGames");
  myFavGames.forEach((games)=>{
   
    console.log(games);
  })


  } 

//   Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


{
    
    let  num1:number = 32;
    console.log("is num1 == 32.? , i predict its true");
    console.log(num1 == 32);

    let num2:number = 21;
    console.log("is num2 == 21.? , i predict its true");
    console.log(num2 == 21);

    let num3:number = 4;
    console.log("is num3 == 3.? , i predict its false");
    console.log(num3==3); 


    let car:string = "Honda";
    console.log("is car == `honda` , i predict its true");
    console.log(car == "Honda");

    let car2:string = "tesla";
    console.log("is car2 == `teslw` , i predict its false");
    console.log(car2 == "teslw");
    
    let item:string = "egg";
    console.log(`is item =="egg".? i predict its true`);
    console.log(item=="egg");

    let item2:string = "Biscuits";
    console.log(`is item2 == "Biscits" i predict its false`);
    console.log(item2=="biscits");

    let item3:string = "Drinks";
    console.log(`is item3=="drnk" i predict its false`);
    console.log(item3=="drnk");

    let item4:string = "Drinks";
    console.log(`is item4=="Drinks" i predict its true`);
    console.log(item4=="Drinks");

    let item5:string = "Books";
    console.log(`is item5=="bookes" i predict its false`);
    console.log(item5=="bookes");







}



// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)


{
  var alien_color:string = "green";
  if( alien_color == "green"){
    console.log("the player just earned 5 points")
  }

  {
    var alien_color:string = "red";
    if( alien_color == "green"){
      console.log("the player just earned 5 points")
  }

  }
}

// // Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.



{
  var alien_color:string = "green";
  if(alien_color=="green"){
    console.log("you earned 5 points")
  }else{console.log("You earned 10 points")

}
{
  var alien_color:string = "red";
  if(alien_color=="green"){
    console.log("you earned 5 points")
  }else{console.log("You earned 10 points")

}

}
}

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


{
  var alien_color:string = "green";
  if(alien_color=="green")
  {console.log("You earned 5 points")
}
  else if(alien_color=="yellow")
  {console.log("you earned 10 points")
}
 else if(alien_color=="red")
 {console.log("You earned 15 points")};

 {
  var alien_color:string = "yellow";
  if(alien_color=="green")
  {console.log("You earned 5 points")
}
  else if(alien_color=="yellow")
  {console.log("you earned 10 points")
}
 else if(alien_color=="red")
 {console.log("You earned 15 points")}
};


{
  var alien_color:string = "red";
  if(alien_color=="green")
  {console.log("You earned 5 points")
}
  else if(alien_color=="yellow")
  {console.log("you earned 10 points")
}
 else if(alien_color=="red")
 {console.log("You earned 15 points")}
};


}



// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

{

let personAge:number = 20;

if(personAge==2 && personAge<4){
  console.log("person is a toddler")
}
else if(personAge==4 && personAge<13){
  console.log("person is a kid")
}
else if(personAge==13 && personAge<20){
  console.log("the person is a teenager")
}
else if(personAge==20 && personAge<65){
  console.log("the person is an adult")
}
else{
  console.log("person is elder")
}

}


// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

{
let favorite_fruits:string[] = ["Apples","Mangoes","Peach"];

if(favorite_fruits.includes("Apples")){
  console.log("I really like Apples");
}

if(favorite_fruits.includes("Bananas")){
  console.log("I really like Bananas");
}

if(favorite_fruits.includes("Watermelon")){
  console.log("I really like Watermelon");
}

if(favorite_fruits.includes("Peach")){
  console.log("I really like Peach");
}

if(favorite_fruits.includes("Mangoes")){
  console.log("I really like Mangoes");
}

}






// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

{
  let userNames:string [] = ["Admin","MeerHadi","M.Rizwan","DaniyalRJ","Waleed"];
  for( let userName of userNames){
    if(userName=="Admin"){
      console.log("Hello admin, would you like to see a status report?")

    }else{console.log(`Hello ${userName} ThankYou for logging in again`)}

  }

}



// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// // • Remove all of the usernames from your array, and make sure the correct message is printed.
   

    //  exercise 28
{

  let personAge:number = 20;

  if(personAge<0){
    console.log("We need to find some user")
  }
  
  if(personAge==2 && personAge<4){
    console.log("person is a toddler")
  }
  else if(personAge==4 && personAge<13){
    console.log("person is a kid")
  }
  else if(personAge==13 && personAge<20){
    console.log("the person is a teenager")
  }
  else if(personAge==20 && personAge<65){
    console.log("the person is an adult")
  }
  else{
    console.log("person is elder")
  }
  
  }


//   Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted

{


let currentUsers: string[] = ["Hadi", "Fatima", "Dawood", "Ayesha", "Waleed"];

let newUsers: string[] = ["Hadi", "Qamar", "Ali", "Sadia", "Waleed"];

function isUsernameTaken(username: string): boolean {
    return currentUsers.some(user => user.toLowerCase() === username.toLowerCase());
}

for (let newUser of newUsers) {
    if (isUsernameTaken(newUser)) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }
}

}
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
{
  let numbers2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers2) {
    let ordinal: string;

    if (number === 1) {
        ordinal = "1st";
    } else if (number === 2) {
        ordinal = "2nd";
    } else if (number === 3) {
        ordinal = "3rd";
    } else {
        ordinal = `${number}th`;
    }

    console.log(ordinal);
}
}



// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


{

let favPizzas: string[] = ["ExtraCheese", "Fagita", "BBQ"];

console.log("My favorite pizzas:");
for (let pizza of favPizzas) {
    console.log(pizza);
}

console.log("\nMy thoughts on each pizza:");
for (let pizza of favPizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("\nI really love pizza!");



}



// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
{
let animals: string[] = ["Parrot", "Cat", "Dog"];

console.log("Common characteristic: They are all mammals.");
console.log("Names of animals:");
for (let animal of animals) {
    console.log(animal);
}

console.log("Statements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals will be good pet!");
}


// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
{
function makeShirt(size: string, message: string): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}


makeShirt("Medium", "supreme");  


 

}

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


{
  function makeShirts(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}

makeShirts();

makeShirts("Medium");

makeShirts("Small", "Old Skool");

}


// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
{
function describeCity(city: string, country: string = "Unknown") {
    console.log(`${city} is in ${country}.`);
}

describeCity("Faisalabad", "Pakistan");
describeCity("Sydney", "Australia");
describeCity("Seoul"); 

}

// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.


{

function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

const location1 = cityCountry("Lahore", "Pakistan");
const location2 = cityCountry("Mumbai", "India");
const location3 = cityCountry("sharjah", "UAE");

console.log(location1);
console.log(location2);
console.log(location3);


}




// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
{

function showMagicians1(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicianNames: string[] = ["Harry Potter", "Geralt", "Aib Ken"];

showMagicians1(magicianNames);

}

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
{

interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; 
  }
  
  function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): Car {
    const car: Car = {
      manufacturer,
      modelName,
    };
  
    for (const [key, value] of options) {
      car[key] = value;
    }
  
    return car;
  }
  
  const myCar = createCar("Mercedese", "Honda", ["color", "black"], ["year", 2024]);



  
  console.log(myCar);
  
}


