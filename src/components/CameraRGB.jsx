import React, { useEffect } from "react";

import { run } from "play.core/src/run.js";
import * as program from "play.core/src/programs/camera/camera_rgb.js";

import { useMaptasticRegister } from "../hooks";

export const CameraRGB = ({ maptasticId }) => {
  useMaptasticRegister(maptasticId);

  useEffect(() => {
    const settings = {
      fps: 60,
      rows: 50,
      cols: 80,
      element: document.getElementById("camera"),
    };
    run(program, settings).catch(function (e) {
      console.warn(e.message);
      console.log(e.error);
    });
  }, []);

  return (
    <div id={maptasticId} style={{ width: 640, height: 660 }}>
      <pre style={{ lineHeight: 1 }} id="camera" />
    </div>
  );
};
