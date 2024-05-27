#! /usr/bin/env node
import inquire from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.magenta("Welcome to Quiz"));
let marks = 0;
let startQuiz = await inquire.prompt([{
        name: "q1",
        type: "list",
        message: "How many elements are in the periodic table?",
        choices: [107, 118, 126]
    },
    {
        name: "q2",
        type: "list",
        message: "How many colors in national flag Pakistan?",
        choices: [2, 1, 6]
    }, {
        name: "q3",
        type: "list",
        message: "Where did sushi originate?",
        choices: ["China", "Japan", "Korea"]
    }, {
        name: "q4",
        type: "list",
        message: "What is Pakistan's official name?",
        choices: ["The Islamic Republic of Pakistan", "Pakistan", "Islam"]
    },
    {
        name: "q5",
        type: "list",
        message: "Which element is known as the building block of life?",
        choices: ["Carbon", "Hydrogen", "Oxygen"]
    }, {
        name: "q6",
        type: "list",
        message: "Which food item never spoils?",
        choices: ["Apple", "Honey", "Bean"]
    }, {
        name: "q7",
        type: "list",
        message: " Which is the fastest land animal?",
        choices: ["Cheetah", "Lion", "Wolf"]
    }
]);
let { q1, q2, q3, q4, q5, q6, q7 } = startQuiz;
if (q1 === 118)
    marks += 10;
if (q2 === 2)
    marks += 10;
if (q3 === "China")
    marks += 10;
if (q4 === "The Islamic Republic of Pakistan")
    marks += 10;
if (q5 === "Carbon")
    marks += 10;
if (q6 === "Honey")
    marks += 10;
if (q7 === "Cheetah")
    marks += 10;
function totalMarks() {
    if (marks == 70) {
        console.log(chalk.blue(`Congrulation you got full ${marks} marks!`));
    }
    else if (marks > 0) {
        console.log(chalk.blue(`You got ${marks} out of 70`));
    }
    else {
        console.log(chalk.red(`You are fail`));
    }
}
;
totalMarks();
