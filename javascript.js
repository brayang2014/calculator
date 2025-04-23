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
    else if(op === "x"){
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
        x = null; op = ""; y = null;
        return;
    }

    if(["/","x","-","+"].includes(val)){
        x = parseInt(display.textContent);
        op = val;
        display.textContent = "";
        return;
    }

    if(val === "="){
        if(op && display.textContent !== ""){
            y = parseInt(display.textContent);
            if(op === "/" && y===0){
                display.textContent = "ERROR!";
                return;
            }
            else{
            const result = operation(x,op,y);
            display.textContent = result;
            x = result;
            op = "";
            y = null;
            }
        }
        return;
    }

    display.textContent += val;

}

chara.forEach(btn =>
    btn.addEventListener("click",displaynum)
);

