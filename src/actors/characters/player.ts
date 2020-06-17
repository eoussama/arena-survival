import { Actor, Engine, Input, Vector, SpriteSheet } from "excalibur";
import { AssetLoader } from "../../loader/loader";
import { Direction } from "../../enums/direction";
import { PlayerState } from "../../enums/playerState";



/**
 * The player actor
 */
export class Player extends Actor {

  private speed: number = 2;
  private animations: any = {};
  private direction: Direction = Direction.Down;
  private state: PlayerState = PlayerState.Idle;

  /**
   * Initializes the player
   * @param engine The engine object
   */
  public onInitialize(engine: Engine) {
    console.log('Initializing the player...');

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

  /**
   * Updates the player
   * @param engine The engine object
   * @param delta Delta time
   */
  public update(engine: Engine, delta: number) {
    super.update(engine, delta);

    if (engine.input.keyboard.isHeld(Input.Keys.Up)) {
      this.body.pos.y -= this.speed;

      this.state = PlayerState.Move;
      this.direction = Direction.Up;
    } else if (engine.input.keyboard.isHeld(Input.Keys.Down)) {
      this.body.pos.y += this.speed;

      this.state = PlayerState.Move;
      this.direction = Direction.Down;
    } else if (engine.input.keyboard.isHeld(Input.Keys.Left)) {
      this.body.pos.x -= this.speed;

      this.state = PlayerState.Move;
      this.direction = Direction.Left;
    } else if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
      this.body.pos.x += this.speed;

      this.state = PlayerState.Move;
      this.direction = Direction.Right;
    } else if (engine.input.keyboard.isHeld(Input.Keys.Space)) {
      console.log('Attack');
    } else {
      this.state = PlayerState.Idle;
    }
  }
}
