#! /usr/bin/env node
import inquirer from "inquirer";



const randomNumber=Math.floor(Math.random()*10+1);
console.log("           ----WELCOME TO NUMBER GUESSING GAME----\n");

const answer=await inquirer.prompt([{
    name:"UserGuessedNumber",
    type:"number",
    message:"Please guess a number between 1 to 10",
},
]);

if(answer.UserGuessedNumber===randomNumber)
    {
        console.log("CONGRATULATIONS! YOU GUESSED IT RIGHT");
        console.log("Thanks for playing!");
    }
else {
    console.log("WRONG GUESS! TRY AGAIN");
}