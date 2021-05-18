import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useVideo } from "../Reducer/Reducer";
export function Header() {
  const { dispatch } = useVideo();
  const [searchKeyword, setSearchKeyword] = useState("");
  let navigate = useNavigate();
  function keyPressHandler(e) {
    if (e.key === "Enter") {
      dispatch({ type: "SEARCH_FOR_VIDEOS", payload: { searchKeyword } });
      navigate(`/search/?keyword=${searchKeyword}`, { replace: true });
    }
  }
  return (
    <header className="header-container">
      <div className="header-start">
        <span className="menu-icon">
          <ion-icon name="menu-outline"></ion-icon>
        </span>
        <Link to="/">
          <span className="logo-span">
            <svg
              data-src="https://s2.svgbox.net/illlustrations.svg?ic=travel-bag"
              width="60"
              height="60"
              color="#000"
            ></svg>
          </span>
        </Link>
      </div>
      <div className="header-center">
        <input
          type="text"
          className="search-box"
          placeholder=" Search"
          onKeyPress={(e) => keyPressHandler(e)}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />

        <Link to={{ pathname: `/search`, search: `?keyword=${searchKeyword}` }}>
          <button
            className="search-button"
            onClick={() =>
              dispatch({
                type: "SEARCH_FOR_VIDEOS",
                payload: { searchKeyword },
              })
            }
          >
            <ion-icon className="search-icon" name="search-outline"></ion-icon>
          </button>
        </Link>

        <button title="Upload Video" className="mic-button">
          <ion-icon name="mic-outline"></ion-icon>
        </button>
      </div>

      <div className="header-end">
        <button className="bell-icon">
          <ion-icon name="notifications-outline"></ion-icon>
        </button>
        <button className="account">A</button>
      </div>
    </header>
  );
}
