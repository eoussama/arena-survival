import { Actor, Engine, Input } from "excalibur";
import { AssetLoader } from "../loader/loader";



/**
 * The player actor
 */
export class Player extends Actor {

  /**
   * Initializes the player
   * @param engine The engine object
   */
  public onInitialize(engine: Engine) {
    console.log('Initializing the player...');
    this.addDrawing(AssetLoader.getById('player').asSprite());
  }

  /**
   * Draws the player
   * @param ctx The canvas context
   * @param delta Delta time
   */
  public onPostDraw(ctx: CanvasRenderingContext2D, delta: number) { }

  public update(engine: Engine, delta: number) {
    console.log({ delta });
    if (engine.input.keyboard.isHeld(Input.Keys.Up)) {
      console.log('Move up.');
    }
  }
}
