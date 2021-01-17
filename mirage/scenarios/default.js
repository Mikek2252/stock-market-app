export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  server.loadFixtures();
  generateWeekData(server, 10);
  generateUserStocks(server, 5);
}

function generateWeekData(server, numOfWeeks) {
  let weeks = server.createList('week', numOfWeeks);
  let teams = server.db.teams;
  weeks.forEach(week => {
    teams.forEach(team => {
      let previousWeekId = week.id - 1;
      let previousWeekTeamPrice = server.db.teamPrices.findBy({
        weekId: previousWeekId,
        teamId: team.id,
      });
      let price = previousWeekTeamPrice
        ? generatePriceChange(previousWeekTeamPrice.price)
        : 300;
      server.create('team-price', {
        teamId: team.id,
        weekId: week.id,
        price: price,
      });
    });
  });
}

function generatePriceChange(price, maxChange = 30) {
  let priceChange = randomNum(maxChange * 2) - maxChange;
  let newPrice = price + priceChange;
  return newPrice < 0 ? 0 : newPrice;
}

function generateUserStocks(server, numOfStocks) {
  let numOfWeeks = server.db.weeks.length;
  let numOfTeams = server.db.teams.length;
  for (let i = 0; i < numOfStocks; i++) {
    let randomWeek = server.schema.weeks.find(randomNum(numOfWeeks));
    let randomTeam = server.schema.teams.find(randomNum(numOfTeams));
    let teamPrice = server.schema.teamPrices.findBy({
      weekId: randomWeek.id,
      teamId: randomTeam.id,
    });
    server.create('user-stock', {
      quantity: randomNum(3),
      teamPriceId: teamPrice.id,
      userId: 1,
    });
  }
}

function randomNum(maxNumber) {
  return Math.floor(Math.random() * Math.floor(maxNumber)) + 1;
}
