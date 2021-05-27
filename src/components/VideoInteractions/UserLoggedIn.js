import { useVideo } from "../Reducer/Reducer";
import {
  GetLikedVideos,
  SaveToLiked,
  RemoveFromLikedVideos,
} from "../ApiCalls/ApiCalls";
// css from VideoPlayes.css

export function UserLoggedIn({ videoInLiked, video, setShow }) {
  const { dispatch } = useVideo();
  console.log("id of video", video._id);
  const userId = localStorage.getItem("userId");
  console.log("usr id is ", userId);
  // async function addtoLiked(video) {
  //   dispatch({
  //     type: "ADD_TO_LIKED_VIDEOS",
  //     payload: { video },
  //   }),
  //     await GetLikedVideos();
  // }

  return (
    <div className="interactions">
      {videoInLiked.length === 0 ? (
        <button
          title="Like"
          onClick={() => SaveToLiked(dispatch, video)}
          className="not-liked buttons"
        >
          <ion-icon name="thumbs-up-outline"></ion-icon>
        </button>
      ) : (
        <button
          onClick={
            () => RemoveFromLikedVideos(dispatch, video, userId)
            //   () => {
            // dispatch({
            //   type: "REMOVE_FROM_LIKED_VIDEOS",
            //   payload: { video },
            // });
            // }
          }
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
