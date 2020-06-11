import { Actor, Engine, Input, Vector } from "excalibur";
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

    const sprite = AssetLoader.getById('player').asSprite();

    sprite.scale = new Vector(5, 5);
    this.addDrawing(sprite);
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
    super.update(engine, delta);

    if (engine.input.keyboard.isHeld(Input.Keys.Up)) {
      console.log('Move up');
      this.body.pos.y -= 1;
    } else if (engine.input.keyboard.isHeld(Input.Keys.Down)) {
      console.log('Move down');
      this.body.pos.y += 1;
    } else if (engine.input.keyboard.isHeld(Input.Keys.Left)) {
      console.log('Move left');
      this.body.pos.x -= 1;
    } else if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
      console.log('Move right');
      this.body.pos.x += 1;
    } else if (engine.input.keyboard.isHeld(Input.Keys.Space)) {
      console.log('Attack');
    }
  }
}
