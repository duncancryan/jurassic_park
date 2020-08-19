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
// for the above you can find the index of the dinosaur and then splice it, this will not use a loop and would be more efficient.

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

Park.prototype.dailyVisitors = function () {
    let visitors = 0;
    for (let dino of this.dinosaurs) {
        visitors += dino.guestsAttractedPerDay;
    }
    return visitors;
}

Park.prototype.yearlyVisitors = function () {
    let visitors = this.dailyVisitors();
    visitors *= 365;
    return visitors;
}

Park.prototype.yearlyRevenue = function () {
    let visitors = this.yearlyVisitors();
    let revenue = visitors * this.ticketPrice;
    return revenue;
}

Park.prototype.removeSpecies = function (species) {
    let dinosToKeep = [];
    for (let dino of this.dinosaurs) {
        if (dino.species !== species) {
            dinosToKeep.push(dino);
        }
    }
    this.dinosaurs = dinosToKeep;
}

Park.prototype.countDiets = function () {
    let diets = {'carnivore': 0, 'herbivore': 0};
    for (let dino of this.dinosaurs) {
        if (dino.diet === 'carnivore') {
            diets['carnivore'] += 1;
        }
        if (dino.diet === 'herbivore') {
            diets['herbivore'] += 1;
        }
    }
    return diets;
}


module.exports = Park;