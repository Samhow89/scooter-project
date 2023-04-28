class Scooter{
  constructor (station, user, serial, nextSerial, charge, isBroken){
    this.station = station;
    this.user = user;
    this.serial = serial;
    this.nextSerial = nextSerial;
    this.charge = charge;
    this.isBroken = isBroken;
  }

  rent () {
    if (this.charge > 20 && this.isBroken == false){
      this.station = null;
      this.user = user;
    } 
    
    else {
      throw new Error('Scooter needs to charge or scooter needs repair!');
    }

  }

  dock (station) {
    this.station = station;
    this.user = null;
  }

}

module.exports = Scooter
