//! Right now our document contains a heading ("Event Listeners"), a button that reads "Click Me!", and a paragraph below the button which tells us how many times the button has been clicked. Right now, nothing happens when we click the button. Our goal is to write code that causes the 'count' to increment each time the button is pressed.

window.addEventListener("DOMContentLoaded", event => { // The first thing we do is add an event listener to the window of type "DOMContentLoaded". None of the code inside this function will run until the entire DOM has loaded. This is different than using window.onload because when we use window.onload, our code doesn't run until the DOM, CSS, media, etc have all loaded. When we use DOMContentLoaded, our script will run after the DOM is loaded without waiting for the CSS, media, etc. This is useful when we have content in our script that is depdenent on the body of the document but not on the CSS, media, or other scripts because it allows us to begin executing our script after the body has been loaded without requiring us to wait for all of the other parts of the page to load.

    document.body.className = "i-got-loaded" // Here, we wait for the DOM to load completely and then add the class "i-got-loaded" to the <body></body> tag of our document. The important thing to note here is that this didin't happen until after the DOM was loaded completely but happens BEFORE we load other parts of the window.
    console.log(document.body.className); // prints "i-got-loaded" to the console

    const button = document.body.children[2]; // Here we slect the 'button' element based on its position in the document. NOTE that the button also has an id, so alternatively, we could select it like this:
    const buttonAlt = document.getElementById("button1"); // Both of these methods will work.
    console.log(button); // prints the button to the console
    console.log(buttonAlt); // prints the button to the console

    const count = document.getElementById("count"); // Next, we grab the 'span' tag by its id 'count' and save it to a variable called 'count'. This span tag contains the number 0, which we want to inrease each time the the button is clicked.
    console.log(count); // if we print this, we see the span tag with the id "count" printed to the console
    console.log(count.innerText); // Here we'll see "0" printed to the console because that is the text contained within the 'count' span by default

    let clicks = 0; // initialize a new variable 'clicks' to represent the number of times the button has been clicked. This will allow us to increment the value of 'clicks' each time the button is clicked

    buttonAlt.addEventListener("click", event => { // Finally, we add an event listener to our button of type "click". This listener will listen for when the button is clicked. When we click the button, the following code executes:

        clicks += 1; // increment the value of "clicks" by 1
        count.innerHTML = clicks; // Set the "innerHTML" (the value inside of the 'count' span tag) equal to "clicks" (which represents the number of times the button has been clicked)
        console.log(clicks); // For visualization, we'll also print "clicks" to the console. This value will increment by 1 each time the button is clicked.
    });

    //! We also have a checkbox below the "Click Me!" button. There is a paragraph contained within a div below the checkbox which says "The checkbox is checked", and we want this text to ONLY be visible when the checkbox is checked.

    const checkbox = document.getElementById("on-off");
    console.log(checkbox); // prints "<input type="checkbox" id="on-off" control-id="ControlID-2">" to the console

    const checked = document.getElementById("checked1");
    checked.style.display = "none"; // Here we're gonna set the "checked" statement to be invisible by default
    console.log(checked); // prints our <div id="checked"></div>

    checkbox.addEventListener("click", event => {

        if (checkbox.checked) { // If the checkbox is checked...
            checked.style.display = "block"; // Then we'll display the "checked" statement in block style
            checked.style.backgroundColor = "black"
            checked.style.color = "white"
        } else { // Otherwise, if the checkbox is not checked...
            checked.style.display = "none"; // The "checked" statement will not display at all.
        }
    })

    //! There is an alternative strategy that we can use to accomplish the same thing with a second checkbox. Instead of changing the display property directly using .style.display, we can use .classList.add and .classList.remove to add and remove the CSS classes "show" and "hide" such that the text will show when the box is checked and will be hidden when it is not checked.
    //^ Note that this requires that we create a CSS stylesheet as well as the the CSS relevant CSS rules so that we can control whether the text is visible based on whether the "show" or "hide" class is present on the given HTML element.

    const checkbox2 = document.getElementById("off-on");
    console.log(checkbox2);

    const checked2 = document.getElementById("checked2");
    checked2.setAttribute("class", "hide")
    console.log(checked2);

    checkbox2.addEventListener("click", event => {

        if (checkbox2.checked) {
            checked2.classList.remove("hide");
            checked2.classList.add("show");
        } else {
            checked2.classList.remove("show");
            checked2.classList.add("hide");
        }
    })

    //! At the bottom of the page, there is an h2 titled "Text Input" and below it is a text input box. There is also a div with the id "mirrored" beneath the input, but it currently has no content so it is not visible. We want the "mirrored" div to mirror the text that's in the input box.

    const mirror = document.getElementById("mirrored"); // First, we grab the "div" located below the input box where we want to show the mirrored text by its id "mirrored" and save it to a varaible "mirror"

    let original = document.getElementById("original"); // Then we grab the text box by its id "original" and save it to a variable as well

    original.addEventListener("input", event => { // Here we add an event listener to our "original" text input box of type "input". Input listeners fire whenever the value of the element changes. This means that every time we type into the box, this event fires.
        let text = original.value; // We take the current text inside of the "original" text box by keying into its "value" property, then save it to a variable "text"
        mirror.innerText = text; // Then we key into the .innerText property of the "mirror" div and set it equal to the "text" that is currently located in the input box.
        mirror.style.color = "gray" // Finally, we also changed the color of the mirrored text to be gray.
    })

    //! There is a slightly more concise way to achieve this same result with respect to the text input box.

    const mirror2 = document.getElementById("mirrored2");

    const original2 = document.getElementById("original2");

    original2.addEventListener("input", event => {
        mirror2.innerText = event.target.value; // Here, instead of explicitly setting a 'text' variable to capture the text inside of the original2 input box, we just reference the "target" of the event (which IS the original2 input box) and then set that as the value of mirror2's .innertext property
    })
})
