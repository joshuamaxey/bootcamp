//! As we have already briefly explored, we can create new HTML elements using the .createElement("elementType") method.

const h3Add = () => {

    const h3 = document.createElement("h3") // Here we create a new h3

    h3.innerText = "This is an Extra Heading" // Then we key into the .innerText property of the element to add text to the new heading

    let text = document.createTextNode("This is an Extra Heading (Alternative)") // We can also add text to the new heading by creating a new text node and appending it to our new h3. Both methods work. Comment out lines 9-10 here to see the original 'extra heading' text.
    h3.appendChild(text);

    document.body.appendChild(h3) // Then we append the new h3 to the body of the document. If you open our document with liveserver and scroll to the bottom, you will now see the new h3 (You will see BOTH headings because we have used both methods here. Comment one of them out to isolate either the original or alternative heading alone)
}

//! There is more than one way to add elements. Consider this alternative syntax:

// const h4Add = () => {

//     document.body.innerHTML = "<h4>I'm a Smaller Extra Heading</h4>"
// }

//! We can also remove elements in the same way

const h3Remove = () => {

    let h3List = document.getElementsByTagName("h3"); // This returns an HTMLCollection, so to grab the h3 element itself, we have to key into the collection like this:
    console.log(h3List)

    let h3 = h3List[0];
    console.log(h3) // prints "<h3></h3>"

    h3.remove(); // Now the h3 with "This is an Extra Heading" is gone. Comment out the invocation of this function on line 39 and the heading will re-appear.
}

window.onload = () => {

    h3Add();
    // h4Add();
    h3Remove();
}
