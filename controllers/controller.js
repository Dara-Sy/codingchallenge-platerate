const url = 'http://localhost:3000/posts'

// call the middleware functions here
module.exports = {
  function(req, res, next) {
    fetch('url') => {
      return data.json()
    })
    .then(data => {
      res.locals.data = data
      next();
    })
    .catch(err => next(err));
  }
  //   function(req, res, next) {
  //   cafeDb.getOneCafe(req.params.id)
  //     .then((data) => {
  //       res.locals.cafe = data;
  //       next();
  //     })
  //     .catch((err) => {
  //       next(err);
  //     });
  // }
};
