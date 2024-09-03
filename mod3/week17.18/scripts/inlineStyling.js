//! We can also use JavaScript to apply inline-styling to our HTML document. This is useful if you want to apply styling before you've defined any CSS OR if you want to make quick fixes to your application without modifying the HTML or CSS directly. Inline styling can be a quick and easy way to accomplish this.

const colorChangeApple = () => {

    const fruits = document.getElementById("fruits");
    console.log(fruits);

    const apple = fruits.children[0]; // Selects the FIRST child of our 'fruits' list, which is an <li></li> tag containing the text "apple"
    console.log(apple.innerText) // prints "apple"
    console.log(apple)

    apple.style.color = "red";
    apple.style.textDecoration = "underline";
}

const colorChangeOrange = () => {

    const fruits = document.querySelector("ul#fruits");
    console.log(fruits)

    const orange = fruits.children[1];
    console.log(orange);

    orange.style.color = "orange";
    orange.style.fontSize = "x-large";
    orange.style.fontFamily = "sans-serif"
}

const colorChangeBanana = () => {

    const banana = document.body.children[12].children[0].children[2];
    console.log(banana);

    banana.style.color = "yellow";
    banana.style.fontWeight = "bold"
    banana.style.textShadow = "1px 1px 2px black"
    banana.style.fontFamily = "sans-serif"
    banana.style.fontSize = "x-small"
}

window.onload = () => {

    colorChangeApple();
    colorChangeOrange();
    colorChangeBanana();
}
