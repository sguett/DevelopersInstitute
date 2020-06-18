const url = 'https://pokeapi.co/api/v2/pokemon/'
let info = 0;

// choose a random pokemon
const randPokemon = async () => {
    deleteElements() // delete previous elements
    loadIcon() // display loading icon and text
    try {
        const rand = Math.floor(Math.random() * 965)
        const divImg = document.getElementById('imgPokemon');
        const divText = document.getElementById('infoPokemon');

        const response = await fetch(url + rand);
        const pokemon = await response.json();
        info = pokemon;
        deleteElements() // delete elements loading
        await build(pokemon, divImg, divText); // call function build to display image and texts
        // console.log(pokemon);
    } catch (error) { // if error
        deleteElements() // delete elements displayed
        // display error message
        const divText = document.getElementById('infoPokemon');
        const errorMessage = document.createElement("h1")

        errorMessage.style.fontSize = "26px";

        errorMessage.style.marginTop = "30px";

        errorMessage.innerText = `Oh no! That Pokemon isn't available...`;
        divText.appendChild(errorMessage);
    }
}

// if we want a previous pokemon, call this
const previousPokemon = async () => {
    deleteElements()
    loadIcon()

    try {
        const response = await fetch(url + `${--info.id}/`);
        const pokemon = await response.json();
        info = pokemon;
        const divImg = document.getElementById('imgPokemon');
        const divText = document.getElementById('infoPokemon');
        deleteElements()
        await build(pokemon, divImg, divText);
    } catch (error) {
        deleteElements()
        const divText = document.getElementById('infoPokemon');
        const errorMessage = document.createElement("h1")
        errorMessage.style.fontSize = "26px";
        errorMessage.style.marginTop = "30px";
        errorMessage.innerText = `Oh no! That Pokemon isn't available...`;
        divText.appendChild(errorMessage);
    }
}

// if we want a next pokemon, call this
const nextPokemon = async () => {
    deleteElements()
    loadIcon()
    try {
        const response = await fetch(url + `${++info.id}/`);
        const pokemon = await response.json();
        info = pokemon;
        const divImg = document.getElementById('imgPokemon');
        const divText = document.getElementById('infoPokemon');
        deleteElements()
        await build(pokemon, divImg, divText);
    } catch (error) {
        deleteElements()
        const divText = document.getElementById('infoPokemon');
        const errorMessage = document.createElement("h1")
        errorMessage.style.fontSize = "26px";
        errorMessage.style.marginTop = "30px";
        errorMessage.innerText = `Oh no! That Pokemon isn't available...`;
        divText.appendChild(errorMessage);
    }
}

// function for delete elements (image and texts) on screen
const deleteElements = () => {
    const divImg = document.getElementById('imgPokemon');
    const divText = document.getElementById('infoPokemon');
    if (divImg.childElementCount > 0) {
        let child = Array.from(divImg.children)
        child.forEach(element => element.remove())
    }
    if (divText.childElementCount > 0) {
        let child = Array.from(divText.children)
        child.forEach(element => element.remove())
    }
}

// Load icon and text before display results
const loadIcon = () => {
    const divText = document.getElementById('infoPokemon');
    let div = document.createElement("div");
    let i = document.createElement("i");
    let text = document.createElement("div");
    div.setAttribute("class", "fa-3x");
    i.setAttribute("class", "fas fa-spinner fa-pulse");
    text.innerText = "Loading";
    text.setAttribute("style", "font-size: 30px");
    div.appendChild(i);
    div.appendChild(text);
    divText.appendChild(div);
}

// call this to display pokemen elements on page
const build = async (pokemon, divImg, divText) => {
    const img = document.createElement("img")
    img.setAttribute("src", await pokemon.sprites.front_default)
    img.setAttribute("style", "width: 150px;height: 150px")

    divImg.appendChild(img)

    const name = document.createElement("h1")
    name.innerText = await pokemon.name;

    const id = document.createElement("div")
    id.innerText = "Pokemon n° " + await pokemon.id;

    const height = document.createElement("div")
    height.innerText = "Height: " + await pokemon.height;

    const weight = document.createElement("div")
    weight.innerText = "Weight: " + await pokemon.weight;

    const type = document.createElement("div")
    type.innerText = "Type: " + await pokemon.types[0].type.name;

    divText.appendChild(name);
    divText.appendChild(id);
    divText.appendChild(height);
    divText.appendChild(weight);
    divText.appendChild(type);
}