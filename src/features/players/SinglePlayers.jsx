import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetchSinglePlayerQuery } from "../../api/puppyBowlApi";
import { useNavigate } from "react-router-dom";
import {
  CardContent,
  Card,
  Typography,
  Grid,
  CircularProgress,
  Alert,
  CardActions,
  Button,
} from "@mui/material";


const SinglePlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useFetchSinglePlayerQuery(id);

  useEffect(() => {
    // Log the player ID when it changes
    console.log(data?.player?.id);
  }, [data?.player?.id]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error || !data?.player) {
    return (
      <>
        <Alert severity="error">
          Failed to load player! Please try again.
        </Alert>
        <Button onClick={() => navigate("/players")}>Go back</Button>
      </>
    );
  }

  const { player } = data;

  return (
    <div>
      <Button onClick={() => navigate("/players")}>Go back</Button>
      <div key={player.id} className="player-card">
        <div className="player-image-container">
          <img src={player.imageUrl} alt={player.name} className="player-image" />
        </div>
        <div className="player-details">
          <h2>Hi, I'm {player.name} </h2>
          <p>Cohort: {player.cohort} </p>
          <p>Team ID: {player.teamId} </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
