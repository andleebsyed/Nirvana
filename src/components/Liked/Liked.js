import "./Liked.css";
import { useVideo } from "../Reducer/Reducer";
import { Card } from "../Card/Card";
import { RemoveFromLikedVideos } from "../ApiCalls/ApiCalls";
import { SetLoader } from "../Loader/Loader";
import { useState } from "react";
export function Liked() {
  const { state, dispatch } = useVideo();
  const { likedVideos, playlist } = state;
  const [isLoading, setIsLoading] = useState(false);
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
          <div>
            <Card video={video} />
            <button
              className=" remove-video-button trash-button"
              onClick={async () => {
                setIsLoading(true);
                await RemoveFromLikedVideos(dispatch, video, userId);
                setIsLoading(false);
              }}
            >
              <ion-icon name="trash"></ion-icon>
            </button>
          </div>
        ))}
        {isLoading && (
          <div className="remove-like-loader">
            <SetLoader />
          </div>
        )}
      </div>
    );
  }
}
