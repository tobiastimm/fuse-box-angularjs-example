import angular from "angular";
import AppComponent from "./components/App/app.component";
import HomeComponent from "./components/Home/home.component";

const root = angular
  .module("fuse-box", ["templates"])
  .component("app", AppComponent)
  .component("home", HomeComponent);

angular.bootstrap(document.getElementById("root"), ["fuse-box"]);

export default root;
