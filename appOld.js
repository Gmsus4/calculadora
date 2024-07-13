const operadores = document.querySelectorAll(".operador");
const numeros = document.querySelectorAll(".num");
const display = document.querySelector("#display-content");
const display2 = document.querySelector("#display2");
const newSpan = document.createElement("span");
let count = 0;
let oper = 0;

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
    switch (e.code) {
      case "Digit0":
        display.innerHTML += e.key;
        break;
      case "Numpad0":
        display.innerHTML += e.key;
        break;
      case "Digit1":
        display.innerHTML += e.key;
        break;
      case "Digit2":
        display.innerHTML += e.key;
        break;
      case "Digit3":
        display.innerHTML += e.key;
        break;
      case "Digit4":
        display.innerHTML += e.key;
        break;
      case "Digit5":
        display.innerHTML += e.key;
        break;
      case "Digit6":
        display.innerHTML += e.key;
        break;
      case "Digit7":
        display.innerHTML += e.key;
        break;
      case "Digit8":
        display.innerHTML += e.key;
        break;
      case "Digit9":
        display.innerHTML += e.key;
        break;
      case "Period":
        display.innerHTML += e.key;
        break;
      case "Numpad1":
        display.innerHTML += e.key;
        break;
      case "Numpad2":
        display.innerHTML += e.key;
        break;
      case "Numpad3":
        display.innerHTML += e.key;
        break;
      case "Numpad4":
        display.innerHTML += e.key;
        break;
      case "Numpad5":
        display.innerHTML += e.key;
        break;
      case "Numpad6":
        display.innerHTML += e.key;
        break;
      case "Numpad7":
        display.innerHTML += e.key;
        break;
      case "Numpad8":
        display.innerHTML += e.key;
        break;
      case "Numpad9":
        display.innerHTML += e.key;
        break;
      case "NumpadDecimal":
        display.innerHTML += e.key;
        break;
      case "Escape":
        display2.textContent = "0";
        display.textContent = 0;
        count = 0;
        oper = 0;
        display2.classList.add("display-none");
        break;
      case "Backspace":
        display.textContent = display.textContent.slice(0, -1);
        break;
      case "NumpadEnter":
        if (
          display.textContent === "3861112341" &&
          display2.textContent === "0"
        ) {
          display.textContent = "I appreciate you <3";
        } else if (count === 2) {
          switch (oper) {
            case 1:
              /*                         console.log('suma'); */
              const plus =
                parseFloat(display.textContent) +
                parseFloat(newSpan.textContent);
              display2.innerHTML =
                `${display.innerText}` +
                `${operadores[6].innerHTML}` +
                `${newSpan.textContent}`;
              display.innerHTML = `${operadores[6].innerHTML}`;
              display.innerHTML += plus;
              /*                         console.log(plus); */
              break;

            case 2:
              /*                         console.log('suma'); */
              const resta =
                parseFloat(display.textContent) -
                parseFloat(newSpan.textContent);
              display2.innerHTML =
                `${display.innerText}` +
                `${operadores[5].innerHTML}` +
                `${newSpan.textContent}`;
              display.innerHTML = `${operadores[5].innerHTML}`;
              display.innerHTML += resta;
              /*                         console.log(plus); */
              break;

            case 3:
              /*                         console.log('suma'); */
              const addM =
                parseFloat(display.textContent) *
                parseFloat(newSpan.textContent);
              display2.innerHTML =
                `${display.innerText}` +
                `${operadores[4].innerHTML}` +
                `${newSpan.textContent}`;
              display.innerHTML = `${operadores[4].innerHTML}`;
              display.innerHTML += addM;
              /*                         console.log(plus); */
              break;

            case 4:
              /*                         console.log('suma'); */
              const divide =
                parseFloat(display.textContent) /
                parseFloat(newSpan.textContent);
              display2.innerHTML =
                `${display.innerText}` +
                `${operadores[3].innerHTML}` +
                `${newSpan.textContent}`;
              display.innerHTML = `${operadores[3].innerHTML}`;
              display.innerHTML += divide;
              /*                         console.log(plus); */
              break;
          }
        } else {
          let equals = math(num1, num2, oper);
          newSpan.innerText = display.innerText;
          display2.append(newSpan);
          display.innerHTML = `${operadores[8].innerHTML}`;
          console.log(equals);
          display.innerHTML += Math.round(equals * 100) / 100;
          count = 2;
        }

        break;
      case "Enter":
        if (
          display.textContent === "3861112341" &&
          display2.textContent === "0"
        ) {
          display.textContent = "FINO SEÑORES";
        } else if (count === 2) {
          switch (oper) {
            case 1:
              /*                         console.log('suma'); */
              const plus =
                parseFloat(display.textContent) +
                parseFloat(newSpan.textContent);
              display2.innerHTML =
                `${display.innerText}` +
                `${operadores[6].innerHTML}` +
                `${newSpan.textContent}`;
              display.innerHTML = `${operadores[6].innerHTML}`;
              display.innerHTML += plus;
              /*                         console.log(plus); */
              break;

            case 2:
              /*                         console.log('suma'); */
              const resta =
                parseFloat(display.textContent) -
                parseFloat(newSpan.textContent);
              display2.innerHTML =
                `${display.innerText}` +
                `${operadores[5].innerHTML}` +
                `${newSpan.textContent}`;
              display.innerHTML = `${operadores[5].innerHTML}`;
              display.innerHTML += resta;
              /*                         console.log(plus); */
              break;

            case 3:
              /*                         console.log('suma'); */
              const addM =
                parseFloat(display.textContent) *
                parseFloat(newSpan.textContent);
              display2.innerHTML =
                `${display.innerText}` +
                `${operadores[4].innerHTML}` +
                `${newSpan.textContent}`;
              display.innerHTML = `${operadores[4].innerHTML}`;
              display.innerHTML += addM;
              /*                         console.log(plus); */
              break;

            case 4:
              /*                         console.log('suma'); */
              const divide =
                parseFloat(display.textContent) /
                parseFloat(newSpan.textContent);
              display2.innerHTML =
                `${display.innerText}` +
                `${operadores[3].innerHTML}` +
                `${newSpan.textContent}`;
              display.innerHTML = `${operadores[3].innerHTML}`;
              display.innerHTML += divide;
              /*                         console.log(plus); */
              break;
          }
        } else {
          let equals2 = math(num1, num2, oper);
          newSpan.innerText = display.innerText;
          display2.append(newSpan);
          display.innerHTML = `${operadores[8].innerHTML}`;
          console.log(equals2);
          display.innerHTML += Math.round(equals2 * 100) / 100;
          count = 2;
        }

        break;
      case "NumpadAdd":
        display2.textContent = display.textContent;
        display.textContent = "";
        display2.innerHTML += `${operadores[6].innerHTML}`;
        oper = 1;
        display2.classList.remove("display-none");
        count += 1;
        break;
      case "NumpadDivide":
        display2.textContent = display.textContent;
        display.textContent = "";
        display2.innerHTML += `${operadores[3].innerHTML}`;
        oper = 4;
        display2.classList.remove("display-none");
        count += 1;
        break;
      case "NumpadMultiply":
        display2.textContent = display.textContent;
        display.textContent = "";
        display2.innerHTML += `${operadores[4].innerHTML}`;
        oper = 3;
        display2.classList.remove("display-none");
        count += 1;
        break;
      case "NumpadSubtract":
        display2.textContent = display.textContent;
        display.textContent = "";
        display2.innerHTML += `${operadores[5].innerHTML}`;
        oper = 2;
        display2.classList.remove("display-none");
        count += 1;
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
      /*         display2.innerHTML += equals; */
      display2.innerHTML += op.innerHTML;
      display.textContent = "";
    }

    if (sumar === true) {
      if (count === 0) {
        count0(1);
      } else if (count === 2) {
        count2(1);
      } else {
        countelse(1);
      }
    } else if (multiplicar === true) {
      if (count === 0) {
        count0(3);
      } else if (count === 2) {
        count2(3);
      } else {
        countelse(3);
      }
    } else if (dividir === true) {
      if (count === 0) {
        count0(4);
      } else if (count === 2) {
        count2(4);
      } else {
        countelse(4);
      }
    } else if (restar === true) {
      if (count === 0) {
        count0(2);
      } else if (count === 2) {
        count2(2);
      } else {
        countelse(2);
      }
    } else if (deleteOne === true) {
      display.textContent = display.textContent.slice(0, -1);
      /*             const split = display.textContent.split('');
            split.splice(-1); */
    } else if (deleteAll === true) {
      display2.textContent = "0";
      display.textContent = 0;
      count = 0;
      oper = 0;
      display2.classList.add("display-none");
    }

    if (igual === true) {
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
            /*                         console.log('suma'); */
            const plus =
              parseFloat(display.textContent) + parseFloat(newSpan.textContent);
            display2.innerHTML =
              `${display.innerText}` +
              `${operadores[6].innerHTML}` +
              `${newSpan.textContent}`;
            display.innerHTML = `${op.innerHTML}`;
            display.innerHTML += plus;
            /*                         console.log(plus); */
            break;

          case 2:
            /*                         console.log('suma'); */
            const resta =
              parseFloat(display.textContent) - parseFloat(newSpan.textContent);
            display2.innerHTML =
              `${display.innerText}` +
              `${operadores[5].innerHTML}` +
              `${newSpan.textContent}`;
            display.innerHTML = `${op.innerHTML}`;
            display.innerHTML += resta;
            /*                         console.log(plus); */
            break;

          case 3:
            /*                         console.log('suma'); */
            const addM =
              parseFloat(display.textContent) * parseFloat(newSpan.textContent);
            display2.innerHTML =
              `${display.innerText}` +
              `${operadores[4].innerHTML}` +
              `${newSpan.textContent}`;
            display.innerHTML = `${op.innerHTML}`;
            display.innerHTML += addM;
            /*                         console.log(plus); */
            break;

          case 4:
            /*                         console.log('suma'); */
            const divide =
              parseFloat(display.textContent) / parseFloat(newSpan.textContent);
            display2.innerHTML =
              `${display.innerText}` +
              `${operadores[3].innerHTML}` +
              `${newSpan.textContent}`;
            display.innerHTML = `${op.innerHTML}`;
            display.innerHTML += divide;
            /*                         console.log(plus); */
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
    }
    /*         display.innerHTML += op.innerHTML; */
  });
});
