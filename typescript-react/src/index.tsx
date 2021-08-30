import React from "react";
import { render } from "react-dom";

import App from "./integration/App";

const appContainer = document.getElementById('app-container');

if (!appContainer) {
  throw new Error(`[INIT]: Could not find app container.`);
}

render(<App />, appContainer);
