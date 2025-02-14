
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");


const sendHTTP = (method, url, data) =>{
    return fetch(url,{
        method: method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    }).then((Response) => {return Response.json()} )
} 



async function fechtPost() {
    try {
        let responde = await sendHTTP("GET","https://jsonplaceholder.typicode.com/posts")
        
        responde.forEach(post => {
            let postContainer = document.createElement("article");
            postContainer.id = "post"+post.id
            postContainer.classList.add("post-item") 

            let title = document.createElement("h2")
            title.textContent = post.title

            let body = document.createElement("p") 
            body.textContent = post.body 

            let button = document.createElement('button')
            button.textContent = 'DELETE HERE' 

            postContainer.append(title)
            postContainer.append(body)
            postContainer.append(button) 
            listElement.append(postContainer)
        })
    } catch (error){
        console.error(error);
    }
}

fetchButton.addEventListener('click',fechtPost)


function createPost(tite, body) {
    let idUser = Math.random() * 500
    let post = {
        tite: tite,
        body: body,
        useId: idUser
    }

        sendHTTP("POST","https://jsonplaceholder.typicode.com/posts",post)
        .then (Response => {
            console.log("post created :", Response)
        })
        .catch(error =>{
            console.error(error);
        })

}

function deletPost(IdPost) {
    sendHTTP("DELETE",`https://jsonplaceholder.typicode.com/posts/${IdPost}`)
    .then(()=>{
        let remov = document.getElementById(`${IdPost}`)
        remov.remove()
        console.log(`Post ${IdPost} eliminado`);
    })
    .catch(error =>{
        console.error(error);
    })
}


form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let tite = event.currentTarget.querySelector("#title").value
    let conte = event.currentTarget.querySelector("#content").value

    createPost(tite,conte)
})

postList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const postId = event.target.closest("article").id;
        deletPost(postId);
    }
});

