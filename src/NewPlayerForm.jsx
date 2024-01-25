import React from "react";

const NewPlayerForm = () => {
  const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/";

  const addNewPlayer = async (playerObj) => {
    try {
      const response = await fetch(`${APIURL}players`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(playerObj),

      });

      if (response.ok) {
        console.log("Player added successfully!");
        alert ("Player added successfully!")
      } else {
        console.error("Failed to add player. Server response:", response.statusText);
      }
    } catch (err) {
      console.error("Oops, something went wrong with adding that player!", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const breed = document.getElementById("breed").value;
    const imageURL = document.getElementById("imageURL").files[0];

    await addNewPlayer({ name, breed, imageURL });

    document.getElementById("name").value = "";
    document.getElementById("breed").value = "";
    document.getElementById("image").files = "";
  };

  return (
    <div id="intro">
      <h2>Add New Player</h2>
      <form id="new-player" onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Name" required />
        <input type="text" id="breed" placeholder="Breed" required />
        <label htmlFor="image">Player Image:</label>
        <input type="file" id="imageURL" accept="image/*" />
        <button type="submit">Add New Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
