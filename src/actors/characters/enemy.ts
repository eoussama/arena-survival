import { Character } from "./character"
import { Engine } from "excalibur";
import { AssetLoader } from "../../loader/loader";



export class Enemy extends Character {

  //#region Lifecycle

  constructor(params: any) {
    super({
      ...params,
      spriteSheet: AssetLoader.getById('player')
    });
  }

  /**
   * Initializes the enemy
   * @param engine The engine object
   */
  public onInitialize(engine: Engine) {
    super.onInitialize(engine);
    console.log('Initializing the player...');
  }

  //#endregion

}