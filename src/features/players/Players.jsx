import React from "react";
import { useFetchPlayersQuery } from "../../api/puppyBowlApi";
import Header from "../../Header";

const Players = () => {
  const { data = {}, error, isLoading, refetch } = useFetchPlayersQuery();

  const handleMoreInfo = (id) => {
    alert(`Player id: ${id}`);
  };

  const handleRemovePlayer = async (playerId) => {
    try {
      await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/${playerId}`, { method: "DELETE" });
  
    } catch (err) {
      console.error(
        `Whoops, trouble removing player #${playerId} from the roster!`,
        err
      );
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="players">
      {data.data.players.map((player) => (
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
  );
};

export default Players;
