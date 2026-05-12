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

// any & unknown data type
let anyVariable: any = 4;
anyVariable = "a";
anyVariable.toUpperCase();

let unknownVariable: unknown = 4;
unknownVariable = "a";
//unknownVariable.toUpperCase();  <== 'unknownVariable' is of type 'unknown'.
if (typeof unknownVariable === "string") {
    unknownVariable.toUpperCase();
}
// or
(unknownVariable as string).toUpperCase(); // Type accession
unknownVariable = +"10"; // Type casting (this convert to number)

//Custom Types
type stringORnumber = string | number;
let userInput: stringORnumber = 10;

// readonly Modifier
type Person = {
    name: string;
    age: number;
    readonly isAgree: boolean;
}

let isuru: Person = {
    name: "Isuru",
    age: 23,
    isAgree: true
}

isuru.age = 24;
// isuru.isAgree = false; <== Cannot assign to 'isAgree' because it is a read-only property.

// optional Modifier
type Book = {
    name: string;
    year: number;
    fontsize?: number;
};

let book_1 = {
    name: "Book 01",
    year: 2010,
};

// Literal Types
let direction: "North" | "West" | "East" | "South";
direction = "North";
// direction = "Isuru"; <== Type '"Isuru"' is not assignable to type '"North" | "West" | "East" | "South"'.


// Intersection Types
type Point2D = {
    x: number
    y: number
}

type Point3D = Point2D & {
    z: number
}
