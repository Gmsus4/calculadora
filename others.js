function allEquals(sum,res,div,mult){
        switch (oper){
            case 1:
/*                         console.log('suma'); */
                 const plus = parseFloat(display.textContent) + parseFloat(newSpan.textContent);
                 display2.innerHTML = `${display.innerText}` + `${operadores[sum].innerHTML}` + `${newSpan.textContent}`;
                 display.innerHTML = `${operadores[sum].innerHTML}`;
                 display.innerHTML += plus;
/*                         console.log(plus); */
                break;

             case 2:
/*                         console.log('suma'); */
                 const resta = parseFloat(display.textContent) - parseFloat(newSpan.textContent);
                 display2.innerHTML = `${display.innerText}` + `${operadores[res].innerHTML}` + `${newSpan.textContent}`;
                 display.innerHTML = `${operadores[res].innerHTML}`;
                 display.innerHTML += resta;
/*                         console.log(plus); */
                 break;

             case 3:
/*                         console.log('suma'); */
                 const addM = parseFloat(display.textContent) * parseFloat(newSpan.textContent);
                 display2.innerHTML = `${display.innerText}` + `${operadores[mult].innerHTML}` + `${newSpan.textContent}`;
                 display.innerHTML = `${operadores[mult].innerHTML}`;
                 display.innerHTML += addM;
/*                         console.log(plus); */
                 break;

             case 4:
/*                         console.log('suma'); */
                 const divide = parseFloat(display.textContent) / parseFloat(newSpan.textContent);
                 display2.innerHTML = `${display.innerText}` + `${operadores[div].innerHTML}` + `${newSpan.textContent}`;
                 display.innerHTML = `${operadores[div].innerHTML}`;
                 display.innerHTML += divide;
/*                         console.log(plus); */
                 break;
        }

     else{
            display2.textContent = display.textContent;
            display.textContent = '';
            display2.innerHTML += `${operadores[5].innerHTML}`;
            oper = 2; 
            display2.classList.remove('display-none');
            count +=1;
   }
}