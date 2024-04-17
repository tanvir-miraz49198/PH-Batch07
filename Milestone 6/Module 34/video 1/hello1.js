const quotesFetch = () => {
    const url = 'https://api.kanye.rest/'
    fetch(url)
    .then(res => res.json())
    .then(data => generateQuotes(data))
    
}

const generateQuotes = (data) => {
const quotes = document.getElementById('getQuotes')

quotes.innerText = data.quote
}

quotesFetch()