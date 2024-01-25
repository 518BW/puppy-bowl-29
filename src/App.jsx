import React from "react";
import Players from "./features/players/Players";
import NewPlayerForm from "./NewPlayerForm";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  const [searchResults, setSearchResults] = useState([]);

  const searchApi = async (query) => {

    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/${query}`);
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
      
      {searchResults.map((result) => (
        <div key={result.id}>{result.player}</div>
        ))}
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-player-form">New Player Form</Link>
          </li>
          <li>
            <Link to="/all-players">All Players</Link>
          </li>
        </ol>
      </nav>

    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/new-player-form" element={<NewPlayerForm />} />
      <Route path="/all-players" element={<Players />} />
    </Routes>
    </div>
    
  );
}

export default App;
