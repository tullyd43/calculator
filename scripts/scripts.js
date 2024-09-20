function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(a, oper, b) {
  if (oper === "+") return add(a, b);
  if (oper === "-") return subtract(a, b);
  if (oper === "*") return multiply(a, b);
  if (oper === "/") return divide(a, b);
}

let inputs = document.querySelectorAll(".numButtons");
let values = "";

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    values += input.textContent;
    let display = document.querySelector(".display");
    display.innerText = values;
  });
});

function reg(exp) {
  let split = exp.split(/(\+|\-|\*|\/)/).filter((s) => s);
  return split;
}

let results = document
  .querySelector(".result")
  .addEventListener("click", () => {
    let splitValues = reg(values);
    console.log(splitValues)
    if (splitValues.length < 3) {
      console.log("Not a correct expression");
    } else if (splitValues.length >= 3) {
      for (let index = 0; splitValues.length >= 3; index++) {
        if (splitValues[1] === "/" && splitValues[2] === "0") {
          console.log("cannot divide by zero")
          return
        } else if (splitValues[1] !== "/" && splitValues[2] !== "0") {
          let first = Number(splitValues[0]);
          let operator = splitValues[1];
          let second = Number(splitValues[2]);
          let result = operate(first, operator, second);
          let display = document.querySelector(".display");
          display.innerText = result;
          splitValues.splice(0, 3);
          splitValues.unshift(result);
        }
        values = splitValues[0];
      }
      
    }
  });

function clear() {
  return (values = "");
}

let clearBtn = document
  .querySelector(".clear")
  .addEventListener("click", () => {
    clear();
    let display = document.querySelector(".display");
    display.innerText = values;
  });

function deleteChar() {
  let splitString = values.split("");
  splitString.pop();
  values = splitString.join("");
  return values;
}

let deleteBtn = document
  .querySelector(".delete")
  .addEventListener("click", () => {
    deleteChar();
    let display = document.querySelector(".display");
    display.innerText = values;
  });
