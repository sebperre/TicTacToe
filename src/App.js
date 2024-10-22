import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function checkWinCondition(slots, setWinner) {
  if (slots[0] === "X" && slots[1] === "X" && slots[2] === "X") {
    setWinner("X");
  }
  else if (slots[3] === "X" && slots[4] === "X" && slots[5] === "X") {
    setWinner("X");
  }
  else if (slots[6] === "X" && slots[7] === "X" && slots[8] === "X") {
    setWinner("X");
  }
  else if (slots[0] === "X" && slots[3] === "X" && slots[6] === "X") {
    setWinner("X");
  }
  else if (slots[1] === "X" && slots[4] === "X" && slots[7] === "X") {
    setWinner("X");
  }
  else if (slots[2] === "X" && slots[5] === "X" && slots[8] === "X") {
    setWinner("X");
  }
  else if (slots[0] === "X" && slots[4] === "X" && slots[8] === "X") {
    setWinner("X");
  }
  else if (slots[2] === "X" && slots[4] === "X" && slots[6] === "X") {
    setWinner("X");
  }
  else if (slots[0] === "O" && slots[1] === "O" && slots[2] === "O") {
    setWinner("O");
  }
  else if (slots[3] === "O" && slots[4] === "O" && slots[5] === "O") {
    setWinner("O");
  }
  else if (slots[6] === "O" && slots[7] === "O" && slots[8] === "O") {
    setWinner("O");
  }
  else if (slots[0] === "O" && slots[3] === "O" && slots[6] === "O") {
    setWinner("O");
  }
  else if (slots[1] === "O" && slots[4] === "O" && slots[7] === "O") {
    setWinner("O");
  }
  else if (slots[2] === "O" && slots[5] === "O" && slots[8] === "O") {
    setWinner("O");
  }
  else if (slots[0] === "O" && slots[4] === "O" && slots[8] === "O") {
    setWinner("O");
  }
  else if (slots[2] === "O" && slots[4] === "O" && slots[6] === "O") {
    setWinner("O");
  }
}

function updateSquare(slots, setSlots, index, turn, setTurn) {
  if (slots[index] === " ") {
    const updateSlots = slots.slice();
    updateSlots[index] = turn;
    if (turn === "X") {
      setTurn("O");
    }
    else {
      setTurn("X");
    }
    setSlots(updateSlots);
  }
}

function App() {
  const navigate = useNavigate();
  const [slots, setSlots] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const index = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  // const toResult = () => {
    
  // }

  useEffect(() => {
    checkWinCondition(slots, setWinner);
  }, [slots]);

  useEffect(() => {
    if (winner === "X" || winner === "O") {
      navigate("/result", {state:{winner:winner}});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner])

  return (
    <div className="h-screen grid grid-cols-3 gap-4 grid-rows-3">
      {index.map(i => (
        <button key={i} onClick={() => updateSquare(slots, setSlots, i, turn, setTurn)} className="bg-white text-black p-4 rounded">
          {slots[i]}
        </button>))}
    </div>
  );
}

export default App;
