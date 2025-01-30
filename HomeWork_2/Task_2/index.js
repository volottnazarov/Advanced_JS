let enterTextEl = document.getElementById('note');

const btnSaveEl = document.querySelector('.save');
const btnLoadEl = document.querySelector('.load');
const btnClearElemEl = document.querySelector('.clearElem');
const btnClearEl = document.querySelector('.clear');
const numNoteLoadEl = document.querySelector('.numberNote-load');
const numNoteClearEl = document.querySelector('.numberNote-clear');

const loadTextEl = document.querySelector('.loadText');


let count;

btnSaveEl.addEventListener('click', () => {
    if (localStorage.getItem("count") && localStorage.length > 1) {
        count = parseInt(localStorage.getItem("count")) + 1;
        localStorage.setItem("count", count.toString());
        localStorage.setItem(count, enterTextEl.value);
    }else {
        localStorage.setItem("count", "1");
        localStorage.setItem("1", enterTextEl.value);
    }
});

btnLoadEl.addEventListener('click', () => {
    if (localStorage.getItem(numNoteLoadEl.value)) {
        let resultLoad = localStorage.getItem(numNoteLoadEl.value);
        loadTextEl.textContent = resultLoad;
    }else {
        alert("Заметка отсутствует!");
    }
});

btnClearElemEl.addEventListener('click', () => {
    if (localStorage.length > 1) {
        if (localStorage.getItem(numNoteClearEl.value.toString())) {
            count = parseInt(localStorage.getItem("count"));
            localStorage.setItem("count", count.toString());
            localStorage.removeItem(numNoteClearEl.value.toString());
        }else {
            alert("Заметка отстутствует!");
        }
    }else {
        count = 0;
        localStorage.setItem("count", count.toString());
    }

});

btnClearEl.addEventListener('click', () => {
    localStorage.clear();
});

