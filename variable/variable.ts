// let variableName: data_type = value;

// let name = "Isuru" <= In JavaScript
let name:string = "Isuru";
name = "Shehara";
// name = 3; <= Type 'number' is not assignable to type 'string'
console.log(name);

let age: number = 24;
let isPass: boolean = true;

// Other Type
let notYet: undefined = undefined;
let noneValue: null = null;

// Array
let numberArr: number[] = [1, 2, 3];
let nameArr: string[] = ["Isuru", "Shehara"]
let mixedArr: (string | number)[] = ["Isuru", 24]; // Union Type
let arrOfArr: number[][] = [    // Array of Array
    [1, 2, 3],
    [4, 5, 6]
];
let fixedArr: [string, number] = ["Isuru", 24] // Fixed Array/ Tupple

