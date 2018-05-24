// require express
// require cafes controller and view controller
const router = require('express').Router();
const controller = require('../controllers/cafes-controller');
const viewController = require('../controllers/view-controller');


// create a send error function
function sendError(err, req, res, next) {
  console.log('error here');
  res.status(500).json({
    status: 'error',
    message: err.message,
  });
}

router.route('/posts')
  .get(controller.function, viewController.viewFunction, sendError);



module.exports = cafesRouter;
