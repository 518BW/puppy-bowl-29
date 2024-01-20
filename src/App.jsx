import React from "react";
import Players from "./features/players/Players";
import Header from "./Header";
import NewPlayerForm from "./NewPlayerForm";



function App() {

  return (
    <div className="App">
     
      <Header />
      <NewPlayerForm />
      <Players />
    </div>    
  );
}

export default App;
