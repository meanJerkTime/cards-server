'use strict';

const express = require('express');
const router = express.Router();
const modelFinder = require('../middleware/modelFinder');

//routes definitions
const {getAll, getOne, createOne, updateOne, deleteOne} = require('./routesHandler.js');
// const basicAuth = require('../middleware/basicAuth');
// const bearerAuth = require('../middleware/bearer.js');
// const adminValidation = require('../middleware/adminValidation.js');
// const userValidation = require('../middleware/userValidation.js');
// const roleValidation = require('../middleware/roleValidation.js');

router.param('model', modelFinder);

router.get('/:model', getAll);

router.get('/:model/:id', getOne);

router.post('/:model', createOne);

router.put('/:model/:id', updateOne);

router.delete('/:model/:id', deleteOne);

module.exports = router;
