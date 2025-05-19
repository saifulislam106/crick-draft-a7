import playerImg from "../../assets/rashid.jpg"

const PlayerCards = ({players ,handleChoosePlayer,}) => {
  

  return (
    <div>
      <h1 className="font-bold text-2xl mb-5">Availabe Player</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player, idx) => (
          <div key={idx} className="card bg-base-100 shadow-xl">
            <figure>
              <img className="w-full" src={playerImg} alt={player.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{player.name}</h2>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <figure>
                    <img
                      className="w-8"
                      src={player.country_flag}
                      alt={player.name}
                    />
                  </figure>
                  <p className="text-sm"> {player.country}</p>
                </div>
                <div>
                  <p className="bg-gray-200 dark:bg-gray-700 rounded-lg p-2">
                    {player.player_type}
                  </p>
                </div>
              </div>
              <div className="border-t-2 border-gray-200 pt-4 mt-2">
                <p className="font-bold ">{player.batting_style}</p>
                <p className="font-bold">{player.bowling_style}</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">Price: {player.price}</p>
                  <button onClick={()=>handleChoosePlayer(player)} className="btn btn-primary">Player Choose</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerCards;
