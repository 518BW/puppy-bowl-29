import React from "react";
import Players from "./features/players/Players";
import NewPlayerForm from "./NewPlayerForm";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SinglePlayer from "./features/players/SinglePlayers";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  const [searchResults, setSearchResults] = useState([]);

  const searchApi = async (query) => {

    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players?q=${query}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    
<div className="app-container">
      <nav>
      <SearchBar onSearch={searchApi} className="search" />
      
      {searchResults.length > 0 && (
  <div>
    {searchResults.map((result) => (
      <div key={result.id}>{result.player}</div>
    ))}
  </div>
)}
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-player-form">New Player Form</Link>
          </li>
          <li>
            <Link to="/players">All Players</Link>
          </li>
        </ol>
      </nav>

    <Routes>   
      <Route path="/new-player-form" element={<NewPlayerForm />} />
      <Route path="/players/:id" element={<SinglePlayer />} />
      <Route path="/players" element={<Players />} />
    </Routes>
    <Header />
    <Players />
    </div>
   
  );
}

export default App;
