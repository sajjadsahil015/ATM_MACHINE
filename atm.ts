#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;
console.log("Total balance in your account is: " + myBalance);

let pinAns = await inquirer.prompt({
  name: "pinNumber",
  type: "number",
  message: "Enter Your Pin: ",
});

if (pinAns.pinNumber === myPin) {
  console.log("Your pin is correct!!!");

  let operationAns = await inquirer.prompt({
    name: "operations",
    type: "list",
    message: "Please select option",
    choices: ["Withdraw", "Check Balance"],
  });

  if (operationAns.operations === "Withdraw") {
    console.log("You want to withdraw?");

    let amountAns = await inquirer.prompt({
      name: "amount",
      type: "list",
      message: "Please select amount!",
      choices: ["1000", "5000", "10000", "Other Amount"],
    });
    if (amountAns.amount === "1000") {
      myBalance -= 1000;
      console.log(`Your remaining balance is: ${myBalance}`);
    } else if (amountAns.amount === "5000") {
      myBalance -= 5000;
      console.log(`Your remaining balance is: ${myBalance}`);
    } else if (amountAns.amount === "10000") {
      myBalance -= 10000;

      console.log(`Your remaining balance is: ${myBalance}`);
    } else if (amountAns.amount === "Other Amount") {
      let otherAmount = await inquirer.prompt({
        name: "manualAmount",
        type: "number",
        message: "Enter the amount: ",
      });
      if (otherAmount.manualAmount <= myBalance) {
        myBalance -= otherAmount.manualAmount;
        console.log(`Your remaining balance is: ${myBalance}`);
      } else if (otherAmount.manualAmount > myBalance) {
        console.log("Insufficient Amount");
      }
    }
  } else if (operationAns.operations === "Check Balance") {
    console.log("Your Current Balance Is: " + myBalance);
  }
} else {
  console.log("Invalid pin");
}
