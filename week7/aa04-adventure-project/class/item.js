class Item {
  // Item Class: Item should have name and description attributes
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

const rock = new Item(
  "rock",
  "just a simple rock"
)

console.log(rock);
module.exports = {
  Item
};
