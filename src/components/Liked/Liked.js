import "./Liked.css";
import { useVideo } from "../Reducer/Reducer";
import { Card } from "../Card/Card";
import { RemoveFromLikedVideos } from "../ApiCalls/ApiCalls";
import { SetLoader } from "../Loader/Loader";
import { useState } from "react";
import { useActionManager } from "../Contexts/ActionManagementContext";
import { BeforeAsyncOperation, AfterAsyncOperation } from "../../utils/funcs";
export function Liked() {
  const { state, dispatch } = useVideo();
  const { likedVideos } = state;
  const { action, setAction } = useActionManager();
  const { isLoading, module } = action;
  const userId = localStorage.getItem("userId");

  if (likedVideos.length === 0) {
    return (
      <div className="cards-container">
        <h1 className="none-selected">No Liked Videos Yet...</h1>
      </div>
    );
  } else {
    console.log("in ki==liked", module);
    return (
      <div className="liked-container">
        {likedVideos.map((video) => (
          <div>
            <Card video={video} />
            <button
              className=" remove-video-button trash-button"
              onClick={async () => {
                // setModule("videos");
                BeforeAsyncOperation({
                  action,
                  setAction,
                  module: "videos",
                });
                await RemoveFromLikedVideos(dispatch, video, userId);
                AfterAsyncOperation({
                  action,
                  setAction,
                  textPassedToModal: "Removed From Liked Videos Successfully",
                });
              }}
            >
              <ion-icon name="trash"></ion-icon>
            </button>
          </div>
        ))}
        {isLoading && module === "videos" && (
          <div className="remove-like-loader">
            <SetLoader />
          </div>
        )}
      </div>
    );
  }
}
