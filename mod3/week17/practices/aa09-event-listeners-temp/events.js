// Your code here

//! When the DOM is loaded, alert the user that the DOM has loaded.

window.addEventListener("DOMContentLoaded", event => { // First, we invoke the 'addEventListener' method on the window object with the condition "DOMContentLoaded" so that it will wait until the DOM has loaded completely.

    let num1 = alert("The DOM is fully loaded!"); // Once the DOM has loaded completely, we use JavaScript's built-in "alert" method to send the notification to the user.

    //! When the 'red' input contains the word 'red', change the background color of the input to red. Otherwise, remain transparent.

    const redInput = document.getElementById("red-input"); // Since the relevant input tag has an id of 'red-input' we can use the document.getElementById() method to target the input by its id and assign it to a variable 'redInput' //^ Select the input element by its id

    let num2 = redInput.addEventListener("input", function () { // Then we invoke the .addEventListener method on 'redInput' (as its target) and give it a listener type of 'input' //^ Add an event listener for the 'input' event

        if (redInput.value.toLowerCase() === 'red') { // Check to see if the value that is present within redInput is 'red'... //^ Check if the value of the input is 'red'

            redInput.style.backgroundColor = 'red'; // ...If the value is 'red' then we set the background color of redInput to red. //^ If so, set background color to red
        } else {

            redInput.style.backgroundColor = 'transparent'; // Otherwise, if the value of the text in the input is NOT 'red' then we set the background color to transparent. //^ Otherwise, set background color to transparent (no change)
        }
    })

    //! When the "add-item" BUTTON is pressed, a new 'li' with the value from the 'list-add' input is created and then appended to the 'ul'

    let list = document.getElementsByTagName("ul")[0]; // Target the 'ul' element and save it in a variable 'list' for later use. //^ Notice that we had to access index [0] in order to target the specific element because using ".getElementsByTagName" returns an HTMLCollection. Even if there is only one element inside (which is the case here), we still have to key into the list at index [0] in order to access the individual element (in this case, the individual <ul></ul> element)

    let addItem = document.getElementById("add-item") // Here grab the button and save it in a variable 'addItem' so that we can target the button with an event listener

    addItem.addEventListener("click", function () { // add the event listener to the 'addItem' button and have it listen for when the button is clicked (listener type: click)

        let text = document.getElementById("list-add").value; // target the text "value" in the 'list-add' input (whatever text is currently present within the input box) and save it to a variable 'text'

        let newLi = document.createElement("li"); // create a new 'li' element
        newLi.textContent = text; // Set the content of our 'newLi' to the value of the 'text' variable we saved above from the 'list-add' input

        list.appendChild(newLi); // finally, append our 'newLi' with the text input to the 'list' variable from line 42'
    })

    //! When a color is selected with the "color" type input with the id of "color-select", change the background color of the <section> tag with the id "section-3" to the selected color

    let selector = document.getElementById("color-select"); // Target the color 'input' tag by its id and save it in a variable 'selector'

    let section = document.getElementById("section-3"); // Target the relevant 'section' tag by its id 'section-3' and save it in a variable 'section'


    let num4 = selector.addEventListener("input", function () { // Add an event listener to our color 'input' box that listens for when an 'input' (color) has been chosen.

        let selectedColor = selector.value; // When a color has been chosen, we save it (selector.value) to a variable 'selectedColor'

        section.style.backgroundColor = selectedColor; // Then we set the background color of our 'section' (section 3, line 73) to the 'selectedColor'
    })

    //! Remove Listeners

    let button = getElementById("remove-listeners")

    button.addEventListener("click", () => {

        
    })
});
