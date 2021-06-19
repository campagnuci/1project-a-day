const API_URL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
  try {
    const { data } = await axios.get(API_URL + username);
    createUserCard(data);
    getUserRepos(username);
  } catch (error) {
    console.log(error)
    if (error.response.status === 404) {
      createErrorCard('No profile with this username');
    }
  }
}

async function getUserRepos(username) {
  try {
    const { data } = await axios.get(`${API_URL + username}/repos`);
    addReposToCard(data);
  } catch (error) {
    createErrorCard('Problem fetching repositories');
  }
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="" class="avatar">
      </div>
      <div class="user-info">
        <h2>${user.login}</h2>
        <p>${user.bio ? user.bio : ''}</p>
        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repositories</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposElement = document.getElementById('repos');

  repos.slice(0, 10)
    .forEach((repo) => {
      const element = document.createElement('a');
      element.classList.add('repo');
      element.href = repo.html_url;
      element.target = '_blank';
      element.innerText = repo.name;
      reposElement.appendChild(element);
    })
}

function createErrorCard(message) {
  const cardHTML = `
    <div class="card">
      <h1>${message}</h1>
    </div>
  `;
  main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = '';
  }
});
