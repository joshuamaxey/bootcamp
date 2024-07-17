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

    if (!this.users[userID]) return null; // We check the 'users' object of the social network to see if the user with the provided userID exists (check to see if there is a 'userID' key in the object). If there is not, return null because the user with this ID does not exist.

    return this.users[userID]; // Otherwise, if we do find this user within the 'users' object of the socialNetwork, return that user. Note that the 'user' is actually an object with two properties: id and name. This user is the 'value' corresponding to the userID 'key' within the 'users' object of the social network.
  }

  follow(userID1, userID2) {

    if (!this.users[userID1] || !this.users[userID2]) return false; // Check the 'users' object of the social network for user 1 and user 2 by searching for their 'userID' keys to verify that both users exist. If either one of the users does not exist, then our follow will fail. If that is the case, return false.

    this.follows[userID1].add(userID2); // Otherwise, if both users exist, perform the 'follow' by adding user2 (by their user id (userID2)) to user 1's 'follows' set.

    return this.follows[userID1].has(userID2); // Check to see if user 1's 'follows' set has user 2 in it. If so, then the follow was successful. Return true. Otherwise, if it is not present, thenn the follow has failed. Return false.
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
