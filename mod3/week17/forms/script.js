document.addEventListener("DOMContentLoaded", event => {


    const form = document.getElementById("signUp");

    const checkPasswordMatch = event => {

        const password = document.getElementById("password").value;
        const passwordConfirm = document.getElementById("confirm-password").value;

        if (password !== passwordConfirm) {

            event.preventDefault();
            alert("Passwords must match!");
        } else {
            alert("The form was submitted!")
        }
    }

    form.addEventListener("submit", checkPasswordMatch)

    let input = document.querySelectorAll("input")
    input.forEach((el) => {
        el.style.margin = "5px"
    })

    let button = document.getElementsByTagName("button")[0]
    button.style.margin = "5px";
})
