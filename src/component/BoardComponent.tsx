import React, { useEffect, useState } from "react";
import { Cell } from "src/modules/Cell";
import { Board } from "../modules/Board";
import { CellComponent } from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (boeard: Board) => void;
}
export const BoardComponent = ({ board, setBoard }: BoardProps) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  function click(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    } else {
      setSelectedCell(cell);
    }
  }
  function highlightCells() {
    board.highlightCells(selectedCell);
    updateBoard();
  }
  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }
  useEffect(() => {
    highlightCells();
  }, [selectedCell]);
  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              cell={cell}
              key={cell.id}
              click={click}
              selected={
                cell.x === selectedCell?.x && cell.y === selectedCell?.y
              }
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
