import "@webcomponents/webcomponentsjs/webcomponents-bundle.js";
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";
import { plugins } from "../../assets/config/direflow-plugins.config";
import { DireflowComponent } from "direflow-component";
import App from "./App";

import "../../assets/i18n/i18n";

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: "news-wc",
  },
  properties: {
    email: "",
    language: "en",
    redirect: () => {},
    token: "",
  },
  plugins: plugins,
});
