//! We can use the DOM API to reference, create, and manipulate DOM elements using JavaScript.

// For instance, lets say that we want to manipulate the second div in our document and update its content.

const secondDivUpdate = () => {

    let secondDiv = document.getElementById("div2"); // Since the div has an id, we can use the .getElementById("id") method to select it.
    console.log(secondDiv); // If we open our document using liveserver and look in the console, we see that the 'div' with the id of "div2" is printed to the console.

    // So now that we've selected the second div, what if we want to manipulate it?

    secondDiv.innerText = "This is the second div (updated)"
    secondDiv.style.backgroundColor = "black"; // Here, we change the background-color of the div to black.
    secondDiv.style.color = "white"; // Here, we change the text to white.
}

const orderedItemsUpdate = () => {

    let orderedItems = document.querySelectorAll("li.ordered"); // Using the .querySelector method allows us to target elements using CSS selectors. If we use "querySelectorAll" like we do here, we will grab all elements that match the search criteria and return them as a nodelist.
    console.log(orderedItems); // prints "NodeList(5) [li.ordered, li.ordered, li.ordered, li.ordered, li.ordered]"

    orderedItems.forEach(li => { // A nodelist is NOT an array, BUT we can iterate over a nodelist using forEach(). In this code, we print "order" to the console once for each element in our nodelist.
        console.log("order") // prints "(5) order"
    })

    orderedItems.forEach(li => { // Here we iterate over each item in our 'orderedItems' nodelist again
        li.innerText = "Updated Text" // This code updates the innerText for each item in our nodelist. If you open our document using liveserver, you'll see that all five of the 'li' items within our 'ol' tag have been updated to contain the text "Updated Text"
    })

    orderedItems[2].innerText = "Patch" // Here we directly target the third item in our orderedItems nodelist and change its innerText to read "Patch" intead of "Updated Text" like the others.

    let orderedItem1 = document.querySelector("li.ordered") // If we use 'querySelector' instead of 'querySelectorAll', then we will only select the FIRST element that matches our criteria.
    console.log(orderedItem1); // prints only the FIRST item in the 'ol' to the console.
}

const newSection = () => { // We can also create new elements, add new content, and manipulate them using JavaScript.

    const newHeading = document.createElement("h2"); // Here, we use the document.createElement("elementType") method to create a new h2.

    newHeading.setAttribute("id", "thirdHeading"); // Then we use the .setAttribute("attributeType", "attributeContent") method to give our new h2 an id of 'thirdHeading'

    const newContent = document.createTextNode("This is the Third Heading"); // Here we create a text node containing the text "This is the Third Heading"

    newHeading.appendChild(newContent); // Then we append our 'newContent' (the new text node) to our newHeading (the h2 we created). This means that our newHeading will now contain the text, "This is the Third Heading";

    document.body.appendChild(newHeading); // Finally, we append our newHeading (the new h2 element we created which contains the text in the text node we created) to the body of the document. Now if we open our document in liveServer and scroll to the bottom of the page, we'll see a new h2 at the end with the corresponding text.
}

window.onload = () => { // Finally, we need to make sure that none of our code runs until the window (DOM, CSS, images, etc) has loaded. To do this, we invoke our functions below within the window.onload method.

    secondDivUpdate();
    orderedItemsUpdate();
    newSection();
}
