import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";
import OtaContextProvider from "./components/OtaContext";
import MasterApp from "./components/Master/MasterApp";
import Header from "./Header";
import Footer from "./Footer";

ReactDOM.render(
  <OtaContextProvider>
    <div className="DefaultLayout">
      <header>
        <div className="Header">
          <Header />
        </div>
      </header>
      <main>
        <MasterApp product="air" />
      </main>
      <footer>
        <div className="Footer">
          <Footer />
        </div>
      </footer>
    </div>
  </OtaContextProvider>,
  document.getElementById("root")
);

registerServiceWorker();
