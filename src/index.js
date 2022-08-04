import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Contact from "./Contact";

export const App = (
  <div>
    <h1>Mes contacts</h1>
    <Contact name="Eva Hanchier" phone="📞 03.49.79.52.46" email="evah@gmail.com" isDeletable={true} />
    <Contact name="Yvon Hanchier" phone="📞 03.49.79.52.46" email="yvonh@gmail.com" isDeletable={true}/>
    <Contact name="Jean Chie" phone="📞 03.49.79.52.46" email="jeanc@gmail.com" isDeletable={true}/>
    <Contact name="Maman" phone="📞 03.49.79.52.46" email="mamere@gmail.com" isDeletable={false}/>
    <Contact name="Maison" phone="📞 03.49.79.52.46" email="maison@gmail.com" isDeletable={false}/>
  </div>
);

ReactDOM.render(App, document.getElementById("root"));
