'use strict';

const Animal = require('../fifoAnimalShelter/fifo-animal-shelter.js');


describe('AnimalShelter Queue', () => {

  it('should be a class', () => {
    expect(Animal).toBeDefined();
  });

  it('should enqueue to catQueue', () => {
    const animal = new Animal();
    animal.enqueue('cat');
    expect(animal.catQueue.peek().animalType).toBe('cat');
  });

  it('should enqueue to catQueue', () => {
    const animal = new Animal();
    animal.enqueue('dog');
    expect(animal.dogQueue.peek().animalType).toBe('dog');
  });

  it('should dequeue if pref is cat', () => {
    const animal = new Animal();
    animal.enqueue('cat');
    animal.dequeue('cat');
    expect(animal.catQueue.isEmpty()).toBeTruthy();
  });

  it('should dequeue if pref is dog', () => {
    const animal = new Animal();
    animal.enqueue('dog');
    animal.dequeue('dog');
    expect(animal.dogQueue.isEmpty()).toBeTruthy();
  });

  it('should return null when dequeue(pref) is not cat or dog', () => {
    const animal = new Animal();
    expect(animal.dequeue('fish')).toBe(null);
  });

})