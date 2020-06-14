import { Actor, Engine, Input, Vector, SpriteSheet } from "excalibur";
import { AssetLoader } from "../loader/loader";



/**
 * The player actor
 */
export class Player extends Actor {

  private speed: number = 2;

  /**
   * Initializes the player
   * @param engine The engine object
   */
  public onInitialize(engine: Engine) {
    console.log('Initializing the player...');

    const playerSheet = AssetLoader.getById('player');

    this.scale.x = 5;
    this.scale.y = 5;

    const playerIdleSheet = new SpriteSheet(playerSheet, 3, 1, 16, 16);

    const playerUpAnimation = playerIdleSheet.getAnimationForAll(engine, 125);
    const playerDownAnimation = playerIdleSheet.getAnimationForAll(engine, 125);
    const playerLeftAnimation = playerIdleSheet.getAnimationForAll(engine, 125);
    const playerRightAnimation = playerIdleSheet.getAnimationForAll(engine, 125);

    this.addDrawing('idle', playerDownAnimation);
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
      this.body.pos.y -= this.speed;
    } else if (engine.input.keyboard.isHeld(Input.Keys.Down)) {
      console.log('Move down');
      this.body.pos.y += this.speed;
    } else if (engine.input.keyboard.isHeld(Input.Keys.Left)) {
      console.log('Move left');
      this.body.pos.x -= this.speed;
    } else if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
      console.log('Move right');
      this.body.pos.x += this.speed;
    } else if (engine.input.keyboard.isHeld(Input.Keys.Space)) {
      console.log('Attack');
    }
  }
}
