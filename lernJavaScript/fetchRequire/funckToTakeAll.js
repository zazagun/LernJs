const getData = url => {
            return new Promise((resolve, reject) => {
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        console.log(response)
                        return response.json();
                    })
                    .then(json => resolve(json))
                    .catch(error => reject(error));
            })
        }


        
    getData('https://jsonplaceholder.typicode.com/posts')
        .then(res => {console.log(res)})
        .catch(error => console.log(error.name))