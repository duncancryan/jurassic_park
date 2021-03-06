const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let park;
  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 37);
    dinosaur3 = new Dinosaur('triceratops', 'herbivore',100);
    dinosaur4 = new Dinosaur('triceratops', 'herbivore', 29);
    
    park = new Park('Jurassic Park', 10.50, [dinosaur1, dinosaur2])
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10.50);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dinosaur3);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDino(dinosaur2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDino(dinosaur3);
    const actual = park.findTopDino();
    assert.deepStrictEqual(actual, dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDino(dinosaur3);
    park.addDino(dinosaur4);
    const actual = park.findSpecies("triceratops");
    assert.deepStrictEqual(actual, [dinosaur3, dinosaur4]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.dailyVisitors();
    assert.strictEqual(actual, 87);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = park.yearlyVisitors();
    const expected = 87 * 365
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate total revenue for one year', function () {
    const actual = park.yearlyRevenue();
    const expected = (87 * 365) * 10.50;
    assert.strictEqual(actual, expected);
  });

  it("should be able to remove all dinosaurs of a certain species from its collection", function () {
    park.addDino(dinosaur3);
    park.addDino(dinosaur4);
    park.removeSpecies("triceratops");
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  })

  it("should be able to return an object which displays a count of how many dinos of each diet there are in the collection", function () {
    park.addDino(dinosaur3);
    park.addDino(dinosaur4);
    const actual = park.countDiets();
    assert.deepStrictEqual(actual, {'carnivore': 2, 'herbivore': 2});
  })
});
