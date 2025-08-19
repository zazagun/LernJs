const axios = require("axios")

axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(resOfJSON => console.log(resOfJSON))


//не нужно писать .json()