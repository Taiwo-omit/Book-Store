export default function createListOfBooks(books) {

    // get the element we want to add our list to
    const listContainer = document.querySelector('#list-container');

    // Creating our new elements
    const title = document.createElement('h2');
    const titleText = document.createTextNode('List of books');
    const list = document.createElement('ul');

    // Looping through the array of Fruits to create a li for each fruit in the array
    // By looping through an array of Fruits we can add as much or as little to our list


    // new code
    for (let i = 0; i < books.length; i++) {
        const listItem = document.createElement('li');
        let nameOfBook = books[i].name;
        let authorOfBook = books[i].author;
        let priceOfBook = books[i].price;
        let descriptionOfBook = books[i].description;
        let imageOfBook = books[i].image;
        listItem.textContent = `${nameOfBook}: ${authorOfBook} ; ${priceOfBook} ; ${descriptionOfBook} ; ${imageOfBook}`
        list.appendChild(listItem);
    }

    title.appendChild(titleText);

    // Now the title and list will be displayed since we have appended it to an element in the DOM.
    listContainer.appendChild(title);
    listContainer.appendChild(list);
}