import React from "react";
import { renderRoutes } from "react-router-config";
import { IconStyle } from "./assets/iconfont/iconfont";
import { GlobalStyle } from "./style";
import routes from "./routes/index.js";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
