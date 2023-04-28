const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor (stations, registeredUsers){
    this.stations = stations;
    this.registeredUsers = registeredUsers;
  }

  registerUser (username, password, age) {
    if (username in this.registeredUsers) {
      throw new Error("User already registered");
    }
    else if (age < 18) {
      throw new Error("User is too young to register");
    }
    else {
  
      this.registeredUsers.push({
        username: username,
        password: password,
        age: age
      });

      console.log("User has been registered");
    }
  }

  loginUser (username, password) {

  }

  logoutUser (username) {

  }

  createScooter (station) {

  }

  dockScooter (scooter, station) {

  }

  rentScooter (scooter, user) {

  }

  print () {
    console.log(this.stations)
    console.log(this.registeredUsers)
  }




}


module.exports = ScooterApp
