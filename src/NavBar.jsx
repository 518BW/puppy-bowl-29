import { Routes, Route, Link } from "react-router-dom"
import NewPlayerForm from "./NewPlayerForm"
import SinglePlayer from "./SinglePlayer"
import App from "./App"

function NavBar() {
    return(
     
      <div id="container">
        <div id="navbar" className="bottom-navbar">
          <Link to={"/newplayerform"}>New Player Form</Link> 
          <Link to={"/singleplayer"}>SinglePlayer</Link>
          <Link to={"/"}>Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/newplayerform" element={<NewPlayerForm />} />
            <Route path="/singleplayer" element={<SinglePlayer />} />

            <Route path="*" element={<App />} />
          </Routes>
          </div>
      </div>
     
    )
  }
  
  export default NavBar