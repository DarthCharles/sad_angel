import React, { useState } from "react";

import Sketch from "react-p5";

import { useMaptasticRegister } from "../hooks";

const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 660;

export const CameraPixels = ({ maptasticId }) => {
  const [video, setVideo] = useState();
  useMaptasticRegister(maptasticId);

  const setup = (p5, parentRef) => {
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(parentRef);
    const video = p5.createCapture(p5.VIDEO);
    video.size(CANVAS_WIDTH, CANVAS_HEIGHT);
    video.hide();
    setVideo(video);
  };

  const draw = (p5) => {
    p5.background(255);
    video.loadPixels();

    const pixelSize = 10;
    for (let x = 0; x < video.height; x += pixelSize) {
      for (let y = 0; y < video.width; y += pixelSize) {
        const index = (y * video.width + x) * 4;
        const radius = video.pixels[index];
        const diameter = p5.map(radius, 0, 255, pixelSize, 2);

        p5.fill(0);
        p5.noStroke();
        p5.circle(x, y, diameter);
      }
    }
  };

  return (
    <div
      id={maptasticId}
      style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}
    >
      <Sketch setup={setup} draw={draw} />;
    </div>
  );
};
