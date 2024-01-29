import React, { useState, useEffect } from "react";
import { useFetchPlayersQuery } from "../../api/puppyBowlApi";
import SinglePlayer from "./SinglePlayers";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null); // State to track the selected player
  const { data = {}, error, isLoading, refetch } = useFetchPlayersQuery();

  useEffect(() => {
    if (!isLoading && !error && data.data) {
      setPlayers(data.data.players);
    }
  }, [data, isLoading, error]);

  const handleMoreInfo = async (playerId) => {
    try {
      await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/${playerId}`, { method: "POST" });
      refetch()
    } catch (err) {
      console.error(`Whoops, trouble locating player #${playerId}!`, err);
    }
    setSelectedPlayerId(playerId); // Set the selected player ID
  };
  

  const handleRemovePlayer = async (playerId) => {
    try {
      await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/${playerId}`, { method: "DELETE" });
      refetch();
    } catch (err) {
      console.error(`Whoops, trouble removing player #${playerId} from the roster!`, err);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {selectedPlayerId ? (
        // Render SinglePlayer component if a player is selected
        <SinglePlayer playerId={selectedPlayerId} onClose={() => setSelectedPlayerId(null)} />
      ) : (
        <div className="players">
          {players.map((player) => (
            <div key={player.id} className="player-card">
              <div className="player-image-container">
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className="player-image"
                />
              </div>
              <div className="player-details">
                <h2>Hi, I'm {player.name} </h2>
                <p>Breed: {player.breed} </p>
                <p>Status: {player.status} </p>
                <button
                  type="button"
                  onClick={() => handleMoreInfo(player.id)}
                >
                  More Info
                </button>
                <button
                  type="button"
                  onClick={() => handleRemovePlayer(player.id)}
                >
                  Remove Player
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Players;

