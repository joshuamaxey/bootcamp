const DOGS = {

    101: {
        id: 101,
        name: "Sable",
        genus: "Husky Huskius"
    },

    234: {
        id: 234,
        name: "Blixa",
        genus: "Corgi Corgium"
    }
};

const dogUl = document.getElementById("dogs");

Object.keys(DOGS).forEach(id => {

    const dog = DOGS[id];

    const dogLi = document.createElement("li");
    dogLi.innerText = dog.name + " -- " + dog.genus;

    dogLi.setAttribute("data-id", dog.id);

    dogLi.addEventListener("click", event => {
        const dog = event.target;
        alert(`Dog #${dog.dataset.id} loves you!`);
    });

    dogUl.append(dogLi);
});

//! The following code will remove the data- attribute from the element. Now if you click on "Sable", the id will return undefined. "Dog #undefined loves you!"

// const sable = document.querySelector(`li[data-id="101"]`);
// delete sable.dataset.id
