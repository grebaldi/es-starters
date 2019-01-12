import "./settings"
import { Application } from "pixi.js";

const application = new Application({
    width: 800,
    height: 600
});

document.body.appendChild(application.view);