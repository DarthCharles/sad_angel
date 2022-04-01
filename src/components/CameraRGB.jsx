import React, { useEffect } from "react";
import { run } from "play.core/src/run.js";
import * as program from "play.core/src/programs/camera/camera_rgb.js";

export const CameraRGB = () => {
  useEffect(() => {
    const settings = {
      fps: 60,
      rows: 80,
      cols: 80,
      element: document.getElementById("camerax"),
    };
    run(program, settings).catch(function (e) {
      console.warn(e.message);
      console.log(e.error);
    });
  }, []);

  return (
    <div id="nice2">
      <pre style={{ lineHeight: 1 }} id="camerax" />
    </div>
  );
};
