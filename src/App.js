import { useLayoutEffect } from "react";

import { Maptastic } from "maptastic";

import { Cube } from "./components/Cube";
import { Bobi } from "./components/Bobi";
import { CameraRGB } from "./components/CameraRGB";
import "./App.css";

function App() {
  useLayoutEffect(() => {
    try {
      const configObject = {
        autoSave: false,
        autoLoad: false,
        onchange: () => {},
        layers: ["nice", "nice2", "bobbers"],
      };

      new Maptastic(configObject);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <Cube />
      <Bobi canvasId={"bobbers"} />
      <CameraRGB />
    </div>
  );
}

export default App;
