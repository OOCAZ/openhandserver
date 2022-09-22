const express = require('express');

const router = express.Router();
const numbersTemplateCopy = require('../models/NumbersModels');

router.post('/add', (request, response) => {
    const numbersInit = new numbersTemplateCopy({
        number:request.body.number,
    })
    numbersInit.save()
    .then(data =>{
        response.json(data)
    }).catch(err => 
        response.json(err))
})

router.post('/remove', (request, response) => {
     const numbersInit = new numbersTemplateCopy({
        number:request.body.number,
    })
    numbersInit.collection.deleteMany({"number": request.body.number})
    .then(data =>{
        response.json(data)
    }).catch(err => 
        response.json(err))
})

router.get('/numbers', async (request, response) => {
    const numbers = await numbersTemplateCopy.find()
    response.send(numbers)
})

module.exports = router