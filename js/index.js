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
        habilidadesCount.forEach((abilities, index) => {
            if (index === habilidadesCount.length - 1) {
                habilidades.append(abilities.ability.name+'.')
            }
            else{
                habilidades.append(abilities.ability.name+', ');
            };
        });          
        let baseExperience = document.getElementById("baseExperiencePokemon");
        baseExperience.textContent = "Base Experience => "+data.base_experience;
        let formas = document.getElementById("formasPokemon");
        formas.textContent = "Formas => ";
        let formasCount = data.forms;
        formasCount.forEach((forms, index) => {
            if(index === formasCount.length - 1){
                formas.append(forms.name+'.');
            }
            else{
                formas.append(forms.name+', ');
            }
        });
    })
    .catch(error => console.log("Error: "+error));
}