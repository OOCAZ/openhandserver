const express = require('express');

const router = express.Router();
const numbersTemplateCopy = require('../models/NumbersModels');

router.post('/numbers', (request, response) => {
    const numbersInit = new numbersTemplateCopy({
        number:request.body.number,
    })
})

module.exports = router