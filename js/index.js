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
        habilidades.textContent = "Habilidades => ";
        habilidadesCount.forEach(abilities => {
            document.createElement("p");
            habilidades.append(abilities.ability.name);
            habilidades.append(', ')
        });
        let baseExperience = document.getElementById("baseExperiencePokemon");
        baseExperience.textContent = "Base Experience => "+data.base_experience;
        let formas = document.getElementById("formasPokemon");
        formas.textContent = "Formas => ";
        let formasCount = data.forms;
        formasCount.forEach(forms => {
            formas.append(forms.name);
            formas.append(', ')
        });
    })
    .catch(error => console.log("Error: "+error));
}