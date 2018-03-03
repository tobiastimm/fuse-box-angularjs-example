class AppController {
  constructor() {
    this.appTitle = "AngularJS + FuseBox";
    this.counter = 0;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

AppController.$inject = [];

export default AppController;
