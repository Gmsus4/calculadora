const operadores = document.querySelectorAll('.operador');
const numeros = document.querySelectorAll('.num');
const display = document.querySelector('#display-content');
const display2 = document.querySelector('#display2');
const newSpan = document.createElement('span');
let count = 0;
let oper = 0;

numeros.forEach(function(num){
    num.addEventListener('click',()=>{
    if(display.textContent === '0'){
        display.innerHTML = '';
        display.innerHTML += num.textContent;
    } else if(num.textContent === '.' && display.textContent.includes('.')){
        return;
    }
    else{
        display.innerHTML += num.textContent;
    }
    });
});

function math(num1, num2, op){
    if(op === 1){
        return num1 + num2;
    } else if(op === 2){
        return num2 - num1;
    } else if(op === 3){
        return num1 * num2;
    } else if(op === 4){
        return num2 / num1;
    }
}

operadores.forEach(function(op){
    op.addEventListener('click',()=>{
       const sumar = op.classList.contains('sumar');
       const multiplicar = op.classList.contains('multiplicar');
       const dividir = op.classList.contains('dividir');
       const restar = op.classList.contains('restar');
       const igual = op.classList.contains('igual');
       const deleteOne = op.classList.contains('delete');
       const deleteAll = op.classList.contains('deleteall');
       let num1 = parseFloat(display.textContent);
       let num2 = parseFloat(display2.textContent);


    //Incio o arranque...
    function count0(c){ //Si el count es = 0.
        display2.textContent = display.textContent;//Lo que escriba en pantalla 1, lo subirá a pantalla 2
        display.textContent = ''; // Borrará lo que tenía en pantalla 1. Por defecto ese 0.
        display2.innerHTML += op.innerHTML;  //Agregará el signo de operación a pantalla 2
        oper = c; 
        display2.classList.remove('display-none'); //Eliminará la class display none
        count +=1; //Le sumará al count un + 1;
    }
    
    function count2(c){
        oper = c;
        display2.textContent = display.textContent;
        display2.innerHTML += op.innerHTML; 
        display.textContent = '';
        count = 1;
    }
    
    function countelse(c){
        oper = c; 
        display2.textContent = '';
        const equals = math(num1, num2, oper);
        newSpan.innerText = equals;
        display2.append(newSpan);
/*         display2.innerHTML += equals; */
        display2.innerHTML += op.innerHTML; 
        display.textContent = '';
    }


       if(sumar === true){
            if(count === 0){
                count0(1);
            } else if(count === 2){ 
                count2(1)
            } 
            else{
                countelse(1)
            }

       } else if(multiplicar === true){
            if(count === 0){
                count0(3);
            } else if(count === 2){ 
                count2(3)
            } 
            else{
                countelse(3)
            }

       } else if(dividir === true){
            if(count === 0){
                count0(4);
            } else if(count === 2){ 
                count2(4)
            } 
            else{
                countelse(4)
            }

       } else if(restar === true){
            if(count === 0){
                count0(2);
            } else if(count === 2){ 
                count2(2)
            } 
            else{
                countelse(2)
            }

       } else if(deleteOne === true){
            display.textContent = display.textContent.slice(0,-1);
/*             const split = display.textContent.split('');
            split.splice(-1); */


       } else if(deleteAll === true){
            display2.textContent = '0';
            display.textContent = 0;
            count = 0;
            oper = 0;
            display2.classList.add('display-none');
        }
       
       else if(igual === true){
            if(display.textContent === '3861112341' && display2.textContent === '0'){
                display.textContent = 'I appreciate you <3';
            } 
            
            else if(display2.textContent === '0'){
               display.innerHTML = `${op.innerHTML}${display.textContent}`;
               display2.textContent = '0';

           } else if(count === 2){
               switch (oper){
                   case 1:
/*                         console.log('suma'); */
                        const plus = parseFloat(display.textContent) + parseFloat(newSpan.textContent);
                        display2.innerHTML = `${display.innerText}` + `${operadores[6].innerHTML}` + `${newSpan.textContent}`;
                        display.innerHTML = `${op.innerHTML}`;
                        display.innerHTML += plus;
/*                         console.log(plus); */
                       break;

                    case 2:
/*                         console.log('suma'); */
                        const resta = parseFloat(display.textContent) - parseFloat(newSpan.textContent);
                        display2.innerHTML = `${display.innerText}` + `${operadores[5].innerHTML}` + `${newSpan.textContent}`;
                        display.innerHTML = `${op.innerHTML}`;
                        display.innerHTML += resta;
/*                         console.log(plus); */
                        break;

                    case 3:
/*                         console.log('suma'); */
                        const addM = parseFloat(display.textContent) * parseFloat(newSpan.textContent);
                        display2.innerHTML = `${display.innerText}` + `${operadores[4].innerHTML}` + `${newSpan.textContent}`;
                        display.innerHTML = `${op.innerHTML}`;
                        display.innerHTML += addM;
/*                         console.log(plus); */
                        break;
     
                    case 4:
/*                         console.log('suma'); */
                        const divide = parseFloat(display.textContent) / parseFloat(newSpan.textContent);
                        display2.innerHTML = `${display.innerText}` + `${operadores[3].innerHTML}` + `${newSpan.textContent}`;
                        display.innerHTML = `${op.innerHTML}`;
                        display.innerHTML += divide;
/*                         console.log(plus); */
                        break;
               }
           }
           
           else{
                const equals = math(num1, num2, oper);
                newSpan.innerText = display.innerText;
                display2.append(newSpan);
                display.innerHTML = op.innerHTML;
                console.log(equals);
                display.innerHTML += equals;
                count = 2;

           }
       }
/*         display.innerHTML += op.innerHTML; */
    });
});