'use strict';

const mongoose = require('mongoose');

const items = new mongoose.Schema({
  cardName: { type: String, requried: true},
  image: { type: String, required: true},
  type: { type: String, required: true},// equiptment, consumable etc
  value: {type: Number}, //will be a number pf gold pieces
  bonus: {type: Number}, //  number indicating bonus to player combat strength
  execption: {type: String}, //i.e. usable by elves only
  bodyPart: {type: String}, // where the equipment goes i.e body == armor, feet == footgear
  numberOfHands: {type: Number}, //this is how many hands a weapon/item uses i.e. 1 hand, 2 hand, -2 hands etc.
  bigItem: {type: Boolean},
  modifier: {type: Number}, //the bonus given to combat

});



module.exports = mongoose.model('items', items);

