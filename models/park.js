const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addDino = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDino = function (dinosaur) {
    let dinosToKeep = [];
    for (let dino of this.dinosaurs) {
        if (dino !== dinosaur) {
            dinosToKeep.push(dino);
        }
    }
    this.dinosaurs = dinosToKeep;
}

Park.prototype.findTopDino = function () {
    let largestNumber = 0;
    for (let dino of this.dinosaurs) {
        if (dino.guestsAttractedPerDay > largestNumber) {
            largestNumber = dino.guestsAttractedPerDay;
        }
        if (dino.guestsAttractedPerDay === largestNumber) {
            return dino
        }
    }
}

module.exports = Park;