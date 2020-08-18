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
    let topDino = this.dinosaurs[0];
    for (let dino of this.dinosaurs) {
        if (dino.guestsAttractedPerDay > topDino.guestsAttractedPerDay) {
            topDino = dino
        }
    }
    return topDino;
}

Park.prototype.findSpecies = function (species) {
    let foundDinos = [];
    for (let dino of this.dinosaurs) {
        if (species === dino.species) {
            foundDinos.push(dino)
        }
    }
    return foundDinos;

}

module.exports = Park;