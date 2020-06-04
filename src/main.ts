import {
  Engine,
  EngineOptions
} from "excalibur";

import * as scenes from './scenes/scenes';

const options: EngineOptions = {};
const game = new Engine(options);

scenes.init(game);

game
  .start()
  .then(() => {
    game.goToScene('menu');
  });
