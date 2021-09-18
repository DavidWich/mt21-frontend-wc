import "@webcomponents/webcomponentsjs/webcomponents-bundle.js";
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";
import { plugins } from "../../assets/config/direflow-plugins.config";
import { DireflowComponent } from "direflow-component";

import "../../assets/i18n/i18n";
import App from "./App";

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: "cart-wc",
  },
  properties: {
    cart: "",
    language: "en",
    token: "",
  },
  plugins: plugins,
});
