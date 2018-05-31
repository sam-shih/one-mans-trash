const db = require('../../database/listings-model');

module.exports = {
  listings: {
    // get listing by most recent
    get: function(req, res) {
        if (err) { console.error(err) }
        console.log('Get request from server')
        res.json(listings);
    },
    // create and add listing to db
    post: function(req, res) {
        if (err) { console.error(err); }
        console.log('Post request from server')
        res.writeHead(201);
        res.end(newListing);
    }
  }
}
