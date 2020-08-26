'use strict';

const {Queue} = require('../../data-structures/stacksAndQueues/stacks-and-queues.js');

class AnimalShelter {

  constructor(){
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
  }

  enqueue(animal){

    if(animal === 'cat') {
      this.catQueue.enqueue({animalType: animal});
    }

    if(animal === 'dog') {
      this.dogQueue.enqueue({animalType: animal});
    }

  }


  dequeue(pref){

    if(pref === 'cat') {

      this.catQueue.dequeue();

    } else if(pref === 'dog') {

      this.dogQueue.dequeue();

    } else{

      return null;

    }

  }

}


module.exports = AnimalShelter;

