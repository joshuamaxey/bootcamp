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

    return this.follows[userID1].has(userID2); // Check to see if user 1's 'follows' set has user 2 in it. If so, then the follow was successful. Return true. Otherwise, if it is not present, then the follow has failed. Return false.
  }

  getFollows(userID) {

    return this.follows[userID]; // The socialNetwork's 'follows' property is an object. It contains keys which represent users by their userID, and values which are sets that contain that user's follows. Here, we search for the 'userID' key within the social network's 'follows' object, then we return the set which contains that user's follows
  }

  getFollowers(userID) {

    let followers = new Set(); // Initialize a new set to hold the followers of the provided user. This is necessary because there is no 'followers' property by default.

    for (let user in this.follows) { // Iterate through every user in the socialNetwork's 'follows' object, one key at a time.

      if (this.follows[user].has(userID)) { // Check if the current user in our loop has the user provided as input within their 'follows' set. If so, that means that they are following our user.

        followers.add(parseInt(user)); // Convert the current user's 'key' (id number) from a string to an integer, then add them to our 'followers' set.
        //^ This conversion is necessary because all 'keys' of an object in Javascript are strings, but we need to add the user by their numerical user id.
      }
    }
    return followers; // Once we have iterated through the entire 'follows' object, found every follower of our user, and added them to our 'followers' set, return the set.
  }

  getRecommendedFollows(userID, degrees) {

    let queue = [[userID]]; // Initialize a queue for our breadth-first traversal and then enqueue the starting 'path' (an array containing only the userID, which is our startNode in this context)
    let visited = new Set(); // Initialize a new Set to track which nodes (users) we have visited.
    let recommended = new Set(); // Initialize a new set to hold to hold the recommendations as we traverse the graph and look for 'recommended follows' within the specified degrees of separation from the provided user

    visited.add(userID); // Add our userID (starNode) to the visited set

    while (queue.length > 0) { // While the queue is not empty

      let currentPath = queue.shift(); // Shift the current path off of the queue and save it in a varaible 'currentPath'
      let currentNode = currentPath[currentPath.length - 1]; // save the last node in our path to a variable 'currentNode'

      if ((currentPath.length - 1) === degrees) recommended.add(currentNode); // Check if we are the correct 'degree of separation' from the userID start node. If we are, add the current node (current user) to our 'recommended' set.

      if ((currentPath.length - 1) < degrees) { // If we have not yet reached the correct degree of separation from our userID (startNode)...

        for (let neighbor of this.follows[currentNode]) { // ...For each neighbor of the currentNode (current user)

          if (!visited.has(neighbor)) { // If the current neighbor is not already present in our visited set...

            visited.add(neighbor); // Add our neighbor to the visited set

            queue.push([...currentPath, neighbor]); // Then push the currentPath and the current neighbor to the queue
          }
        }
      }
    }
    recommended.delete(userID); // Check to see if our userID (user provided as input) is present in our 'recommended' set. If so, delete them.
    return Array.from(recommended); // Then return a new array containing the users present in our recommended set.
  }
}

module.exports = SocialNetwork;
