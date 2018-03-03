class HomeService {
  constructor() {
    console.log("I'm a service");
  }

  foo() {
    return "Test";
  }
}

HomeService.$inject = [];

export default HomeService;
