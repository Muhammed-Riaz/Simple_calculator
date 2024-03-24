import inquirer from "inquirer";

const answer = await inquirer.prompt([{
    message:"Enter a Number",type:"number",name:"Number"},
    {message: "Enter a 2nd Number",type:"number",name:"SecondNumber"},
    {message:"Select operator ",
     type:"list",
     name:"operator",
     choices:["Addition" , "Substraction", "Multiplication","Division" ,"Percentage"]
    },
]);
if(answer.operator === "Addition"){
    console.log("your answer is " , answer.Number + answer.SecondNumber );
}else if(answer.operator === "Substraction"){
    console.log("your answer is " , answer.Number - answer.SecondNumber );
}else if(answer.operator === "Multiplication"){
    console.log("your answer is " , answer.Number * answer.SecondNumber );
}else if(answer.operator === "Division"){
    console.log("your answer is " , answer.Number / answer.SecondNumber );
}else {
    console.log("invalid")
}