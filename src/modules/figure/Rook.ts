import { blackRook, whiteRook } from "src/assets";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
//Ладья
export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackRook : whiteRook;
    this.name = FigureNames.ROOK;
  }
}
