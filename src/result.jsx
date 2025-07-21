import { useNavigate, useLocation } from "react-router-dom";
import confetti from "canvas-confetti";

function Details() {
  const location = useLocation();

  const navigate = useNavigate();

  const newGame = () => {
    navigate("/");
  };

  if (location.state.winner === "X" || location.state.winner === "O") {
    console.log("someone won");
    const myCanvas = document.createElement("canvas");
    myCanvas.style.position = "fixed";
    myCanvas.style.top = "0";
    myCanvas.style.left = "0";
    myCanvas.style.width = "100%";
    myCanvas.style.height = "100%";
    myCanvas.style.zIndex = "1";
    document.body.appendChild(myCanvas);

    const myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true,
    });
    myConfetti({
      particleCount: 300,
      spread: 200,
      zIndex: 1,
      ticks: 1000,
    });

    myConfetti();

    return (
      <div className="h-screen bg-white flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-3xl mb-10">
          PLAYER {location.state.winner} WON
        </h1>

        <button
          className="border-2 border-black hover:bg-black p-2 hover:text-white rounded-2xl z-10"
          onClick={() => {
            myCanvas.remove();
            newGame();
          }}
        >
          NEXT GAME
        </button>
      </div>
    );
  } else {
    console.log("someone drawed");

    return (
      <div className="h-screen bg-white flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-3xl mb-10">DRAW</h1>

        <button
          className="border-2 border-black hover:bg-black p-2 hover:text-white rounded-2xl z-10"
          onClick={newGame}
        >
          Next Game
        </button>
      </div>
    );
  }
}

export default Details;
