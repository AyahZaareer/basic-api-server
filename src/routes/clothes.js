'use strict';
const express = require('express');
const clothesModel = require('../models/clothes');


const clothes = new clothesModel();
const router = express.Router();

router.get('/', getClothes);
router.get('/:id', getClothesById);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

function getClothes(req, res) {
    const resObj = clothes.read();
    res.json(resObj);
}

function getClothesById(req, res) {
    const resObj = clothes.read(req.params.id);
    res.json(resObj);
}

function createClothes(req, res) {
    const cloObj = req.body;
    const resObj = clothes.create(cloObj);
    res.status(201).json(resObj);
}

function updateClothes(req, res) {
    const cloObj = req.body;
    const resObj = clothes.update(req.params.id, cloObj);
    res.json(resObj);
}

function deleteClothes(req, res) {
    const resObj = clothes.delete(req.params.id);
    res.json(resObj);
}

module.exports = router;