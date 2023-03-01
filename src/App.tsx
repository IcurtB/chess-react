import React, { useState, useEffect } from "react";
import "./App.css";
import { BoardComponent } from "./component/BoardComponent";
import { Board } from "./modules/Board";
import { Colors } from "./modules/Colors";
import { Player } from "./modules/Player";
const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);
  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigure();
    setBoard(newBoard);
  }
  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }
  return (
    <div className="app">
      <BoardComponent setBoard={setBoard} board={board} />
    </div>
  );
};

export default App;
