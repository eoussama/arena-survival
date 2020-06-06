import {
  Engine,
  EngineOptions,
  Texture,
  Loader
} from "excalibur";

import * as scenes from './scenes/scenes';

const options: EngineOptions = {};
const game = new Engine(options);

const txPlayer = new Texture('/assets/gui/actors/hero/player.png')
const loader = new Loader([txPlayer])

scenes.init(game);

game
  .start(loader)
  .then(() => {
    game.goToScene('menu');
  });
