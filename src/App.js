import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import history from './history';
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Services from "./components/services/services";
import Experience from "./components/experience/experience";
import TrelloClone from "./pages/TrelloClone/TrelloClone";
import './App.css'

function App() {
  let pathname='/'

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/vanillajs" element={SpotifyClone} />
          <Route path="/djangoapi" element={InstagramClone} /> */}
          <Route path="/reactjs" element={<TrelloClone />} />
        </Routes>
      </BrowserRouter>
      {history?.location?.pathname !== '/reactjs' &&
      <>
      <Intro />
      <Services />
      <Experience />
      </>
      }
    </div>
  );
}

export default App;