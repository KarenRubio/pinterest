const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search');
const pokeballContainer = document.querySelector('#pokeball-container');
const pokemonContainer = document.querySelector('#pokemon-container');

searchForm.addEventListener('submit', e => {
	e.preventDefault();

	const pokemonName = searchInput.value.toLowerCase().trim();

	if (!pokemonName) return;

	pokeballContainer.style.display = 'block';

	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
		.then(res => res.json())
		.then(data => {
			pokeballContainer.style.display = 'none';

			const pokemon = {
				name: data.name,
				image: data.sprites.front_default,
				height: data.height,
				weight: data.weight
			};

			displayPokemon(pokemon);
		})
		.catch(err => {
			pokeballContainer.style.display = 'none';
			alert('Pokemon not found');
		});
});

function displayPokemon(pokemon) {
	const pokemonHTML = `
		<div>
			<img src="${pokemon.image}" alt="${pokemon.name}">
			<h2>${pokemon.name}</h2>
			<p>Height: ${pokemon.height}</p>
			<p>Weight: ${pokemon.weight}</p>
		</div>
	`;

	pokemonContainer.innerHTML = pokemonHTML;
	pokemonContainer.style.display = 'block';
}
