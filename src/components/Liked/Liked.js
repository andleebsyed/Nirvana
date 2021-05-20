import "./Liked.css";
import { useVideo } from "../Reducer/Reducer";
import { Card } from "../Card/Card";
export function Liked() {
  const { state, dispatch } = useVideo();
  const { likedVideos, playlist } = state;
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
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_LIKED_VIDEOS",
                  payload: { video },
                })
              }
            >
              <ion-icon name="trash"></ion-icon>
            </button>
          </div>
        ))}
      </div>
    );
  }
}
