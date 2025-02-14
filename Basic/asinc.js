console.log('hola mundo'); 
// promesas con fetch
function fetchtData(){
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())

        .then((data)=> console.log(data))

        .catch((erro) => console.error(erro))


}

//promesas con async await 

async function getData() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character") 
        let Data = await response.json() 
        console.log(Data); 
    } catch (error) {
        console.error(error)
    }
}

// For await of
const urls = [

    "https://rickandmortyapi.com/api/character",
    
    "https://rickandmortyapi.com/api/location",
    
    "https://rickandmortyapi.com/api/episode"
    
    ];
    
    async function fetchNewData() {
    
    try {
    
    for await (let url of urls) {
    
    let response = await fetch(url);
    
    let data = await response.json();
    
    console.log(data);
    
    }
    
    } catch (error) {
    
    console.log(error);
    
    }
    
    }

let mortyData = getData()

