import React from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";

import "p5/lib/addons/p5.sound";

export default function DrumSequencer() {
  let setup = (p5, canvasParentRef) => {
    let canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
  };

  let draw = (p5) => {};

  return (
    <div>
      <Sketch setup={setup} draw={draw}></Sketch>
      DrumSequencer
    </div>
  );
}
