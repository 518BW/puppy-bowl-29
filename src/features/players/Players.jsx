import React from "react";
import { useFetchPlayersQuery } from "../../api/puppyBowlApi";

const Players = () => {
  const { data = {}, error, isLoading, refetch } = useFetchPlayersQuery();

  const handleMoreInfo = (id) => {
    // Handle the logic to grab cohortId from the API
    console.log(`Player id: ${id}`);
  };

  const handleRemovePlayer = async (playerId) => {
    // Handle the logic to remove a player from the API
    console.log(`Removing player with id: ${playerId}`);
    // Add your API call to delete the player
    // After successful removal, trigger a refetch of players
    
    await refetch();
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
