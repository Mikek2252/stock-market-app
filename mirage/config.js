export default function () {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

  this.get('/weeks');
  this.get('/weeks/:id');
  this.get('/teams');
  this.get('/teams/:id');
  this.get('/team-prices');
  this.get('/team-prices/:id');
  this.get('/users/:id');
  this.get('/user-stocks');
  this.get('/user-stocks/:id', function (schema, request) {
    let userStock = schema.userStocks.find(request.params.id);
    let weeks = schema.weeks.all().models;
    let currentWeek = weeks[weeks.length - 1];
    let currentTeamPrice = schema.teamPrices.findBy({
      weekId: currentWeek.id,
      teamId: userStock.teamPrice.teamId,
    });
    let serializedUserStock = this.serialize(userStock);
    serializedUserStock.data.attributes['current-price'] =
      currentTeamPrice.price;
    return serializedUserStock;
  });
}
