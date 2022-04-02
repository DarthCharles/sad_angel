import { useEffect, useState } from "react";

import { Maptastic } from "maptastic";

import { Bobi, CameraRGB, CameraPixels } from "./components";
import { MaptasticContext } from "./hooks";

import "./App.css";

function App() {
  const [maptasticRef, setMaptasticRef] = useState();

  useEffect(() => {
    try {
      const configObject = {
        autoSave: true,
        autoLoad: true,
        onchange: () => {},
        layout: [],
      };
      setMaptasticRef(new Maptastic(configObject));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <MaptasticContext.Provider value={{ maptastic: maptasticRef }}>
        <Bobi maptasticId="bobbers" />
        <CameraRGB maptasticId="cameraRGB" />
        <CameraPixels maptasticId={"cameraPixels"} />
      </MaptasticContext.Provider>
    </div>
  );
}

export default App;
