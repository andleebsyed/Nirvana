import "./Explore.css";
import { Categories } from "../Categories/Categories";
import { Main } from "../Main/Main";
import { useVideo } from "../Reducer/Reducer";
import { useLocation } from "react-router-dom";
export function Explore() {
  const { state } = useVideo();
  const { videos, originalVideos } = state;
  const location = useLocation();
  return (
    <div>
      <div className="categories">
        <Categories />
      </div>
      {}
      <div>
        {location.pathname === "/explore" && <Main videos={originalVideos} />}
        {location.pathname !== "/explore" && <Main videos={videos} />}
      </div>
    </div>
  );
}
