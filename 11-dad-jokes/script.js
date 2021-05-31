const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Fetch API
// const generateJoke = () => {
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   };
//   fetch('https://icanhazdadjoke.com/', config)
//     .then(response => response.json())
//     .then(data => {
//       joke.innerHTML = data.joke;
//     });
// };

// Async / Await
const generateJoke = async () => {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };
  const response = await fetch('https://icanhazdadjoke.com/', config);
  const data = await response.json();
  joke.innerHTML = data.joke;
};

jokeBtn.addEventListener('click', generateJoke)

generateJoke()
