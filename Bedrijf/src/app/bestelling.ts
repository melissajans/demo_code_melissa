import { Bestellijn } from "./bestellijn";
import { Klant } from "./klant";

export class Bestelling {
  public id:string;
  public klantid:string;
  public details: Bestellijn[] = [];
  public klantOBJ:Klant;
  constructor(){}
}
