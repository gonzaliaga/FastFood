const mongoose = require('mongoose');

mongoose.connect('', 
/* no olvidarse que hay que pasalo a un ENV para que no se vea 
{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
} */
)
    .then(db=>console.log('DB is connected WN!'))
    .catch(err=>console.error(err));
