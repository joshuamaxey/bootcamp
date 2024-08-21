// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {

    this.currentID++;

    let userID = this.currentID;

    this.users[userID] = {
      id: userID,
      name: name
    }

    this.follows[userID] = new Set();

    return userID;
  }

  getUser(userID) {

    if (this.users[userID]) {

      return this.users[userID];
    }

    return null;
  }

  follow(userID1, userID2) {

    if (!this.getUser(userID1) || !this.getUser(userID2)) {

      return false;
    }

    this.follows[userID1].add(userID2);

    return true;
  };

  getFollows(userID) {

    return this.follows[userID];
  }

  getFollowers(userID) {

    let userIDs = Object.keys(this.follows);

    let followers = new Set();

    userIDs.forEach(ID => {

      let followList = this.follows[ID]

      if( followList.has(userID)) {

        followers.add(Number(ID));
      }
    })

    return followers;
  }

  getRecommendedFollows(userID, degrees) {

    let queue = [[userID]]

    let visited = new Set();

    let recommended = [];

    while (queue.length) {

      let current = queue.shift()

      let id = current[current.length - 1]

      if (current.length > 2 && current.length <= degrees + 2) {

        if (!this.follows[userID].has(id) && id !== userID) {

          recommended.push(id)
        }
      }



      for (let neighbor of this.follows[id]) {

        if (!visited.has(neighbor)) {

          queue.push(current.concat([neighbor]))

          visited.add(neighbor)
        }

      }
    }
    return recommended
  }
}

module.exports = SocialNetwork;
