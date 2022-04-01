import React, { useEffect } from "react";
import { run } from "play.core/src/run.js";
import * as program from "play.core/src/programs/sdf/cube.js";

export const Cube = () => {
  useEffect(() => {
    const settings = {
      fps: 60,
      rows: 80,
      cols: 80,
      element: document.getElementById("cube"),
    };
    run(program, settings).catch(function (e) {
      console.warn(e.message);
      console.log(e.error);
    });
  }, []);

  return (
    <div id="nice">
      <pre style={{ lineHeight: 1 }} id="cube" />
    </div>
  );
};
