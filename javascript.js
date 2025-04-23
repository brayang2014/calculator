let add = (x,y) => x+y;
let subtract = (x,y) => x-y;
let multiply = (x,y) => x*y;
let divide = (x,y) => x/y;

let x = null;
let op = "";
let y = null;

let operation = (x,op,y) =>{
    if(op === "+"){
        return add(x,y);
    }
    else if(op === "-"){
        return subtract(x,y);
    }
    else if(op === "*"){
        return multiply(x,y);
    }
    else if(op === "/"){
        return divide(x,y);
    }
}

let chara = document.querySelectorAll("button");
let display = document.querySelector(".display");

let displaynum = (event) => {
    const btn = event.target;
    const val = btn.textContent;
    
    if(val === "AC"){
        display.innerHTML = "";
        return;
    }
    
    display.textContent += val;

}

chara.forEach(btn =>
    btn.addEventListener("click",displaynum)
);


