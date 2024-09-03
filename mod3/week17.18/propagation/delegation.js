window.addEventListener("DOMContentLoaded", event => {

    document.getElementById("list").addEventListener("click", event => {
        console.log(event.target.innerHTML); // Because of bubbling, clicking ANY of the items in the list will cause the click to bubble up to the 'ul' element, then print the name of the list item that was clicked since our console.log prints the "innerHTML" property of the 'target' that was clicked. If you click item 4, for example, the click bubbles up to 'ul', triggers its event listener, then prints "item 4" since that's was the target of the click. //^ This way, you can avoid adding eventListeners to every single item of the list. Instead, you can just add a listener to the 'ul' and then let bubbling do the rest of the work for you.
        // console.log(event.currentTarget.id); // This console.log will always print the 'ul' element.
    });
})

//! This process of using bubbling (propogation) to make code more clean and efficient is called "event delegation"
