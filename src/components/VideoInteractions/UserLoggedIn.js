import { useVideo } from "../Reducer/Reducer";
import {
  GetLikedVideos,
  SaveToLiked,
  RemoveFromLikedVideos,
} from "../ApiCalls/ApiCalls";
// css from VideoPlayes.css

export function UserLoggedIn({ videoInLiked, video, setShow }) {
  const { dispatch } = useVideo();
  const userId = localStorage.getItem("userId");
  return (
    <div className="interactions">
      {videoInLiked.length === 0 ? (
        <button
          title="Like"
          onClick={() => SaveToLiked(dispatch, video, userId)}
          className="not-liked buttons"
        >
          <ion-icon name="thumbs-up-outline"></ion-icon>
        </button>
      ) : (
        <button
          onClick={() => RemoveFromLikedVideos(dispatch, video, userId)}
          className="liked buttons"
        >
          <ion-icon name="thumbs-up-sharp"></ion-icon>
        </button>
      )}
      <button
        title="Add to Library"
        className="buttons tooltip"
        onClick={() => setShow(true)}
      >
        <ion-icon name="create-outline"></ion-icon>
      </button>
    </div>
  );
}
