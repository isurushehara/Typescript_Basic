/* function function_name(parameter_name_1: data_type_1, parameter_name_2: data_type_2): return_data_type {
    return value
}
*/

function add(a: number, b: number): number {
    return a + b;
}

// Non return
function printHello(message: string): void {
    console.log(message);
}

// Arrow Function
let addNumber = (a: number, b: number): number => {
    return a + b;
}

// Type Narrowing
function narrow(val: string | number) {
    if (typeof val === 'string') {
        val.toUpperCase();
    } else if (typeof val === 'number') {
        val.toFixed();
    } else {
        return val
    }

}


// Narrowing with Discrimination Union
type Circle = {
    type: "circle";
    radius: number;
}

type Square = {
    type: "square";
    width: number;
    height: number;
}

type Shape = Circle | Square

function setShape(val: Shape) {
    if (val.type === 'circle') {
        val.radius = 7;
    } else if (val.type === 'square') {
        val.width = 7;
        val.height = 7;
    } else {
        return val;
    }

}
