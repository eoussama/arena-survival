import { Actor, Engine, SpriteSheet, Texture } from "excalibur";
import { Direction } from "../../enums/direction";
import { PlayerState } from "../../enums/playerState";
import { AssetLoader } from "../../loader/loader";



/**
 * The character actor
 */
export class Character extends Actor {

  //#region Properties

  protected speed: number = 2;
  protected animations: any = {};
  protected direction: Direction = Direction.Down;
  protected state: PlayerState = PlayerState.Idle;

  private spriteSheet: Texture;

  //#endregion

  //#region Lifecycle

  constructor(params?: any) {
    super(params);
    this.spriteSheet = params.spriteSheet;
  }

  /**
   * Initializes the character
   * @param engine The engine object
   */
  public onInitialize(engine: Engine) {
    this.pos.x = engine.currentScene.camera.x;
    this.pos.y = engine.currentScene.camera.y;

    this.height = 256;
    this.width = 256;

    this.scale.x = 5;
    this.scale.y = 5;

    if (this.spriteSheet) {
      this.animations.idle = {
        down: (new SpriteSheet(this.spriteSheet, 3, 4, 16, 16)).getSprite(1),
        up: (new SpriteSheet(this.spriteSheet, 3, 4, 16, 16)).getSprite(4),
        left: (new SpriteSheet(this.spriteSheet, 3, 4, 16, 16)).getSprite(7),
        right: (new SpriteSheet(this.spriteSheet, 3, 4, 16, 16)).getSprite(10)
      };

      this.animations.move = {
        down: (new SpriteSheet(this.spriteSheet, 3, 1, 16, 16)).getAnimationByIndices(engine, [0, 1, 2], 130),
        up: (new SpriteSheet(this.spriteSheet, 3, 2, 16, 16)).getAnimationByIndices(engine, [3, 4, 5], 130),
        left: (new SpriteSheet(this.spriteSheet, 3, 3, 16, 16)).getAnimationByIndices(engine, [6, 7, 8], 130),
        right: (new SpriteSheet(this.spriteSheet, 3, 4, 16, 16)).getAnimationByIndices(engine, [9, 10, 11], 130)
      };
    }
  }

  /**
   * Draws the character
   * @param ctx The canvas context
   * @param delta Delta time
   */
  public onPostDraw(ctx: CanvasRenderingContext2D, delta: number) {
    if (this.spriteSheet) {
      this.currentDrawing = this.animations[this.state][this.direction];
    }
  }

  //#endregion

  //#region Methods

  public move(direction: Direction) { }

  //#endregion
}
