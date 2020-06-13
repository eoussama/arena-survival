import {
  Engine,
  EngineOptions
} from "excalibur";

import { AssetLoader } from "./loader/loader";
import * as scenes from './scenes/scenes';

const options: EngineOptions = {};
const game = new Engine(options);

scenes.init(game);
game.setAntialiasing(false);

game
  .start(AssetLoader.loader)
  .then(() => {
    game.goToScene('menu');
  });
