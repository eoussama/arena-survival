import { Engine, Input } from "excalibur";
import { Direction } from "../../enums/direction";
import { PlayerState } from "../../enums/playerState";
import { Character } from "./character";
import { AssetLoader } from "../../loader/loader";



/**
 * The player actor
 */
export class Player extends Character {

  //#region Lifecycle

  constructor() {
    super({ spriteSheet: AssetLoader.getById('player') });
  }

  /**
   * Initializes the player
   * @param engine The engine object
   */
  public onInitialize(engine: Engine) {
    super.onInitialize(engine);
    console.log('Initializing the player...');
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

  //#endregion
}
