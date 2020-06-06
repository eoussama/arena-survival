import { Actor, Engine } from "excalibur";

export class Player extends Actor {

  /**
   * Initializes the player
   * @param engine The engine object
   */
  public onInitialize(engine: Engine) {
    console.log('Initializing the player...');
  }

  /**
   * Draws the player
   * @param ctx The canvas context
   * @param delta Delta time
   */
  public onPostDraw(ctx: CanvasRenderingContext2D, delta: number) { }
}
