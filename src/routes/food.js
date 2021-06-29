'use strict';
const express = require('express');
const foodModel = require('../models/clothes');


const food = new foodModel();
const router = express.Router();

router.get('/', getFood);
router.get('/:id', getFoodById);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

function getFood(req, res) {
    const resObj = food.read();
    res.json(resObj);
}

function getFoodById(req, res) {
    const resObj = food.read(req.params.id);
    res.json(resObj);
}

function createFood(req, res) {
    const cloObj = req.body;
    const resObj = food.create(cloObj);
    res.status(201).json(resObj);
}

function updateFood(req, res) {
    const cloObj = req.body;
    const resObj = food.update(req.params.id, cloObj);
    res.json(resObj);
}

function deleteFood(req, res) {
    const resObj = food.delete(req.params.id);
    res.json(resObj);
}

module.exports = router;