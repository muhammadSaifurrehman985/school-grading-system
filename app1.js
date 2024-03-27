import inquirer from "inquirer";
// Grade Calculator:
// Write a TypeScript function that takes a numerical grade
//  as input and returns the corresponding letter grade
//   (A, B, C, D, or F) based on the following criteria:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: Below 60
let grade = await inquirer.prompt([
    {
        name: "numbers",
        type: "number",
        message: " kindly write your grade number:",
    },
]);
if (grade.numbers >= 90 && grade.numbers <= 100) {
    console.log(`CONGRATULATIONS YOUR THIS GRADE NUMBER ${grade.numbers} BELONGS TO(A)`);
}
else if (grade.numbers >= 80 && grade.numbers <= 89) {
    console.log(`CONGRATULATIONS YOUR THIS GRADE NUMBER ${grade.numbers} BELONGS TO(B)`);
}
else if (grade.numbers >= 70 && grade.numbers <= 79) {
    console.log(`CONGRATULATIONS YOUR THIS GRADE NUMBER ${grade.numbers} BELONGS TO(C)`);
}
else if (grade.numbers >= 60 && grade.numbers <= 69) {
    console.log(`CONGRATULATIONS YOUR THIS GRADE NUMBER ${grade.numbers} BRLONGS TO GRADE(D)`);
}
else {
    console.log(`SORRY YOUR THIS GRADE GRADE ${grade.numbers} IS NOT AT PASSING MARKS`);
}
