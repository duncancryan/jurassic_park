const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addDino = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}


module.exports = Park;