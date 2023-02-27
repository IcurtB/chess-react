import React from "react";
import { Board } from "../modules/Board";
import { CellComponent } from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (boeard: Board) => void;
}
export const BoardComponent = ({ board, setBoard }: BoardProps) => {
  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent cell={cell} key={cell.id} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
