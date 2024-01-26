const { Router } = require('express');
const router = Router();

router.get('/get', (req, res) => {
    const data ={
        "message": "prueba",
        "send": "arroyomirandacarlos@gmail.com"
    };
    res.json(data);
})

module.exports = router;