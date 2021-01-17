import Controller from '@ember/controller';

export default class UserController extends Controller {
  get portfolioValue() {
    let stockValues = this.model.userStocks.map(
      userStock => userStock.currentPrice,
    );
    return stockValues.reduce((a, b) => a + b, 0);
  }
}
