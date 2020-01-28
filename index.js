
function fetchBook(){
fetch.('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks());
} 
function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}


