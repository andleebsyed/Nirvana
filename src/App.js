import "./App.css";
import { Header } from "./components/Header/Header";
import { Liked } from "./components/Liked/Liked";
import { Routes, Route } from "react-router-dom";
import { VideoPlayer } from "./components/VideoPlayer/VideoPlayer";
import { Explore } from "./components/Explore/Explore";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Library } from "./components/Library/Library";
import { Homepage } from "./components/Homepage/Homepage";
import { Search } from "./components/Search/Search";
import { Account } from "./components/Account/Account";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
function App() {
  return (
    <div className="main-outer-div">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="main">
              {" "}
              <Homepage />
            </div>
          }
        />
        <Route
          path="/explore"
          element={
            <div className="main">
              <Explore />
            </div>
          }
        />
        <Route
          path="/liked"
          element={
            <div className="main">
              <Liked />
            </div>
          }
        />
        <Route
          path="watch/:id"
          element={
            <div className="main">
              <VideoPlayer />
            </div>
          }
        />
        <Route
          path="library"
          element={
            <div className="main">
              <Library />
            </div>
          }
        />
        <Route
          path="/search"
          element={
            <div className="main">
              <Search />
            </div>
          }
        />
        <Route
          path="/categories/:category"
          element={
            <div className="main">
              <Explore />
            </div>
          }
        />
        <Route
          path="/account"
          element={
            <div className="main">
              <Account />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="main">
              <SignIn />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="main">
              <SignUp />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
