const { Food } = require('./food');
const { Room } = require('./room');
const { Item } = require('./item');
const { rooms } = require('../data/world-data');

class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;
      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
          console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    let item; // initialize a new variable to hold the item that we'll be adding to the player's inventory

    // console.log(this.currentRoom.items)

    for (let i = 0; i < this.currentRoom.items.length; i++) { // The player object has a 'currentRoom' property. So we will iterate through the current room's list of items (which is an array) using a for loop

      if (this.currentRoom.items[i].name === itemName) { // If the object located at the current index of the array has a .name property taht matches the itemName provided as input...

        item = this.currentRoom.items[i]; // ...save that object to the 'item' variable...

        this.currentRoom.items.splice(i, 1); // ...then remove it from the room's inventory

        break; // and break the loop here.
      }
    }
    // console.log(this.currentRoom.items)

    this.items.push(item) // Finally, push the 'item' to the player's inventory

    // console.log(this.items)
  }

  dropItem(itemName) {

    let item;

    for (let i = 0; i < this.items.length; i++) {

      if (this.items[i].name === itemName) {

        item = this.items[i];

        this.items.splice(i, 1);

        break;
      }
    }

    this.currentRoom.items.push(item)
  }

  eatItem(itemName) {
    // Allow the player to eat food items, but not non-food items
    // Your code here
  }

  getItemByName(name) {
    // Retrieves an item from a player's inventory by item name
    // Your code here
    for (let i = 0; i < this.items.length; i++) { // iterate through the array of items (the player's inventory)

      if (this.items[i].name === name) { // if the object located at the current index of the array has a .name property which matches the 'name' that was provided as an argument...

        return this.items[i]; // ...return that object
      }
    }
  }
}

module.exports = {
  Player
};
