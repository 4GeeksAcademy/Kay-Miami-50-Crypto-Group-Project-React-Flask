import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./pages/home";
import { Favorites } from "./pages/favorites";
import { Top10 } from "./pages/top10";
import { Bottom10 } from "./pages/bottom10";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import App from "./component/App";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { Passie } from "./component/Passie";
import Private from "./component/private";
import NewsFeed from "./component/NewsFeed";
import CryptoCard from "./component/CryptoCard";

import { stateContext } from "./store/appContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  const [fav, setFav] = useState([]);

  const handleRemove = (item) => {
		const updatedFavorites = fav.filter((favItem) => favItem !== item);
		setFav(updatedFavorites);
	};

  return (
    <div>
      <stateContext.Provider value={{ fav, setFav }}>
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <Navbar />
            <Sidebar />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <CryptoCard />
                    <NewsFeed />
                  </>
                }
              />
              <Route path="/App" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/private" element={<Private />} />
              <Route path="/register" element={<Register />} />
              <Route path="/passie" element={<Passie />} />
              <Route path="/newsfeed" element={<NewsFeed />} />
              <Route path="/favorites" element={<Favorites fav={fav} setFav={setFav} handleRemove={handleRemove} />} />
              <Route path="/top" element={<Top10 />} />
              <Route path="/bottom" element={<Bottom10 />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/single/:theid" element={<Single />} />
              <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </stateContext.Provider>
    </div>
  );
};

export default injectContext(Layout);
