import { useNavigate, useLocation } from "react-router-dom";

function Details() {
    const location = useLocation();

    const navigate = useNavigate();

    const newGame = () => {
        navigate("/")
    }

    console.log(location);
    console.log(location.state.winner === "X");
    console.log(location.state.winner === "O");
    if (location.state.winner === "X" || location.state.winner === "O") {
        console.log("someone won");
        return (
            <div className="h-screen bg-white flex flex-col justify-center items-center">
                <h1>Player {location.state.winner} Won!!!!!!!</h1>
    
                <button className="border-2 border-black hover:bg-black p-2 hover:text-white" onClick={newGame}>Next Game</button>
            </div>
        );    
    }
    else {
        console.log("someone drawed");
        return (
            <div className="h-screen bg-white flex flex-col justify-center items-center">
                <h1>Draw</h1>
    
                <button className="border-2 border-black hover:bg-black p-2 hover:text-white" onClick={newGame}>Next Game</button>
            </div>
        );
    }
  };
  
  export default Details;