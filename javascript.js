const add = (x,y) => x+y;
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => x/y;


let result = null;

let operate = (num1, op, num2) => {
    if(op==='+'){
        result = add(num1,num2);
    }
    else if(op ==='-'){
        result = subtract(num1,num2);
    }
    else if(op ==='*'){
        result = multiply(num1,num2);
    }
    else if(op ==='/'){
        result = divide(num1,num2);
    }
    return result;
}