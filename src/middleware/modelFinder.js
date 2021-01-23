'use strict';
const monstersModel = require('../model/monstersModel.js');
const itemsModel = require('../model/itmesModel.js');

module.exports = (req, res, next)=>{
  let model = req.params.model;

  switch (model) {
  case 'monsters':
    req.model = monstersModel;
    next();
    return;
  case 'items':
    req.model = itemsModel;
    next();
    return;
  default:
    next();
    return;
  }
};

