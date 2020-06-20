import { Scene, Engine } from "excalibur";
import { Player } from "../actors/characters/player";
import { Character } from "../actors/characters/character";



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

    const char = new Character({
      x: engine.currentScene.camera.x + 100,
      y: engine.currentScene.camera.y,
      width: 256,
      height: 256
    });

    const player = new Player({
      x: engine.currentScene.camera.x,
      y: engine.currentScene.camera.y,
      width: 256,
      height: 256
    });

    this.add(char);
    this.add(player);
  }
}
