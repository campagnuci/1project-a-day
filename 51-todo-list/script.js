const form = document.getElementById('form')
const input = document.getElementById('input')
const todos = document.getElementById('todos')

const collection = JSON.parse(localStorage.getItem('todos'))

if (collection) {
  collection.forEach(item => addTodo(item))
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  addTodo()
})

function addTodo(todo) {
  let todoText = input.value

  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const element = document.createElement('li')
    if (todo && todo.completed) {
      element.classList.add('completed')
    }

    element.innerText = todoText

    element.addEventListener('click', () => {
      element.classList.toggle('completed')
      updateLS()
    })

    element.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      element.remove()
      updateLS()
    })

    todos.appendChild(element)

    input.value = ''

    updateLS()
  }
}

function updateLS() {
  allTodos = document.querySelectorAll('li')

  const todos = []

  allTodos.forEach(item => {
    todos.push({
      text: item.innerText,
      completed: item.classList.contains('completed')
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}
