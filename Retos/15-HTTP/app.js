/*
 * EJERCICIO:
 * Utilizando un mecanismo de peticiones HTTP de tu lenguaje, realiza
 * una petición a la web que tú quieras, verifica que dicha petición
 * fue exitosa y muestra por consola el contenido de la web.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la PokéAPI (https://pokeapi.co), crea un programa por
 * terminal al que le puedas solicitar información de un Pokémon concreto
 * utilizando su nombre o número.
 * - Muestra el nombre, id, peso, altura y tipo(s) del Pokémon
 * - Muestra el nombre de su cadena de evoluciones
 * - Muestra los juegos en los que aparece
 * - Controla posibles errores
 */



// Solución:

async function getData () {
    try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/1")
        let data = await response.json()
        console.log(data)
    } catch (error){
        console.error(error);
        
    }
}

//getData()
/*
async function getListPokemon () {
    let url = "https://pokeapi.co/api/v2/pokemon/?limit=151"
    try {
        let response = await fetch(url)
        let data = await response.json()
        let pokemons = data.results
        pokemons.forEach(pokemon => {
            console.log(pokemon)
        })
    } catch (error){
        console.error('error al cargar la lista de pokes: ', error);
        
    }
}
getListPokemon() */

const img = document.querySelector('#img')   
const bnt = document.querySelector('button')
const input = document.querySelector('input')
const name = document.querySelector('#name')
const text = document.querySelector('#text') 
const search = document.querySelector('.search') 
const btnS = document.querySelector('.search button')

async function getPokemon (name) {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`
    try {
        let response = await fetch(url)
        let data = await response.json()
        let pokemon = {
            name: data.name,
            id: data.id,
            weight: data.weight,
            height: data.height,
            types: data.types,
            sprite: data.sprites.front_default
        }
        return pokemon
    } catch (error){
        console.error('error al cargar el pokemo: ', error);
        
    }
}

async function getEvolutionChain (name) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${name}`
    try {
        let response = await fetch(url)
        let data = await response.json()
        let evolutionChain = data.evolution_chain.url
        let responseEvolution = await fetch(evolutionChain)
        let dataEvolution = await responseEvolution.json()
        let chain = dataEvolution.chain
        let evolution = []
        while (chain.evolves_to.length > 0) {
            evolution.push(chain.species.name)
            chain = chain.evolves_to[0]
        }
        evolution.push(chain.species.name)
        return evolution
    } catch (error){
        console.error('error al cargar la cadena de evolucion: ', error);
        
    }
}


function printPokemon (pokemon, evolution) {
    if (pokemon === undefined) {
        text.innerHTML = ''
        img.src = 'https://img.icons8.com/?size=100&id=SGNJIgn58eoK&format=png&color=000000'
        name.textContent = 'No se encontro el pokemon ,intente nuevamente !!!!'
        return
    }

    text.innerHTML = ''
    name.textContent = pokemon.name 
    let lista = document.createElement('ul')
    let itemId = document.createElement('li')
    let itemAltura = document.createElement('li')
    let itemPeso = document.createElement('li')
    let itemTipos = document.createElement('li')
    let itemEvolucion = document.createElement('li')
    itemId.textContent = `ID: #${pokemon.id}`
    itemAltura.textContent = `Altura: ${pokemon.height} m`
    itemPeso.textContent = `Peso: ${pokemon.weight} kg`
    let types = pokemon.types.map(type => type.type.name)   
    itemTipos.textContent =  `Tipos: ${types.join(' - ')}` 
    itemEvolucion.textContent = `Evolucion: ${evolution.join(' -> ')}`
    lista.appendChild(itemId)
    lista.appendChild(itemAltura)
    lista.appendChild(itemPeso)
    lista.appendChild(itemTipos)
    lista.appendChild(itemEvolucion)
    text.appendChild(lista)
    img.src = pokemon.sprite
    console.log('Evolucion: ', evolution.join(' -> '))
}

async function main (name) {
    let pokemon = await getPokemon(name)
    let evolution = await getEvolutionChain(name)
    printPokemon(pokemon, evolution)
}

bnt.addEventListener('click', (e) => {
    e.preventDefault()
    let name = document.querySelector('input').value
    main(name)
})
input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        let name = document.querySelector('input').value
        main(name)
    }
})
