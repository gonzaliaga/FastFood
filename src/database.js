const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gonzalo:Julio1397@cluster0.h1ctdry.mongodb.net/fastfoodapp', 
/* no olvidarse que hay que pasalo a un ENV para que no se vea 
{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
} */
)
    .then(db=>console.log('DB is connected WN!'))
    .catch(err=>console.error(err));