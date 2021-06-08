import "./Liked.css";
import { useVideo } from "../Reducer/Reducer";
import { Card } from "../Card/Card";
import { RemoveFromLikedVideos } from "../ApiCalls/ApiCalls";
import { SetLoader } from "../Loader/Loader";
import { useState } from "react";
import { useActionManager } from "../Contexts/ActionManagementContext";
import { BeforeAsyncOperation, AfterAsyncOperation } from "../../utils/funcs";
import { PopUpModal } from "../PopUpModal/PopUpModal";
export function Liked() {
  const { state, dispatch } = useVideo();
  const { likedVideos } = state;
  // const [isLoading, setIsLoading] = useState(false);
  const { action, setAction } = useActionManager();
  const { isLoading, showModal, modalText } = action;
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
                BeforeAsyncOperation({ action, setAction });
                // setIsLoading(true);
                await RemoveFromLikedVideos(dispatch, video, userId);
                AfterAsyncOperation({
                  action,
                  setAction,
                  textPassedToModal: "Removed From Liked Videos Successfully",
                });
                // setIsLoading(false);
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
        {action.showModal && (
          <div>
            <PopUpModal
              props={{
                showModal,
                modalText,
              }}
            />
          </div>
        )}
      </div>
    );
  }
}
