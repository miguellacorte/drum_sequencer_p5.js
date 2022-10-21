import React from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";

class Drum_machine extends React.Component {
  kick;

  preload = (p5) => {
    p5.soundFormats('mp3', 'ogg');
    this.kick = p5.loadSound("assets/kick3");
  };

  setup = (p5, parentRef) => {
    const canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(parentRef);

    canvas.mousePressed(() => {
      this.kick.play();
    });
    
    
  };

  render() {
    return (
      <div>
        <h1>react-p5 hgjg + p5.sound</h1>
        <Sketch preload={this.preload} setup={this.setup}></Sketch>
      </div>
    );
  }
}

export default Drum_machine

