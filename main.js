let firstN = +prompt("raqamni kiriting");
let secondN = +prompt("keyingi raqamni kiriting");
let operator = prompt("qaysi amalni bajarishni hohlaysiz");

let result = 0;
switch (operator) {
  case "+":
    result = firstN + secondN;
    break;
  case "-":
    result = firstN - secondN;
    break;
  case "*":
    result = firstN * secondN;
    break;
  case "/":
    result = firstN / secondN;
    break;
}

console.log(result);
