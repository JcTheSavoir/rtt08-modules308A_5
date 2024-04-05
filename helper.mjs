// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/
export const getPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    const jsonData = await response.json();
    let body =document.querySelector('body')
    console.log(jsonData[0].url)
    console.log(jsonData[1].url)
    const imageContainer = document.createElement('div')
    imageContainer.setAttribute('id', "allImages")
    const imageTitle = document.createElement('h1')
    imageTitle.innerHTML = "Employee Photos";
    body.append(imageTitle)
    body.append(imageContainer)
    for(let i=0; i < 100; i++){
        console.log(i);
        let image = document.createElement('img');
        image.setAttribute('src', jsonData[i].url);
        image.setAttribute('class', 'fetchedImages');
        imageContainer.append(image);
    }
}

