#! usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt(

  [
   
    { 
    message:"enter a Number",
    type:"number",
    name:"firstnumber",
    },

    {
        message: "enter a 2nd Number",
        type:"number",
        name:"secondNumber",
    },

    {
        message:"select operator ",
        type:"list",
        name:"operator",
        choices:["addition" , "substraction", "multiplication","division","module"],
    },

  ]
    
      );

if(answer.operator === "addition"){
    console.log("your answer is " , answer.firstnumber + answer.secondNumber );
}else if(answer.operator === "substraction"){
    console.log("your answer is " , answer.firstnumber - answer.secondNumber );
}else if(answer.operator === "multiplication"){
    console.log("your answer is " , answer.firstnumber * answer.secondNumber );
}else if(answer.operator === "division"){
    console.log("your answer is " , answer.firstnumber / answer.secondNumber );
}else if(answer.operator === "module"){
    console.log("your answer is " , answer.firstnumber % answer.secondNumber );
} else{
    console.log("invalid");
};