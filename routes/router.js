let router = require('express').Router();
let colors = require('colors');

// route middleware that will happen on every request
router.use(function(req, res, next) {

    // log each request to the console
    console.log('Client Requested -   ' + req.method.red, req.url.red);

    // continue doing what we were doing and go to the route
    next(); 
});

// Home Route
router.get('/', (req, res, next) => {
    try {
        res.render('index');
    }
    catch(error) {
        console.log(error);
        next(error);
    }
});

router.post('/get/data', (req, res, next) => {
    try {
        let data = req.body.data;

        console.log(data);
    }
    catch(error) {
        console.log(error);
        next(error);
    }
})

// API Route
router.get('/api', (req, res, next) => {
    res.send('Hello from API!');
});

router.get('*', (req, res, next) => {
    try {
        res.send('Error 404, This URL does not exists!')
    }
    catch(error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;
