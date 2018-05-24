const url = 'http://localhost:3000/posts'

// call the middleware functions here
module.exports = {
  viewFunction(req, res, next) {
    res.render('url', {
      data: res.locals.data
    });

};
