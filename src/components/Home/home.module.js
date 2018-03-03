import angular from "angular";
import HomeComponent from "./home.component";
import HomeService from "./home.service";

const Home = angular
  .module("fuse-box.home", [])
  .component("home", HomeComponent)
  .service("homeService", HomeService).name;

export default Home;
