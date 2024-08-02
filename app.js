document.addEventListener("DOMContentLoaded", ()=>{

let url = 'https://api.quotable.io/random'

fetch(url)
.then (response=>response.json())
.then(data=>{
    console.log(data);

    result.innerHTML = 
    `
     <p>${data.content} </p>
        <p> ${data.author} </p>
    `
})

})