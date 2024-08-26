//! Adding a button that displays how many times it has been clicked

window.addEventListener("DOMContentLoaded", event => {

    // NOTE that when our script is imported in the <head></head> of the HTML file (which our script is), event listeners must b4 declared inside the callback of DOMContentLoaded. Otherwise .getElementById() will return undefined since the script will run before the body has been parsed and the HTML elements in question have been loaded.

    const button = document.getElementById("increment-count");

    const count = document.getElementById("clicked-count");

    let clicks = 0;

    button.addEventListener("click", event => {

        clicks += 1;
        count.innerHTML = clicks;
    })
})

//! Handling a checkbox "check" event


window.addEventListener("DOMContentLoaded", event => {

    const checkbox = document.getElementById("on-0ff");
    const divShowHide = document.getElementById("now-you-see-me")

    checkbox.addEventListener("click", event => {

        if (checkbox.checked) {
            divShowHide.style.display = "block";
        } else {
            divShowHide.style.display = "none";
        }
    })
})
