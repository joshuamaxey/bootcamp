const Item = require('./item')

class Room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.exits = {};
    this.items = [];
  }

  printRoom() {
    console.clear();
    console.log("");
    console.log(this.name);
    console.log("");
    console.log(this.description);
    console.log("");
    if (this.items.length > 0) {
      console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
    }
    console.log(this.getExitsString());
    console.log("");
  }

  getExits() {
    return Object.keys(this.exits);
  }

  getExitsString() {
    return `Exits: ${this.getExits().join(", ")}`
  }

  connectRooms(direction, connectingRoom) {
    // Check if the direction and connecting room are valid
    if (['n', 's', 'e', 'w'].indexOf(direction) < 0 || !connectingRoom) {
      throw new Error("Error: Invalid room connection");
    }

    this.exits[direction] = connectingRoom;
  }

  getRoomInDirection(direction) {
    return this.exits[direction];
  }

  getItemByName(name) {
    // Retrieves an item from a room by item name
    for (let i = 0; i < this.items.length; i++) { // iterate through the room's items list, which is an array

      if (this.items[i].name === name) { // The element located at the current index of the array should be an object. Check to see that object has a .name property, and if it does, if that name matches the name that was provided as an argument

        return this.items[i]; // if the name of the object located at the current index of the array matches the name that was provided as an argument, then we have found the item and can return it.
      }
    }
  }
}

module.exports = {
  Room
};
