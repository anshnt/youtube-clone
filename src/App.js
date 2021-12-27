import "./App.css";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecomendedVideos from "./components/RecomendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <RecomendedVideos />
              </div>
            }
          />

          <Route
            path="/search/:searchTerm"
            element={
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
