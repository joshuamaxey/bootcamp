/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here

        const breed = url.split('/')[4];

        ["https:", "", "images.dog.ceo", "breeds", "hound-afghan","n02088094_1007.jpg"]

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here

        const newList = document.createElement('li');
        const newEl = document.createElement('figure');
        const newImg = document.createElement('img');

        newImg.src = url;
        newImg.alt = breed;

        const newFig = document.createElement('figcaption')
        newFig.textContent = breed;

        newEl.appendChild(newImg);
        newEl.appendChild(newFig);

        newList.appendChild(newEl);

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

        const gallery = document.querySelector(".gallery ul")

        gallery.appendChild(newList);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    const firstCard = document.querySelectorAll("li")[0];

    /*-------------------- Remove the first dog card --------------------- */
    firstCard.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const allCards = document.querySelectorAll("li");
    const lastCards = allCards[allCards.length - 1]
    lastCards.remove();

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
