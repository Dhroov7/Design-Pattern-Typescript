interface Observer {
  update(stockPrice: number): void;
}

class StockMarket {
  observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  updateStockPrice(stockPrice: number) {
    this.notifyObservers(stockPrice);
  }

  notifyObservers(stockPrice: number) {
    this.observers.forEach((observer: Observer) => {
      observer.update(stockPrice);
    });
  }
}

class StockTrader implements Observer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  update(stockPrice: number): void {
    console.log("Got new Price " + stockPrice);
  }
}

const stockMarket = new StockMarket();

const trader1 = new StockTrader("Trader 1");
const trader2 = new StockTrader("Trader 2");

stockMarket.addObserver(trader1);
stockMarket.addObserver(trader2);

stockMarket.updateStockPrice(100); // Update stock price
console.log("--------");
stockMarket.updateStockPrice(120); // Update stock price
