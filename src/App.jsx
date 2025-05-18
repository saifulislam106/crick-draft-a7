import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import PlayerCards from "./components/playerCards/PlayerCards";
import SelectedPlayer from "./components/selectedPlayer/SelectedPlayer";

function App() {
  const [coins, setCoins] = useState(0);
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available",
  });
  const [players, setPlayers] = useState([]);
  const [selectPlayer, setSelectPlayer] = useState([]);

  useEffect(() => {
    fetch("/public/fack.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlayers(data);
      });
  }, []);

  //  handle coin function
  const handleCoins = (value) => {
    const newValue = coins + value;
    setCoins(newValue);
  };

  const handleRemainigCoin = (price) => {
    setCoins(coins - price);
  };

  // handle conditional rendaring
  const handleActivate = (active) => {
    if (active == "available") {
      setIsActive({ available: true, status: "available" });
    } else {
      setIsActive({ available: false, status: "selected" });
    }
  };
  // handle choose player
  const handleChoosePlayer = (player) => {
    const isExist = selectPlayer.find((p) => p.id == player.id);
    if (!isExist) {
      handleRemainigCoin(player.price);
      const newSelected = [...selectPlayer, player];
      if (newSelected.length < 7) {
        setSelectPlayer(newSelected);
      } else {
        alert("No more player added");
      }
    } else {
      alert("This player is existed");
    }
  };

  const handleDeletePlayerPrice = (id) => {
    const player = selectPlayer.find((p) => p.id == id);
    setCoins(coins+player.price)
  };
  const handleDeletePlayer = (id) => {
    handleDeletePlayerPrice(id);
    const remainingPlayer = selectPlayer.filter((p) => p.id !== id);
    setSelectPlayer(remainingPlayer);
  };

  return (
    <>
      <Navbar coins={coins} />
      <Banner handleCoins={handleCoins} />

      {/* conditional rendaring  */}
      <div className="min-h-screen container mx-auto">
        <div className="my-12 flex justify-end gap-2">
          <button
            onClick={() => handleActivate("available")}
            className={`${isActive.available ? "btn btn-primary" : "btn"}`}
          >
            Abailabe
          </button>
          <button
            onClick={() => handleActivate("selected")}
            className={`${isActive.available ? "btn" : "btn btn-primary"}`}
          >
            Selected {selectPlayer.length}
          </button>
        </div>
        {isActive.available ? (
          <PlayerCards
            players={players}
            handleChoosePlayer={handleChoosePlayer}
          />
        ) : (
          <SelectedPlayer
            selectPlayer={selectPlayer}
            handleDeletePlayer={handleDeletePlayer}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
