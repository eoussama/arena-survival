import { Loader, Texture } from "excalibur";
import { actorsTable } from "./textures/actors";



/**
 * The resource object type
 */
export type ResourceObject = { id: string, resource: Texture };



/**
 * The assets loader
 */
export class AssetLoader extends Loader {

  /**
   * The loader collection
   */
  public static loader = new Loader([
    ...actorsTable.map(actor => actor.resource)
  ]);

  /**
   * The resource collection
   */
  public static resouces: ResourceObject[] = [
    ...actorsTable
  ];

  /**
   * Gets a resource by ID
   * @param id The ID of the resource
   */
  public static getById = (id: string): Texture => AssetLoader.resouces.filter(actor => actor.id === id)[0].resource;
}
