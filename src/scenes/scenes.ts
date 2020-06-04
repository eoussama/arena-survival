import { Engine } from "excalibur";
import { Menu } from "./menu";

/**
 * Initializes the scenes
 * @param engine The engine object
 */
export function init(engine: Engine): void {
  const menu = new Menu(engine);
  engine.addScene('menu', menu);
}
