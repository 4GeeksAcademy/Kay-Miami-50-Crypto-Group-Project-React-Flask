import React from "react";
import NewsFeed from "../component/NewsFeed";
import CryptoCard from "../component/CryptoCard";
import "../../styles/home.css";
const Home = ({ fav, setFav, handleRemove }) => {
  return (
    <div className="content-container">
      <div className="home">
        <h2 className="prices-header">Prices</h2>
        <CryptoCard fav={fav} setFav={setFav} handleRemove={handleRemove} />
        <NewsFeed />
      </div>
    </div>
  );
};

export default Home;
