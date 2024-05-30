export function setUpApiGameEvents() {
    document.getElementById('fetch-pokemon').addEventListener('click', () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(response => response.json())
            .then(data => {
                console.log('Response received');
                const pokemonList = document.getElementById('pokemon-list');
                pokemonList.innerHTML = '';
                data.results.forEach(pokemon => {
                    console.log('Data processed and converted to JSON');
                    fetch(pokemon.url)
                        .then(response => response.json())
                        .then(pokemonDetails => {
                            const listItem = document.createElement('li');


                            const image = document.createElement('img');
                            image.src = pokemonDetails.sprites.front_default;
                            image.alt = `Image of ${pokemonDetails.name}`;
                            image.style.width = '100px';


                            const textContent = document.createElement('span');
                            textContent.textContent = `${pokemonDetails.name} - Base experience: ${pokemonDetails.base_experience}`;


                            listItem.appendChild(image);
                            listItem.appendChild(textContent);
                            pokemonList.appendChild(listItem);
                        });
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
            console.log('Fetch request sent');
    });
}