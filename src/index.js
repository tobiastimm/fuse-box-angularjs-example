import angular from "angular";
import AppComponent from "./components/App/app.component";
import Home from "./components/Home/home.module";

const root = angular.module("fuse-box", [Home]).component("app", AppComponent)
  .name;

angular.bootstrap(document.getElementById("root"), ["fuse-box"]);

if (process.env.NODE_ENV === "development") {
  require("./hmr");
}

export default root;
