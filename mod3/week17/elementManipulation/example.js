const addH1 = () => {

    const newElement = document.createElement("h1"); // First, create the new h1 element using the 'document.createElement("")' method

    newElement.innerText = "Hello World!"; // Then put some text into the h1 by accesing the 'innerText' property of our 'newElement' object

    document.body.appendChild(newElement); // Then use the 'appendChild()' method to add the new element and its content into the DOM
}

//! Alternatively

const addH2 = () => {

    document.body.innerHTML = "<h2>Hello Again!</h2>";
}

window.onload = addH1; // Finally, run the script once the page has loaded.
// window.onload = addH2;

const removeH2 = () => {

    const h2 = document.getElementsByTagName("h2");
    h2.remove;
}

// window.onload = removeH2;
// window.onload = addH1;
