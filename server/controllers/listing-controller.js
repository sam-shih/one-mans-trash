var message = 'hello team!';
module.exports = {
  listings: {
    dummyData: {username: 'anotherFeng', listing: 'computer mouse', description: 'want to get rid of this crappy computer mouse'},
    post: function(req, res) {
      let params = [req.body.username, req.body.username, req.body.listing, req.body.description];
      this.dummyData.post(params, function(err, results) {
        if (err) { console.error(err); }
        res.sendStatus(201);
      });
    }
  }
}
