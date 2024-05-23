#! /usr/bin/env node

import inquirer from "inquirer";

let mybal = 11000;
let myPin = 5211;

console.log ("Welcome to ATM Machine");

let PinAns = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: "Enter Your Pin code:"
        
    }
])

if (PinAns.Pin === myPin){
    console.log("Login Successfully!")

let OperationAns = await inquirer.prompt([
    {
        name: "Operation",
        type: "list",
        message:"Select an Operation",
        choices: ["Withdraw", "Balance Inquiry"]

    }
])
if(OperationAns.Operation === "Withdraw"){
    let AmountAns = await inquirer.prompt([
        {
            name: "Amount",
            type: "number",
            message: "Enter Your Amount:"
        }
    ])
    if(AmountAns.Amount > mybal){
        console.log("Insufficient Balance");

    }
    else{
        mybal-=AmountAns.Amount;
        console.log(`${AmountAns.Amount} Withdrawn successfully`)
        console.log(`Your Current Balance is: ${mybal}`)
    }
}
else if (OperationAns.Operation === "Balance Inquiry"){
    console.log(`Your Current Balance is: ${mybal}`)

}


}
else {
    console.log("Your Pin is incorrect");
}
