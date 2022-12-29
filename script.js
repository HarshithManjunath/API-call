
const container = document.getElementsByClassName('container')[0];
// The reason for the error "container.append is not a function" was because getElementsByClassName method
// returns an array like structure. Hence in that array we have to select only one element with that class name.

function processData(response){
    const data = response;

    for(i=0; i<data.length; i++) {
        // const title = document.createElement("div")
        // title.className = "title"
        // const list = document.createElement("p")

        // list.innerText = `${data[i].title}`

        // const image = document.createElement("div")
        // image.className = "image"
        // const img = document.createElement("img")

        // img.src = `${data[i].url}`

        // title.append(list)
        // image.append(img)
        
        // container.append(title)
        // container.append(image)



        // Create card div
        var card = document.createElement("div");
        card.className = `card ${i}`;
        
        // Create p and img elements and inject the data
        var list = document.createElement("p");
        list.className = "title";
        list.innerText = `${data[i].title}`;
        var urlimg = document.createElement("img");
        urlimg.classList = "image";
        urlimg.setAttribute('src',`${data[i].url}`);

        // Append the p and img elements to the card div as child elements
        card.append(list);
        card.append(urlimg);

        // Append the card element to the container as child element
        container.append(card);


    }
}
let data;
fetch(' http://jsonplaceholder.typicode.com/photos?_start=10&_limit=10 ',{
    method:'GET'
}).then(response => {
    return response.json();
}).then(response => {
    processData(response);
    console.log(response);
})




