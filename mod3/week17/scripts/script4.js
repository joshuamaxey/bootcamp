window.onload = () => { // When we use window.onload, we tell JavaScript NOT to run our script until the DOM and all other assets (including CSS, images, and other media) are loaded. The code in this script is dependent on the HTML elements in the body of our HTML file, so we will throw an error if we try to run this script before the body of the document has loaded. If we don't want to use window.onload, we could alternatively import our script at the BOTTOM of the body of our document so that the script will run after the body has been loaded.

    window.document.title = "New Title"

    let bodyElements = document.body.children; // Here we grab ALL of the elements within the body of the HTML file and assign them to a variable called 'bodyElements', which is an HTMLCollection of all of the elements contained within the body element.
    console.log(bodyElements);

    let div = bodyElements[1]; // Here, we key into the HTML collection at index 1 to grab the 'div' elements.
    //^ (div = document.body.children[1])
    console.log(div);

    let list = div.children; // Here, we grab all of the children of the 'div' from above, then assign them to a variable called 'list'. The div element in our HTML file only has one child, and it's a 'ul'. Because we used ".children" to grab all of the children of the div element, we return an HTMLCollection containing only the single child of the div element (the ul). For this reason, if we want to access the ul directly, we have to key into our "list" at index 0.
    console.log(list) // prints "HTMLCollection [ul]"

    let ul = list[0]; // prints the "<ul></ul>" tag
    console.log(ul);

    let items = ul.children; // When we graab the children of our "ul" element, we return an HTMLCollection which contains the three 'li' list items within the ul element.
    console.log(items); // prints "HTMLCollection [li, li, li]"

    let thirdItem = items[2]; // Lets say that we want to grab the third list item in the list. To do this, we can key into our list of items at index 2.
    console.log(thirdItem) // prints the third 'li' in the list.

    let thirdItemText = thirdItem.innerText; // Now we have our third item selected. What if we want to print the text within the <li></li> tag instead of the element itself? We can key into the 'innerText' property of the element.
    console.log(thirdItemText) // prints "Item 3"

    thirdItem.innerText = "Replacement Text"; // Here we change the innerText of the third li in the list by keying into its 'innerText' property directly. Now if we open the HTML file with liveserver and look at the third item in the list displayed on the page, we'll see that it reads "Replacement Text" instead of "Item 3"
}
