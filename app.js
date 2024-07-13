const operadores = document.querySelectorAll(".operador");
const numeros = document.querySelectorAll(".num");
const display = document.querySelector("#display-content");
const display2 = document.querySelector("#display2");
const newSpan = document.createElement("span");
let count = 0;
let oper = 0;

const eCodes = [
  "Digit0",
  "Numpad0",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Period",
  "Numpad1",
  "Numpad2",
  "Numpad3",
  "Numpad4",
  "Numpad5",
  "Numpad6",
  "Numpad7",
  "Numpad8",
  "Numpad9",
  "NumpadDecimal",
];
const deleteContent = () =>
  (display.textContent = display.textContent.slice(0, -1));
const NumpadFunction = (operadoresNum, operNum) => {
  display2.textContent = display.textContent;
  display.textContent = "";
  display2.innerHTML += `${operadores[operadoresNum].innerHTML}`;
  oper = operNum;
  display2.classList.remove("display-none");
  count += 1;
};
const NumpadEnter = (opArray, isClick = true) => {
  const operation = (num) => {
    const operation =
      parseFloat(display.textContent) + parseFloat(newSpan.textContent);
    display2.innerHTML =
      `${display.innerText}` +
      `${operadores[num].innerHTML}` +
      `${newSpan.textContent}`;
    display.innerHTML = `${
      isClick ? operadores[num].innerHTML : opArray.innerHTML
    }`;
    display.innerHTML += operation;
  };

  if (display.textContent === "3861112341" && display2.textContent === "0") {
    display.textContent = "I appreciate you <3";
  } else if (count === 2) {
    switch (oper) {
      case 1:
        operation(6);
        break;
      case 2:
        operation(5);
        break;
      case 3:
        operation(4);
        break;
      case 4:
        operation(3);
        break;
    }
  } else {
    let equals = math(num1, num2, oper);
    newSpan.innerText = display.innerText;
    display2.append(newSpan);
    display.innerHTML = `${operadores[8].innerHTML}`;
    display.innerHTML += Math.round(equals * 100) / 100;
    count = 2;
  }
};

const condicionalOperation = (count0, count2, countelse, num) => {
  if (count === 0) {
    count0(num);
  } else if (count === 2) {
    count2(num);
  } else {
    countelse(num);
  }
};

const deleteAllFunction = () => {
  display2.textContent = "0";
  display.textContent = 0;
  count = 0;
  oper = 0;
  display2.classList.add("display-none");
};

const keys = document.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log(e.code);
  let num1 = parseFloat(display.textContent);
  let num2 = parseFloat(display2.textContent);
  if (display.textContent === "0") {
    display.innerHTML = "";
    if (isNaN(e.key)) {
      if (e.key === ".") {
        display.textContent = ".";
      }
      return;
    }
    display.innerHTML += e.key;
  } else if (e.key === "." && display.textContent.includes(".")) {
    return;
  } else {
    eCodes.map((eCode) => {
      if (eCode === e.code) {
        display.innerHTML += e.key;
      }
    });
    switch (e.code) {
      case "Escape":
        display2.textContent = "0";
        display.textContent = 0;
        count = 0;
        oper = 0;
        display2.classList.add("display-none");
        break;
      case "Backspace":
        deleteContent();
        break;
      case "NumpadEnter":
        NumpadEnter();
        break;
      case "Enter":
        NumpadEnter();
        break;
      case "NumpadAdd":
        NumpadFunction(6, 1);
        break;
      case "NumpadDivide":
        NumpadFunction(3, 4);
        break;
      case "NumpadMultiply":
        NumpadFunction(4, 3);
        break;
      case "NumpadSubtract":
        NumpadFunction(5, 2);
        break;
    }
  }
});

numeros.forEach(function (num) {
  num.addEventListener("click", () => {
    if (display.textContent === "0") {
      display.innerHTML = "";
      display.innerHTML += num.textContent;
    } else if (num.textContent === "." && display.textContent.includes(".")) {
      return;
    } else {
      display.innerHTML += num.textContent;
    }
  });
});

function math(num1, num2, op) {
  if (op === 1) {
    return num1 + num2;
  } else if (op === 2) {
    return num2 - num1;
  } else if (op === 3) {
    return num1 * num2;
  } else if (op === 4) {
    return num2 / num1;
  }
}

operadores.forEach(function (op) {
  op.addEventListener("click", () => {
    const sumar = op.classList.contains("sumar");
    const multiplicar = op.classList.contains("multiplicar");
    const dividir = op.classList.contains("dividir");
    const restar = op.classList.contains("restar");
    const igual = op.classList.contains("igual");
    const deleteOne = op.classList.contains("delete");
    const deleteAll = op.classList.contains("deleteall");
    let num1 = parseFloat(display.textContent);
    let num2 = parseFloat(display2.textContent);

    //Incio o arranque...
    function count0(c) {
      //Si el count es = 0.
      display2.textContent = display.textContent; //Lo que escriba en pantalla 1, lo subirá a pantalla 2
      display.textContent = ""; // Borrará lo que tenía en pantalla 1. Por defecto ese 0.
      display2.innerHTML += op.innerHTML; //Agregará el signo de operación a pantalla 2
      oper = c;
      display2.classList.remove("display-none"); //Eliminará la class display none
      count += 1; //Le sumará al count un + 1;
    }

    function count2(c) {
      oper = c;
      display2.textContent = display.textContent;
      display2.innerHTML += op.innerHTML;
      display.textContent = "";
      count = 1;
    }

    function countelse(c) {
      oper = c;
      display2.textContent = "";
      const equals = math(num1, num2, oper);
      newSpan.innerText = equals;
      display2.append(newSpan);
      display2.innerHTML += op.innerHTML;
      display.textContent = "";
    }

    switch (true) {
      case sumar:
        condicionalOperation(count0, count2, countelse, 1);
        break;
      case restar:
        condicionalOperation(count0, count2, countelse, 2);
        break;
      case multiplicar:
        condicionalOperation(count0, count2, countelse, 3);
        break;
      case dividir:
        condicionalOperation(count0, count2, countelse, 4);
        break;
      case deleteOne:
        deleteContent();
        break;
      case deleteAll:
        deleteAllFunction();
        break;

      case igual:
        const operationResult = (num) => {
          const operation =
            parseFloat(display.textContent) + parseFloat(newSpan.textContent);
          display2.innerHTML =
            `${display.innerText}` +
            `${operadores[num].innerHTML}` +
            `${newSpan.textContent}`;
          display.innerHTML = `${op.innerHTML}`;
          display.innerHTML += operation;
        };
        if (
          display.textContent === "3861112341" &&
          display2.textContent === "0"
        ) {
          display.textContent = "I appreciate you <3";
        } else if (display2.textContent === "0") {
          display.innerHTML = `${op.innerHTML}${display.textContent}`;
          display2.textContent = "0";
        } else if (count === 2) {
          switch (oper) {
            case 1:
              operationResult(6);
              break;
            case 2:
              operationResult(5);
              break;
            case 3:
              operationResult(4);
              break;
            case 4:
              operationResult(3);
              break;
          }
        } else {
          const equals = math(num1, num2, oper);
          newSpan.innerText = display.innerText;
          display2.append(newSpan);
          display.innerHTML = op.innerHTML;
          console.log(equals);
          display.innerHTML += Math.round(equals * 100) / 100;
          count = 2;
        }
        break;
    }
  });
});