import { useNavigate, useLocation } from "react-router-dom";

function Details() {
    const location = useLocation();
    console.log(location.state.winner);

    const navigate = useNavigate();

    const newGame = () => {
        navigate("/")
    }

    return (
        <div className="h-screen bg-white flex flex-col justify-center items-center">
            <h1>Player {location.state.winner} Won!!!!!!!</h1>

            <button className="border-2 border-black hover:bg-black p-2 hover:text-white" onClick={newGame}>Next Game</button>
        </div>
    );
  };
  
  export default Details;