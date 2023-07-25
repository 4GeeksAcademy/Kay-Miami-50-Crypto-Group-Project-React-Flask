import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/sidebar.css";

function Sidebar() {
  const { store } = useContext(Context);

  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/top">
          <Nav.Link>Top 10</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/bottom">
          <Nav.Link>Bottom 10</Nav.Link>
        </LinkContainer>
        {/* {store.token && ( */}
          <LinkContainer to="/favorites">
            <Nav.Link>Favorites</Nav.Link>
          </LinkContainer>
        {/* )} */}
      </Nav>
    </div>
  );
}

export default Sidebar;
