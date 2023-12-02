const express = require('express');
const router = express.Router();
const apiController = require('./controllers/apiController');

// api logic
//router.post('/api/v1/ping', apiController.ping);
router.post('/api/v1/reviews', apiController.reviews);
router.post("/api/v1/newReview", apiController.newReview);
router.post("/api/v1/reviewsFor", apiController.reviewsFor);

router.use((req, res, next) => {
    if (req.method === 'GET') {
        res.status(404).send("Not found")
    } else {
        res.status(404).send("Could not find anything for \"" + req.path + "\"");
    }
});



module.exports = router;