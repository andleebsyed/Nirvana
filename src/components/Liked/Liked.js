import "./Liked.css";
import { useVideo } from "../Reducer/Reducer";
import { Card } from "../Card/Card";
import { RemoveFromLikedVideos } from "../ApiCalls/ApiCalls";
export function Liked() {
  const { state, dispatch } = useVideo();
  const { likedVideos, playlist } = state;
  const userId = localStorage.getItem("userId");
  if (likedVideos.length === 0) {
    return (
      <div className="cards-container">
        <h1 className="none-selected">No Liked Videos Yet...</h1>
      </div>
    );
  } else {
    return (
      <div className="liked-container">
        {likedVideos.map((video) => (
          <div className="liked-container">
            <Card video={video} />
            <button
              className=" remove-video-button trash-button"
              onClick={() => RemoveFromLikedVideos(dispatch, video, userId)}
            >
              <ion-icon name="trash"></ion-icon>
            </button>
          </div>
        ))}
      </div>
    );
  }
}
