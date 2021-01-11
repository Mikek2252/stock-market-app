export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  server.loadFixtures();

  let weeks = server.createList('week', 10);
  let teams = server.db.teams;
  weeks.forEach(week => {
    teams.forEach(team => {
      let previousWeekId = week.id - 1;
      let previousWeekTeamPrice = server.db.teamPrices.findBy({ weekId: previousWeekId, teamId: team.id });
      let price = previousWeekTeamPrice ? updatePrice(previousWeekTeamPrice.price) : 300;
      server.create('team-price', {
        teamId: team.id,
        weekId: week.id,
        price: price,
      })
    })
  })
}

function updatePrice(price, maxChange = 30) {
  let priceChange = Math.floor(Math.random() * Math.floor(maxChange * 2)) - 30;
  let newPrice = price + priceChange;
  return newPrice < 0 ? 0 : newPrice;
}
