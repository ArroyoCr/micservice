const express = require('express');
const app = express();
const morgan = require ('morgan');
const cors = require ('cors');
const appRoute = require('./routes/route')

//config
app.set(`port`, process.env.PORT || 5000);
app.set(`json spaces`, 2);

const corsOptions = {
    origin: 'http://localhost:5001/api/message, http://prueba.com',
    methods: 'GET,HEAD,PUT,PATCH,POST',
  };
  
  app.use(cors(corsOptions));

//middelware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/message',require('./routes/message'));
app.use('/api', appRoute);

app.listen(app.set(`port`), () => {
    console.log(`server open ${app.set(`port`)}`);
})
