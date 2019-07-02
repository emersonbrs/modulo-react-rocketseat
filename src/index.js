import React from "react";
import { render } from "react-dom";

import App from "./App";

// O code dentro do render abaixo procura um elemento, dentro do meu document, com o id app e adiciona o componente App
render(<App />, document.getElementById("app"));
