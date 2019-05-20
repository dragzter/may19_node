const express = require('express')
const app = express()

// Serve the static content
app.use(express.static('public'))

// Routes
var router = express.Router();
var Bear     = require('./db/models/bear');


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


router.route('/bears')

    // create a bear (accessed at POST http://localhost:3000/api/bears)
    .post(function(req, res) {

        var bear = new Bear();      // create a new instance of the Bear model
        bear.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        bear.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Bear created!' });
        });

    });



app.use('/api', router);

// Fire up server
app.listen(3000, () => console.log('Server running on port 3000'))