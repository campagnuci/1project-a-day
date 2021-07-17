const container = document.getElementById('result')
const search = document.getElementById('filter')

const API_URL = 'https://randomuser.me/api?results=50'
const listItems = []

search.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
  const res = await fetch(API_URL)
  const { results } = await res.json()
  container.innerHTML = ''

  results.forEach((user) => {
    const element = document.createElement('li')
    listItems.push(element)

    element.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `

    container.appendChild(element)
  })
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}

getData()
