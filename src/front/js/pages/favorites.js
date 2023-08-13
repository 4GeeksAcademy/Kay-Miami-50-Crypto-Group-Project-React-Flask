import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import axios from "axios";
import "../../styles/favorite.css";

export const Favorites = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
      actions.startCryptoDataUpdate();
    }, []);
  
    const { cryptoData } = store;

    if (!cryptoData || cryptoData.length === 0) {
        return null;
    }

	return (
		<div className="text-center mt-5">
		  <h1>Favorites</h1>
		  <div className="scrollable-container">
		  {Array.isArray(fav) && fav.map((crypto) => (
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
				  className="closer dropdown-item"
			      onClick={() => handleRemove(favItem)}
				>
					Remove
				</button>
			  </div>
			))}
		  </div>
		</div>
	);
};