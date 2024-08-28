const mongoose = require('mongoose');
const { MONGODB_URI} = require('./utils/config');
const app = require('./app');

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB....');

        app.listen(3001, () => {
            console.log('Server is running on port 3001 a http://localhost:3001');
        });
    })
    .catch(err => console.error('Could not connect to MongoDB...', err));
 