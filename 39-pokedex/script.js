const pokeContainer = document.getElementById('poke-container')

const BASE_URL = 'https://pokeapi.co/api/v2'
const POKEMON_TOTAL = 151
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors)

const fetchPokemons = async () => {
  for (let i = 1; i <= POKEMON_TOTAL; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`)
  const data = await response.json()
  createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
  const pokediv = document.createElement('div')
  pokediv.classList.add('pokemon')

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const id = pokemon.id.toString().padStart(3, '0')
  const pokeTypes = pokemon.types.map(type => type.type.name)
  const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1)
  const color = colors[type]

  pokediv.style.backgroundColor = color

  const pokemonInnerHTML = `
    <div class="img-container">
      <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
  `

  pokediv.innerHTML = pokemonInnerHTML
  pokeContainer.appendChild(pokediv)

}

fetchPokemons()
