import React, { FC } from "react";
import { Cell } from "../modules/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}
export const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => click(cell)}
      style={{ background: cell.figure && cell.available ? "green" : "" }}
    >
      {!cell.figure && cell.available && <div className="available"></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt={"/"} />}
    </div>
  );
};
