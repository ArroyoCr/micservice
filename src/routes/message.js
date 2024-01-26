const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');

const message = require('../examples.json');

router.get('/', (req, res) => {
    res.json(message);
})

        ////registro datos
router.post('/', (req, res) => {
    const {mess,from,to}=req.body;
    if(mess && from && to){
        const id = message.length + 1;
        const newMessage = {...req.body, id};
        //console.log(newMessage);
        message.push(newMessage);
        res.json(message);
    }else {
        res.status(500).json({error: 'Ocurrio un problema.'});
    }
});

        //////drop
router.delete('/:id', (req, res) => {
    const { id} = req.params;
    _.each(message,(messag,i) =>{
        if(messag.id == id){
            message.splice(i,1);
        }
    });
    res.send(message);
});

        ////////modificar total datos
router.put('/:id', (req, res) => {
    const { id} = req.params;
    const {mess,from,to}=req.body;
    if(mess && from && to){
        _.each(message,(messag,i) =>{
            if(messag.id == id){
                messag.mess = mess;
                messag.from = from;
                messag.to = to;
            }
        });
        res.json(message);
    }else{
        res.status(500).json({error: 'Ocurrio un problema.'});
    }
});
        ////////modificar dato en especifico
router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const data =req.body;
    const index = message.findIndex(x => x.id == id);
    if(index < 0){
        return res.status(500).json({Error: "Ocurrio un problema. "});
    }
    const mod = message[index];
    Object.assign(mod, data );
    res.json(message);
    
});

module.exports = router;
