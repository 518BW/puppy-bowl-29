// SinglePlayer.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "./api"; // Import your API module

const SinglePlayer = () => {
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const playerData = await fetchSinglePlayer(playerId);
        setPlayer(playerData);
      } catch (error) {

        console.error("Error fetching player details:", error);
      }
    };

    fetchPlayerDetails();
  }, [playerId]);

  return (
    <div>
      {player ? (
        <>
          <h2>{player.name}</h2>
          <p>Breed: {player.breed}</p>
          <img src={player.imageURL} alt={player.name} />
        
        </>
      ) : (
        <p>Loading player details...</p>
      )}
    </div>
  );
};

export default SinglePlayer;
