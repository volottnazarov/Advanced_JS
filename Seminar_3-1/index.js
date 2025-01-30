const dataNews = [
    {title: "Новости спорта", content: "Про футбол"},
    {title: "Новости о погоде", content: "Смерчи в США"},
    {title: "Новости культуры", content: "Выставка Ван Гога"},
    {title: "Новости политики", content: "Выборы 2025"},
    {title: "Новости науки", content: "Новая планета"}
]

const btnEl = document.querySelector('.load-button');
const newsContEl = document.querySelector('.news-container');


function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {  // вероятность 10% выдачи ошибки(имитация ошибки загрузки)
                resolve(dataNews);
            }else {
                reject("Не получилось загрузить новости.");
            }
        }, 2000);  // задержка на 2 секунды
    });
}

btnEl.addEventListener('click', () => {
    fetchNews()
    .then((data) => {
        dataNews.forEach(news => {
            const newsH3 = document.createElement('h3');
            const newsP = document.createElement('p');
            newsH3.textContent = news.title;
            newsP.textContent = news.content;
            newsContEl.appendChild(newsH3);
            newsContEl.appendChild(newsP);
        });
    }).catch((err) => {
        newsContEl.textContent = `Ошибка! ${err}`;  // Не получилось загрузить новости.
        console.log("Ошибка загрузки новостей!");
    });
})

