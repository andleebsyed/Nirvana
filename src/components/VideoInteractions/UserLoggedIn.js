import { useState } from "react";
import { useVideo } from "../Reducer/Reducer";
import {
  GetLikedVideos,
  SaveToLiked,
  RemoveFromLikedVideos,
} from "../ApiCalls/ApiCalls";
import { PopUpModal } from "../PopUpModal/PopUpModal";
// css from VideoPlayes.css

export function UserLoggedIn({ videoInLiked, video, setShow }) {
  const { dispatch } = useVideo();
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const userId = localStorage.getItem("userId");
  return (
    <div className="interactions">
      {videoInLiked.length === 0 ? (
        <button
          title="Like"
          onClick={async () => {
            await SaveToLiked(dispatch, video, userId);
            setModalText(`Added to liked videos`);
            setShowModal(true);
            setTimeout(() => setShowModal(false), 1300);
          }}
          className="not-liked buttons"
        >
          <ion-icon name="thumbs-up-outline"></ion-icon>
        </button>
      ) : (
        <button
          onClick={async () => {
            await RemoveFromLikedVideos(dispatch, video, userId);
            setModalText(`Removed from liked videos`);
            setShowModal(true);
            setTimeout(() => setShowModal(false), 1300);
          }}
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
      {/* {showModal && ( */}
      <div>
        {" "}
        <PopUpModal props={{ showModal, modalText }} />
      </div>
      {/* )} */}
    </div>
  );
}
