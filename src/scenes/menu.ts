import { Scene, Engine } from "excalibur";
import { Player } from "../actors/characters/player";
import { Character } from "../actors/characters/character";
import { Enemy } from "../actors/characters/enemy";



/**
 * The menu scene
 */
export class Menu extends Scene {

  /**
   * Initializes the menu scene
   * @param engine The engine object
   */
  public onInitialize(engine: Engine) {
    console.log('Initializing the menu scene...');

    const char = new Enemy();
    const player = new Player();

    this.add(char);
    this.add(player);
  }
}
