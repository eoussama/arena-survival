import { Actor, Engine, Input, Vector, SpriteSheet } from "excalibur";
import { AssetLoader } from "../loader/loader";



/**
 * The player actor
 */
export class Player extends Actor {

  private speed: number = 2;
  private animations: any = {};

  /**
   * Initializes the player
   * @param engine The engine object
   */
  public onInitialize(engine: Engine) {
    console.log('Initializing the player...');

    const playerSheet = AssetLoader.getById('player');

    this.scale.x = 5;
    this.scale.y = 5;

    this.animations.playerIdle = (new SpriteSheet(playerSheet, 3, 4, 16, 16)).getSprite(1);
    this.animations.playerDownAnimation = (new SpriteSheet(playerSheet, 3, 4, 16, 16)).getAnimationByIndices(engine, [0, 1, 2], 130);
    this.animations.playerUpAnimation = (new SpriteSheet(playerSheet, 3, 4, 16, 16)).getAnimationByIndices(engine, [3, 4, 5], 130);
    this.animations.playerLeftAnimation = (new SpriteSheet(playerSheet, 3, 4, 16, 16)).getAnimationByIndices(engine, [6, 7, 8], 130);
    this.animations.playerRightAnimation = (new SpriteSheet(playerSheet, 3, 4, 16, 16)).getAnimationByIndices(engine, [9, 10, 11], 130);

    this.currentDrawing = this.animations.playerIdle;
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
      this.body.pos.y -= this.speed;

      if (this.animations) {
        this.currentDrawing = this.animations.playerUpAnimation;
      }
    } else if (engine.input.keyboard.isHeld(Input.Keys.Down)) {
      this.body.pos.y += this.speed;

      if (this.animations) {
        this.currentDrawing = this.animations.playerDownAnimation;
      }
    } else if (engine.input.keyboard.isHeld(Input.Keys.Left)) {
      this.body.pos.x -= this.speed;

      if (this.animations) {
        this.currentDrawing = this.animations.playerLeftAnimation;
      }
    } else if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
      this.body.pos.x += this.speed;

      if (this.animations) {
        this.currentDrawing = this.animations.playerRightAnimation;
      }
    } else if (engine.input.keyboard.isHeld(Input.Keys.Space)) {
      console.log('Attack');
    } else {
      this.currentDrawing = this.animations.playerIdle;
    }
  }
}
