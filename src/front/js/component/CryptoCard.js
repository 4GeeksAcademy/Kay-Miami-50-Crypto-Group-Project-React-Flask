import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import axios from "axios";
import { Star } from 'react-bootstrap-icons';
import "../../styles/card.css";

const CryptoCard = ({ fav, setFav, handleRemove }) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.startCryptoDataUpdate();
  }, []);

  const { cryptoData } = store;

  if (!cryptoData || cryptoData.length === 0) {
    return null; // Render nothing if cryptoData is empty
  }

  const handleFavorite = (crypto) => {
		if (fav.includes(crypto.id)) {
			handleRemove(crypto.id);
		} else {
			setFav([...fav, crypto.id]);
		}
	}; 

  return (
    <div className="card-container">
      <div className="scrollable-container">
        {cryptoData.map((crypto) => (
          <div className="card" key={crypto.id}>
            <img src={crypto.image} alt={crypto.name} className="thumbnail" />
            <h3>{crypto.name}</h3>
            <p>Current Price: ${crypto.current_price}</p>
            <p>Market Cap: ${crypto.market_cap}</p>
            <p>24h Price Change: {crypto.price_change_24h}</p>
            <p>
              24h Price Change Percentage: {crypto.price_change_percentage_24h}%
            </p>
            <p>Last Updated: {crypto.last_updated}</p>
            <button
							className="btn btn-outline-warning me-md-2"
						  onClick={() => handleFavorite(planet)}						
						>
							<Star />
						</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCard;
