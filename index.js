const express = require('express')
const app = express()

app.use(express.static('public'))

var router = express.Router();

router.get('/api/test', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);
app.listen(3000, () => console.log('Server running on port 3000'))

