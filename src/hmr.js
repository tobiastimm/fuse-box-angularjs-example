const customizedHMRPlugin = {
  hmrUpdate: ({ type, path, content }) => {
    if (type === "js") {
      // remove root
      var elem = document.getElementById("root");
      elem.parentNode.removeChild(elem);
      // re-create everything
      const div = document.createElement("div");
      div.setAttribute("id", "root");
      div.innerHTML = `<app></app>`;

      document.body.appendChild(div);
      FuseBox.flush();
      FuseBox.dynamic(path, content);
      if (FuseBox.mainFile) {
        FuseBox.import(FuseBox.mainFile);
      }
      return true;
    }
  }
};

let alreadyRegistered = false;
if (!window.hmrRegistered) {
  window.hmrRegistered = true;
  FuseBox.addPlugin(customizedHMRPlugin);
}
