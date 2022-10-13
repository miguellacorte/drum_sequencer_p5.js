import React from "react";
import Sketch from "react-p5";

export default function DrumSequencer() {

  let setup = (p5, canvasParentRef) => {
    let canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
  };

  let mousePressed = (p5) => {};

  let draw = (p5) => {};


  return ( 
  <div>
  DrumSequencer
  </div>
  );
}
