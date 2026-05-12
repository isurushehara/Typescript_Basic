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