import { blackPawn, whitePawn } from "src/assets";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackPawn : whitePawn;
    this.name = FigureNames.PAWN;
  }
}
