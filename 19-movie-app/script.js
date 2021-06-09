const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e1635efa26635ecbff99945dc7ea742b&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=e1635efa26635ecbff99945dc7ea742b&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getMovies (url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview} = movie;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="">
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getColorByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
    `
    main.appendChild(movieElement);
  });
}

function getColorByRate(vote) {
  if (vote >= 7) {
    return 'green';
  } else if (vote <= 4) {
    return 'red'
  }
  return 'orange'
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== '') {
    getMovies(`${SEARCH_URL + searchTerm}`);
    search.value = '';
  } else {
    window.location.reload();
  }
});

getMovies(API_URL);
