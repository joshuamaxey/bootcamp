const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    let seededFruits = document.getElementsByClassName("seed"); //^ HTMLCollection
    console.log(seededFruits)
    let seededFruits2 = document.querySelectorAll(".seed") //^ Nodelist
    console.log(seededFruits2)

    console.log(seededFruits[0].outerText)
    console.log(seededFruits[1].outerText)

    // 2. Get all seedless fruit elements
    // Your code here
    let seedlessFruits = document.getElementsByClassName("seedless"); //^ HTMLCollection
    console.log(seedlessFruits)
    let seedlessFruits2 = document.querySelectorAll(".seedless") //^ Nodelist
    console.log(seedlessFruits2);

    console.log(seedlessFruits[0].outerText)
    console.log(seedlessFruits[1].outerText)

    // 3. Get first seedless fruit element
    let firstSeedlessFruit = document.querySelector("li.seedless");
    console.log(firstSeedlessFruit)
    let firstSeedless = document.querySelectorAll(".seedless")[0];
    console.log(firstSeedless)

    /* Section 2 */
    // 4. Get inner span with text "you"
    let innerSpan = document.querySelector("span")
    console.log(innerSpan)
    let innerSpan2 = document.getElementsByTagName("span"); //^ since its the only span tag in the file
    console.log(innerSpan2)

    console.log(innerSpan2[0].innerText)

    //! ALT (if there were multiple spans):

    const spans = document.querySelectorAll("span")
    const spanArray = Array.from(spans);
    const youSpan = spanArray.find(span => span.innerText === "you");
    console.log(youSpan);

    // 5. Get all children of element "wrapper"
    let wrapperChildren = document.querySelector("#wrapper")
    console.log(wrapperChildren)
    let wrapperChildrenAlt = document.getElementById("wrapper")
    console.log(wrapperChildrenAlt)

    // 6. Get all odd number list items in the list
    let oddListItems = document.querySelectorAll("li.odd")
    console.log(oddListItems)

    console.log(oddListItems[0].innerText)
    console.log(oddListItems[1].innerText)

    // 7. Get all even number list items in the list
    let orderedListItems = document.querySelectorAll("ol > li")
    let evenListItem1 = orderedListItems[1]
    let evenListItem2 = orderedListItems[3];
    console.log(evenListItem1, evenListItem2);

    /* Section 3 */
    // 8. Get all tech companies without a class name
    let google = document.querySelector("section > ul > li")
    console.log(google);

    // 9. Get "Amazon" list element
    let amazon = document.querySelector("a.shopping")
    console.log(amazon);

    // 10. Get all unicorn list elements (not the image element)
    let unicorns = document.querySelectorAll("li > img.unicorn");
    console.log(unicorns)
}

window.onload = select;
