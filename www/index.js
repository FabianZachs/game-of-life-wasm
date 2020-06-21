import { Universe } from "wasm-game-of-life";


const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

const renderLoop = () => {
  pre.textContent = universe.render(); // returns a string representation of the universe and puts it into the JS element
  universe.tick(); // tells universe to do 1 iteration

  requestAnimationFrame(renderLoop); 
};

// make first call. Inside our callback it calls it again
requestAnimationFrame(renderLoop);


