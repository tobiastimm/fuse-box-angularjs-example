class HomeController {
  constructor(homeService) {
    this.homeService = homeService;
    this.myService = this.homeService.foo();
  }
}

HomeController.$inject = ["homeService"];

export default HomeController;
