function buscarPokemon(){
    let pokemon = document.getElementById("pokemon").value;
    pokemon = pokemon.toLowerCase();
    fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon)
    .then(response => response.json())
    .then(data => {
        let nombre = document.getElementById("nombrePokemon");
        nombre.textContent = data.name;
        let peso = document.getElementById("pesoPokemon");
        peso.textContent = "Peso: "+data.weight;
        let habilidadesCount = data.abilities;
        let habilidades = document.getElementById("habilidadPokemon");
        habilidades.textContent = "Habilidades: ";
        habilidadesCount.forEach(abilities => {
            document.createElement("li");
            habilidades.append(abilities.ability.name);
            habilidades.append(', ')
        });
    })
    .catch(error => console.log("Error: "+error));
}