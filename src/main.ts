import {
  Engine,
  EngineOptions
} from "excalibur";
import { Menu } from "./scenes/menu";
import { Player } from "./actors/player";

const options: EngineOptions = {};
const game = new Engine(options);

const menu = new Menu(game);
const player = new Player();

menu.add(player);
game.addScene('menu', menu);

game
  .start()
  .then(() => {
    game.goToScene('menu');
  });
