async function getData(url){
    return await new Promise((resolve, reject) => {
        fetch(url)
         .then(response => resolve(response.json()))
         .catch(error => reject(error));
    })
}

//get status

getData("https://jsonplaceholder.typicode.com/posts")
.then(res => {
    res.forEach(comment =>{
        let comentCLass = document.createElement("div")
        comentCLass.classList.add("commentClass")

        
        let pWithId = document.createElement("p")
        pWithId.classList.add("idClass")
        pWithId.textContent = "userId: " + comment.userId
        comentCLass.appendChild(pWithId)

        let pWithComentId = document.createElement("p")
        pWithComentId.classList.add("commentIdClass")
        pWithComentId.textContent = "commentId: " + comment.id
        comentCLass.appendChild(pWithComentId)

        let titleOfComment = document.createElement("p")
        titleOfComment.classList.add("titleClass")
        titleOfComment.textContent = "title: " + comment.title
        comentCLass.appendChild(titleOfComment)

        let commentBody = document.createElement("p")
        commentBody.classList.add("bodyClass")
        commentBody.textContent = "comment: " + comment.body
        comentCLass.appendChild(commentBody)

        let root = document.getElementById('root')
        root.appendChild(comentCLass)
    })
})