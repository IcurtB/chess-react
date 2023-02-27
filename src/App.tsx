import React, { useState, useEffect } from "react";
import "./App.css";
import { BoardComponent } from "./component/BoardComponent";
import { Board } from "./modules/Board";
const App = () => {
  const [board, setBoard] = useState(new Board());
  useEffect(() => {
    restart();
  }, []);
  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  }
  return (
    <div className="app">
      <BoardComponent setBoard={setBoard} board={board} />
    </div>
  );
};

export default App;
