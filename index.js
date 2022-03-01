const url = 'https://api.kanye.rest/';
const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');

window.addEventListener('load', () => {
    getQuote();
});

btn.addEventListener('click', () => {
    getQuote();
});

const getQuote = async () => {
    const response = await fetch(url);
    const data = await response.json();
    quote.textContent = `"${data.quote}"`;
};