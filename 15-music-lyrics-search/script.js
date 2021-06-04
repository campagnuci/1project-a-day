// Search URL is https://api.lyrics.ovh/v1/artist/title
const API_URL = 'https://api.lyrics.ovh/v1/';
const REGEX = /\s+/g;

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('lyrics');

const getSongLyrics = async (artist, song) => {
  const headers = { method: 'GET' };

  const response = await fetch(`${API_URL}${artist}/${song}`, headers);
  const data = await response.json();
  main.innerText = data.lyrics;
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const songAndTrack = search.value;
  const searchItems = songAndTrack.split(' - ');
  const [artist, song] = searchItems.map((item) => {
    return item.replace(REGEX, '-').toLowerCase();
  })
  await getSongLyrics(artist, song)
});
