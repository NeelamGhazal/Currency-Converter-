import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";

async function convertCurrency() {
console.log(chalk.rgb( 0, 255, 188 ).bold("\t <<<=================================>>>"));
console.log(chalk.rgb( 0, 255, 188 ).bold("\t      Welcome to Currency Convertor"));
console.log(chalk.rgb( 0, 255, 188 ).bold("\t <<<=================================>>>\n"));
                                      
// List of currencies and their exchange rates.
let exchange_rate: any = {
    USD: 1, // BASE CURRENCY // US dollar
    EUR: 0.94, // European Euro
    GPB: 0.80, // British Pound
    INR: 83.66, // Indian Rupee
    PKR: 278.16, // Pakistani Rupee
    //Add more currencies and their exchange rates
    JPY: 154.61, // Japanese Yen
    CAD: 1.38, // Canadian Dollar
    AUD: 1.56, // Australian Dollar
    CNY: 7.24, // Chinese Yuan Renminbi 
};
    
// Prompt the user to select currencies to convert from and to
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: (chalk.cyanBright("Select the currency to convert from")),
        choices: ["USD", "EUR" , "GBP" , "INR" , "PKR" , "JPY" , "CAD" , "AUD" , "CNY" ]
    },
    {
        name: "to_currency",
        type: "list",
        message: (chalk.cyanBright("Select the currency to convert into:")),
        choices: ["USD", "EUR" , "GBP" , "INR" , "PKR" , "JPY" , "CAD" , "AUD" , "CNY" ]
    },
    {
        name: "amount",
        type: "input",
        message: (chalk.cyanBright("Enter the amount to convert:")),
        validate: function (value){
            if (value === ""){
                return "Please enter an amount.";
            }
            return true;
        }
    }
]);
// Perform currency conversion by using Formula
let fromAmount = exchange_rate [userAnswer.from_currency];
let toAmount = exchange_rate [userAnswer.to_currency];
let amount = userAnswer.amount

// Formula of conversion
let baseAmount = amount / fromAmount
let convertedAmount =  baseAmount * toAmount

// Show the converted amount
console.log(chalk.rgb( 255, 74,74)(`\n Converted Amount = ${chalk.rgb( 0, 255, 119).bold(convertedAmount.toFixed(2))}`));

// Prompt to continue or exit
let continueAnswer = await inquirer.prompt([
    {
        name: "continue",
        type: "confirm",
        message: "Do you want to perform another conversion?",
        default: true
    }
]);
return continueAnswer.continue;
}

//Main function to run the conversion
async function main() {
        let continueConversion = true;
        while (continueConversion) { 
            continueConversion = await convertCurrency();
        }
        console.log(chalk.rgb( 0, 255, 188 ).bold("\n \t <<<======= Thank you for using the app. Goodbye! =======>>>"));
}
main();
