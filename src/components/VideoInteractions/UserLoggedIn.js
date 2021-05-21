import { useVideo } from "../Reducer/Reducer";

export function UserLoggedIn({ videoInLiked, video, setShow }) {
  const { state, dispatch } = useVideo();
  return (
    <div className="interactions">
      {
        videoInLiked.length === 0 ? (
          <button
            title="Like"
            onClick={() => {
              dispatch({
                type: "ADD_TO_LIKED_VIDEOS",
                payload: { video },
              });
            }}
            className="not-liked buttons"
          >
            <ion-icon name="thumbs-up-outline"></ion-icon>
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_LIKED_VIDEOS",
                payload: { video },
              });
            }}
            className="liked buttons"
          >
            <ion-icon name="thumbs-up-sharp"></ion-icon>
          </button>
        )

        // below first div one|
      }
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
