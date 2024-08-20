const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    let seededFruits = document.getElementsByClassName("seed");
    // return seededFruits
    console.log(seededFruits)
    console.log(seededFruits[0].outerText)
    console.log(seededFruits[1].outerText)

    // 2. Get all seedless fruit elements
    // Your code here
    let seedlessFruits = document.getElementsByClassName("seedless");
    console.log(seedlessFruits)
    console.log(seedlessFruits[0].outerText)
    console.log(seedlessFruits[1].outerText)

    // 3. Get first seedless fruit element
    let firstSeedlessFruit = document.querySelector("li.seedless");
    console.log(firstSeedlessFruit)

    /* Section 2 */
    // 4. Get inner span with text "you"
    let innerSpan = document.querySelector("span")
    console.log(innerSpan)

    //! OR

    let innerSpanAlt = document.getElementsByTagName("span")
    console.log(innerSpanAlt)
    console.log(innerSpanAlt[0].innerText)

    // 5. Get all children of element "wrapper"
    let wrapperChildren = document.querySelector("#wrapper")
    console.log(wrapperChildren)

    //! OR

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
