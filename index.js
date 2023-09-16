"use strict";
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
{
    var userName = "Farhad Ahmad,";
    var greeting = "Hello " + userName;
    var asking = greeting + " would you like to learn typeScript today.?";
    console.log(asking);
}
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
{
    var personName = "farhad ahmad";
    console.log(personName.toLowerCase());
    console.log(personName.toUpperCase());
    // console.log(personName.titleCase())
}
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
{
    var FamousQoute = `Jhon Elia once said,"Neend aygi to iss qader soingy,humay jagany waly bh roengy"`;
    console.log(FamousQoute);
}
// amous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
{
    var authorName = "Jhon Elia once said,";
    var message = `"Jo guzari na jaski humse,humney woh zindagi guzaari hai"`;
    var result = authorName + message;
    console.log(result);
}
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
{
    {
        var a = 5;
        var b = 3;
        var addition = a + b;
        console.log("addition result " + addition);
    }
    {
        var a = 10;
        var b = 2;
        var subtraction = a - b;
        console.log("subtraction result " + subtraction);
    }
    {
        var a = 4;
        var b = 2;
        var multiplication = a * b;
        console.log("multiplication result " + multiplication);
    }
    {
        var a = 2;
        var b = 16;
        var division = b / a;
        console.log("division result " + division);
    }
}
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
{
    const favNum = 56;
    const message = `  My favorite number is: ${favNum}`;
    console.log(message);
}
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
{
    let friendsName = ["Waleed", "Ahmed", "Dawood", "Adil"];
    console.log(friendsName[0]);
    console.log(friendsName[1]);
    console.log(friendsName[2]);
    console.log(friendsName[3]);
}
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
{
    let name = "\t\Ahmed\n";
    console.log("Name with Whitespace " + name);
    let strippedName = name.trim();
    console.log("strippedName " + strippedName);
}
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
{
    console.log(4 + 4);
    console.log(2 + 2 + 4);
    console.log(4 * 2);
    console.log(6 + 2);
}
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
{
    let myFavCars = ["AudiRS8", "BWMi8", "NissanGTR", "EtronGT"];
    for (let myFavCar of myFavCars) {
        console.log(`i would love to own a ${myFavCar}`);
    }
}
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items. typescript
{
    let cities = [
        "Faisalabad",
        "Multan",
        "Lahore",
        "Islamabad",
        "Quetta"
    ];
    cities.forEach((FamousCities) => (console.log(`${FamousCities}`)));
}
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
{
    let myFavGames = [{
            Name: "Tekken 7",
            ReleaseDate: 2017,
            RankedInEsports: true,
        },
        { Name: "Gta 5",
            ReleaseDate: 2013,
            RankedInEsports: true,
        },
        { Name: "PUBG",
            ReleaseDate: 2018,
            RankedInEsports: true,
        }
    ];
    console.log("List of my FavGames");
    myFavGames.forEach((games) => {
        console.log(games);
    });
}
//   Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
{
    let num1 = 32;
    console.log("is num1 == 32.? , i predict its true");
    console.log(num1 == 32);
    let num2 = 21;
    console.log("is num2 == 21.? , i predict its true");
    console.log(num2 == 21);
    let num3 = 4;
    console.log("is num3 == 3.? , i predict its false");
    console.log(num3 == 3);
    let car = "Honda";
    console.log("is car == `honda` , i predict its true");
    console.log(car == "Honda");
    let car2 = "tesla";
    console.log("is car2 == `teslw` , i predict its false");
    console.log(car2 == "teslw");
    let item = "egg";
    console.log(`is item =="egg".? i predict its true`);
    console.log(item == "egg");
    let item2 = "Biscuits";
    console.log(`is item2 == "Biscits" i predict its false`);
    console.log(item2 == "biscits");
    let item3 = "Drinks";
    console.log(`is item3=="drnk" i predict its false`);
    console.log(item3 == "drnk");
    let item4 = "Drinks";
    console.log(`is item4=="Drinks" i predict its true`);
    console.log(item4 == "Drinks");
    let item5 = "Books";
    console.log(`is item5=="bookes" i predict its false`);
    console.log(item5 == "bookes");
}
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
{
    var alien_color = "green";
    if (alien_color == "green") {
        console.log("the player just earned 5 points");
    }
    {
        var alien_color = "red";
        if (alien_color == "green") {
            console.log("the player just earned 5 points");
        }
    }
}
// // Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
{
    var alien_color = "green";
    if (alien_color == "green") {
        console.log("you earned 5 points");
    }
    else {
        console.log("You earned 10 points");
    }
    {
        var alien_color = "red";
        if (alien_color == "green") {
            console.log("you earned 5 points");
        }
        else {
            console.log("You earned 10 points");
        }
    }
}
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
{
    var alien_color = "green";
    if (alien_color == "green") {
        console.log("You earned 5 points");
    }
    else if (alien_color == "yellow") {
        console.log("you earned 10 points");
    }
    else if (alien_color == "red") {
        console.log("You earned 15 points");
    }
    ;
    {
        var alien_color = "yellow";
        if (alien_color == "green") {
            console.log("You earned 5 points");
        }
        else if (alien_color == "yellow") {
            console.log("you earned 10 points");
        }
        else if (alien_color == "red") {
            console.log("You earned 15 points");
        }
    }
    ;
    {
        var alien_color = "red";
        if (alien_color == "green") {
            console.log("You earned 5 points");
        }
        else if (alien_color == "yellow") {
            console.log("you earned 10 points");
        }
        else if (alien_color == "red") {
            console.log("You earned 15 points");
        }
    }
    ;
}
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
{
    let personAge = 20;
    if (personAge == 2 && personAge < 4) {
        console.log("person is a toddler");
    }
    else if (personAge == 4 && personAge < 13) {
        console.log("person is a kid");
    }
    else if (personAge == 13 && personAge < 20) {
        console.log("the person is a teenager");
    }
    else if (personAge == 20 && personAge < 65) {
        console.log("the person is an adult");
    }
    else {
        console.log("person is elder");
    }
}
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
{
    let favorite_fruits = ["Apples", "Mangoes", "Peach"];
    if (favorite_fruits.includes("Apples")) {
        console.log("I really like Apples");
    }
    if (favorite_fruits.includes("Bananas")) {
        console.log("I really like Bananas");
    }
    if (favorite_fruits.includes("Watermelon")) {
        console.log("I really like Watermelon");
    }
    if (favorite_fruits.includes("Peach")) {
        console.log("I really like Peach");
    }
    if (favorite_fruits.includes("Mangoes")) {
        console.log("I really like Mangoes");
    }
}
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
{
    let userNames = ["Admin", "MeerHadi", "M.Rizwan", "DaniyalRJ", "Waleed"];
    for (let userName of userNames) {
        if (userName == "Admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${userName} ThankYou for logging in again`);
        }
    }
}
