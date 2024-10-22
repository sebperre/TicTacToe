import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function checkWinCondition(slots) {
  if (slots[0] === "X" && slots[1] === "X" && slots[2] === "X") {
    return "X"
  }
  else if (slots[3] === "X" && slots[4] === "X" && slots[5] === "X") {
    return "X"
  }
  else if (slots[6] === "X" && slots[7] === "X" && slots[8] === "X") {
    return "X"
  }
  else if (slots[0] === "X" && slots[3] === "X" && slots[6] === "X") {
    return "X"
  }
  else if (slots[1] === "X" && slots[4] === "X" && slots[7] === "X") {
    return "X"
  }
  else if (slots[2] === "X" && slots[5] === "X" && slots[8] === "X") {
    return "X"
  }
  else if (slots[0] === "X" && slots[4] === "X" && slots[8] === "X") {
    return "X"
  }
  else if (slots[2] === "X" && slots[4] === "X" && slots[6] === "X") {
    return "X"
  }
  else if (slots[0] === "O" && slots[1] === "O" && slots[2] === "O") {
    return "O"
  }
  else if (slots[3] === "O" && slots[4] === "O" && slots[5] === "O") {
    return "O"
  }
  else if (slots[6] === "O" && slots[7] === "O" && slots[8] === "O") {
    return "O"
  }
  else if (slots[0] === "O" && slots[3] === "O" && slots[6] === "O") {
    return "O"
  }
  else if (slots[1] === "O" && slots[4] === "O" && slots[7] === "O") {
    return "O"
  }
  else if (slots[2] === "O" && slots[5] === "O" && slots[8] === "O") {
    return "O"
  }
  else if (slots[0] === "O" && slots[4] === "O" && slots[8] === "O") {
    return "O"
  }
  else if (slots[2] === "O" && slots[4] === "O" && slots[6] === "O") {
    return "O"
  }
}

function updateSquare(slots, setSlots, index, turn, setTurn) {
  if (slots[index] === " ") {
    const updateSlots = slots.slice();
    updateSlots[index] = turn[0];
    if (turn[0] === "X") {
      setTurn(["O", +turn[1] + 1]);
    }
    else {
      setTurn(["X", +turn[1] + 1]);
    }
    setSlots(updateSlots);
  }
}

function App() {
  const navigate = useNavigate();
  const [slots, setSlots] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  const [turn, setTurn] = useState(["X", 0]);

  useEffect(() => {
    const win = checkWinCondition(slots);
    if (win === "X" || win === "O" || +turn[1] === 9) {
      navigate("/result", {state:{winner:win}});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turn])

  return (
    <div className="h-screen grid grid-cols-3 gap-4 grid-rows-3">
      {slots.map((slot, index) => (
        <button key={index} onClick={() => updateSquare(slots, setSlots, index, turn, setTurn)} className="bg-white text-black p-4 rounded text-6xl">
          {slot}
        </button>))}
    </div>
  );
}

export default App;
