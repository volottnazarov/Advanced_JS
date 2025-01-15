const buttonEl = document.querySelector('.btn');
let valueEl = document.querySelector('.input__value');
const pEl = document.querySelector('.result__text')

// buttonEl.addEventListener('click', () => {
//     if (!isNaN(valueEl.value)) {
//         pEl.textContent = `Значение "${valueEl.value}" является числом`;
//     }else {
//         pEl.textContent = `Значение "${valueEl.value}" не число!`;
//     }
// });

buttonEl.addEventListener('click', () => {
    try{
        if(isNaN(valueEl.value)){
            throw new Error("Это не число!");
        }
        pEl.textContent = `Значение "${valueEl.value}" является числом`;
    }catch(error){
        pEl.textContent = error.message;
    }finally{
        console.log("Проверка произведена.");
    }
});