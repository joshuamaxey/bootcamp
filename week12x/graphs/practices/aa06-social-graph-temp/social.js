// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {

    this.currentID++ // We increment the socialNetwork's 'currentID' property for every new user, ensuring that we keep an accurate record of how many users there are within our social network.
    //^ (Ensures each new user gets a unique ID)

    this.users[this.currentID] = {id: this.currentID, name: name} // Create a key-value pair within the 'users' object. The key will be the user's id (currentID). The value will be another object, which has two properties: the user's id and their name.
    //^ (Store's the user's ID and name)

    this.follows[this.currentID] = new Set(); // Create a key-value pair within the 'follows' object. The key is the user's id (currentID) and the value is a new Set(), which will contain all of this user's followers.
    //^ (Creates an empty set for the user's followers)

    return this.currentID // Finally, we return the incremented id, which reflects the 'currentID' (the user id of the current user)
    //^ (Returns the new user's ID)
  }

  getUser(userID) {
    // Your code here
  }

  follow(userID1, userID2) {
    // Your code here
  }

  getFollows(userID) {
    // Your code here
  }

  getFollowers(userID) {
    // Your code here
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;
