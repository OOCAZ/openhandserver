const express = require('express');

const router = express.Router();
const numbersTemplateCopy = require('../models/NumbersModels');

router.post('/number', (request, response) => {
    const numbersInit = new numbersTemplateCopy({
        number:request.body.number,
    })
    numbersInit.save()
    .then(data =>{
        respoonse.json(data)
    }).catch(err => 
        response.json(err))
})

module.exports = router