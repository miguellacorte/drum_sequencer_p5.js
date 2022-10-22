let kick, snare, closedHihat;

let loop0, kickInterval, loop1, loop2;

let defaultVal, setRythmicDiv;

let intervalsArr = ["2n", "3n", "4n", "5n", "6n", "7n", "8n", "9n",'15n', "16n", "32n"];

function setup() {
  let cnv = createCanvas(1000, 1000);
  cnv.mousePressed(canvasPressed);
  colorMode(HSB);
  background(0, 0, 86);
  text("tap to start/stop", 10, 20);

  kick = loadSound("assets/kick3.mp3", () => {});
  snare = loadSound("assets/snare3.mp3", () => {});
  closedHihat = loadSound("assets/hihat3.mp3", () => {});

  defaultVal = 3;

  setRythmicDiv = createSlider(0, 9, defaultVal);
  setRythmicDiv.position(100, 100);
  setRythmicDiv.style("width", "80px");

  let interval2 = "2n";
  let interval3 = "16n";

  kickInterval = intervalsArr[setRythmicDiv.value()];

  loop1 = new p5.SoundLoop(snarePlay, interval2);
  loop2 = new p5.SoundLoop(closedHihatPlay, interval3);
  loop0 = new p5.SoundLoop(kickPlay, kickInterval);

  setRythmicDiv.changed(() => {
    console.log(intervalsArr[setRythmicDiv.value()]);
    loop0.interval = intervalsArr[setRythmicDiv.value()];
  });
}

function canvasPressed() {
  // ensure audio is enabled
  userStartAudio();

  loop0.start();
  // loop1.start();
  // loop2.start();
}

function kickPlay(time) {
  kick.play(time);
}

function snarePlay(time) {
  snare.play(time);
}

function closedHihatPlay(time) {
  closedHihat.play(time);
}
