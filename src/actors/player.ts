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

  /**
   * Updates the player
   * @param engine The engine object
   * @param delta Delta time
   */
  public update(engine: Engine, delta: number) {
    if (engine.input.keyboard.isHeld(Input.Keys.Up)) {
      console.log('Move up');
    } else if (engine.input.keyboard.isHeld(Input.Keys.Down)) {
      console.log('Move down');
    } else if (engine.input.keyboard.isHeld(Input.Keys.Left)) {
      console.log('Move left');
    } else if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
      console.log('Move right');
    } else if (engine.input.keyboard.isHeld(Input.Keys.Space)) {
      console.log('Attack');
    }
  }
}
