//! In addition to referencing and creating HTML elements, we can also add, remove, and manipulate the attributes of HTML elements using JavaScript.

//* Element.getAttribute();
//* Element.setAttribute();
//* Element.removeAttribute();

const getDiv4Id = () => {


    let div4 = document.getElementById("div4"); // Here we select the fourth div in our document by its id "div4"

    let idDiv4 = div4.getAttribute("id"); // retrieves the value of the 'id' attribute of div4

    console.log(idDiv4) // prints 'div4' (the id of the fourth div) to the console
}

const changeDiv4Id = () => {

    let div4 = document.getElementById("div4"); // Here we select div4 by its id again

    div4.setAttribute("id", "newID"); // Then we use the .setAttribute method to set the 'id' of div4 to "newID" (instead of "div4")

    let idDiv4 = div4.getAttribute("id"); // After we change the id of the fourth div, we select the new id and save it to a variable using the .getAttribute method

    console.log(idDiv4); // prints "newID" instead of "div4"
}

const removeDiv4Id = () => {

    let div4 = document.getElementById("newID"); // Here we select the fourth div by its new id ("newID")

    div4.removeAttribute("id"); // Then we use the .removeAttribute method to remove the id altogether

    console.log(div4.getAttribute("id")); // Now when we try to acces the 'id' attribute of div4 using the .getAttribute method, we return 'null' because we have removed the id from the element so it no longer exists.
}

window.onload = () => { // Finally, we make sure that our script doesn't run until after the DOM, CSS, media, etc have loaded completely. 

    getDiv4Id();
    changeDiv4Id();
    removeDiv4Id();
}
