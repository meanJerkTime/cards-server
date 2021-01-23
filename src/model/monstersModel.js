'use strict';

const mongoose = require('mongoose');

const monsters = new mongoose.Schema({
  cardName: { type: String, requried: true},
  image: { type: String, required: true},
  level: { type: Number, required: true },
  undead: { type: Boolean, required: true },
  modifier: {type: String, required: true},
  badStuff: {type: String, required: true},
  levelsGiven: { type: Number, required: true},
  treasuresGiven: { type: Number, required: true},
});



module.exports = mongoose.model('monsters', monsters);

