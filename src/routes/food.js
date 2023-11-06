const router = require('express').Router();

router.get('/food/add', (req, res)=> {
    res.render('food/new-food');
})

router.post('/food/new-food', (req, res)=>{
    const {title, description, price, image, category } =req.body;
    res.send('Recibido');
})

router.get('/food', (req, res)=>{
    res.send('Comidas desde la base de datos');
})

module.exports = router;