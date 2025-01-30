
const feedbackBtn = document.querySelector('.feedbackBtn');
const viewFeedbackBtn = document.querySelector('.viewFeedbackBtn');

// список продуктов
const feedBackView = document.querySelector('.view__feedback');
const ulFeedbackView = document.querySelector('.view__feedback-products');

// ввод названия продукта и текста отзыва с кнопкой отправления
const feedBackSection = document.querySelector('.input__feedback');
const inputFeedbackProduct = document.querySelector('.input__feedback-name');
const inputFeedbackText = document.getElementById('text');
const buttonInputText = document.querySelector('.input__feedback-btn');

// всплывающее окно списка отзывов по конкретному продукту
const floatDivEl = document.querySelector('.view__feedback-float');
const nameProduct = document.querySelector('.nameProduct');
const ulFloatFeedback = document.querySelector('.ulFloat');




feedbackBtn.addEventListener('click', () => {  // добавление отзыва
    feedBackView.style.display = 'none';
    floatDivEl.style.display = 'none';
    feedBackSection.style.display = 'block';
    buttonInputText.addEventListener('click', () => {
        let arr = [];
        if(localStorage.getItem(inputFeedbackProduct.value)) {
            arr = JSON.parse(localStorage.getItem(inputFeedbackProduct.value.toString()));
            arr.push(inputFeedbackText.value.toString());
            localStorage.setItem(inputFeedbackProduct.value.toString(), JSON.stringify(arr));
        }else {
            arr.push(inputFeedbackText.value.toString());
            localStorage.setItem(inputFeedbackProduct.value.toString(), JSON.stringify(arr));
        }
        console.log(arr);
    });
});



viewFeedbackBtn.addEventListener('click', () => {  // просмотр отзывов
    ulFeedbackView.innerHTML = '';
    feedBackSection.style.display = 'none';
    feedBackView.style.display = 'block';
    Object.keys(localStorage).forEach((key) => {
        const liEl = document.createElement('p');
        const btnEl = document.createElement('button');
        liEl.textContent = key;
        btnEl.textContent = 'Смотреть все';
        btnEl.style.cursor = 'pointer';
        ulFeedbackView.append(liEl, btnEl);
        feedBackView.append(ulFeedbackView);
        btnEl.addEventListener('click', () => {
            ulFloatFeedback.innerHTML = '';
            floatDivEl.style.display = 'block';
            nameProduct.textContent = key;
            const arr = JSON.parse(localStorage.getItem(key));
            if (arr == '') {
                console.log("пусто");
                let pFloatFB = document.createElement('p');
                pFloatFB.textContent = "Здесь нет пока отзывов!";
                pFloatFB.style.color = 'red';
                ulFeedbackView.append(pFloatFB);
                floatDivEl.style.display = 'none';
            }
            console.log(arr);
            let countID = 0;
            arr.forEach(element => {
                countID += 1;
                const divFeedback = document.createElement('div');
                divFeedback.classList.add('divFB')
                divFeedback.id = countID;
                const pFloatFB = document.createElement('p');
                pFloatFB.id = countID;
                const btnDeleteFB = document.createElement('button');
                btnDeleteFB.id = countID;
                pFloatFB.textContent = element;
                pFloatFB.classList.add('pFeedback');
                btnDeleteFB.textContent = "Удалить отзыв";
                btnDeleteFB.classList.add('deleteFeedback');
                divFeedback.append(pFloatFB, btnDeleteFB);
                ulFloatFeedback.append(divFeedback);
            });

            floatDivEl.addEventListener('click', function(e) {  // удаление отзыва
                if(e.target.tagName === 'BUTTON') {
                    const divFBEl = document.getElementById(e.target.id);
                    const parentH2El = document.querySelector('.nameProduct')
                    console.log(parentH2El.innerHTML);  // значение названия продукта
                    const pFBEl = divFBEl.querySelector('.pFeedback');
                    console.log(pFBEl.innerHTML);  // значение отзыва
                    deleteFeedback(parentH2El.innerHTML.toString(), pFBEl.innerHTML.toString());
                    divFBEl.remove();
                }
            });
        });
    });

});
/*
    Функция удаления значения из массива значений в localStorage
*/
function deleteFeedback(title, feedback) {
    let arrDel = [];
    arrDel = JSON.parse(localStorage.getItem(title));
    let resultArr = arrDel.filter(item => item != feedback);
    localStorage.setItem(title, JSON.stringify(resultArr));
};


// localStorage.clear();