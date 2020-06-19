import { Actor, Engine, SpriteSheet, Input } from "excalibur";
import { Direction } from "../../enums/direction";
import { PlayerState } from "../../enums/playerState";
import { AssetLoader } from "../../loader/loader";



/**
 * The player actor
 */
export class Character extends Actor {
  protected speed: number = 2;
  protected animations: any = {};
  protected direction: Direction = Direction.Down;
  protected state: PlayerState = PlayerState.Idle;

  /**
   * Initializes the player
   * @param engine The engine object
   */
  public onInitialize(engine: Engine) {
    console.log('Initializing the character...');

    const playerSheet = AssetLoader.getById('player');

    this.scale.x = 5;
    this.scale.y = 5;

    this.animations.idle = {
      down: (new SpriteSheet(playerSheet, 3, 4, 16, 16)).getSprite(1),
      up: (new SpriteSheet(playerSheet, 3, 4, 16, 16)).getSprite(4),
      left: (new SpriteSheet(playerSheet, 3, 4, 16, 16)).getSprite(7),
      right: (new SpriteSheet(playerSheet, 3, 4, 16, 16)).getSprite(10)
    };

    this.animations.move = {
      down: (new SpriteSheet(playerSheet, 3, 1, 16, 16)).getAnimationByIndices(engine, [0, 1, 2], 130),
      up: (new SpriteSheet(playerSheet, 3, 2, 16, 16)).getAnimationByIndices(engine, [3, 4, 5], 130),
      left: (new SpriteSheet(playerSheet, 3, 3, 16, 16)).getAnimationByIndices(engine, [6, 7, 8], 130),
      right: (new SpriteSheet(playerSheet, 3, 4, 16, 16)).getAnimationByIndices(engine, [9, 10, 11], 130)
    };
  }

  /**
   * Draws the player
   * @param ctx The canvas context
   * @param delta Delta time
   */
  public onPostDraw(ctx: CanvasRenderingContext2D, delta: number) {
    this.currentDrawing = this.animations[this.state][this.direction];
  }
}
