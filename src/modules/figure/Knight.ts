import { blackKnight, whiteKnight } from "src/assets";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
export class Knignt extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackKnight : whiteKnight;
    this.name = FigureNames.KNIGHT;
  }
}
