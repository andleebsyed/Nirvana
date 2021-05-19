import "./VideoPlayer.css";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useVideo } from "../Reducer/Reducer";
import { LibraryModal } from "../LibraryModal/LibraryModal";
import { Notes } from "../Notes/Notes";
export function VideoPlayer() {
  const { state, dispatch } = useVideo();
  const { originalVideos, likedVideos } = state;
  const { id } = useParams();
  const currentVideo = originalVideos.filter((video) => video.id === id);
  const video = currentVideo[0];

  const videoInLiked = likedVideos.filter(
    (videoInIteration) => videoInIteration.id === video.id
  );

  const [show, setShow] = useState(false);

  // to be passed to Library Modal
  let props = { show: show, setShow: setShow, video: video };

  return (
    <div className="outer-main">
      <div className="player-card">
        <div className="player">
          <ReactPlayer
            url={video.url}
            controls={true}
            width={"55vw"}
            height={"60vh"}
          />
        </div>
        <div className="video-label">
          <p className="video-intro">{video.videoName}</p>

          <div className="interactions">
            {videoInLiked.length === 0 ? (
              <button
                title="Like"
                onClick={() => {
                  dispatch({ type: "ADD_TO_LIKED_VIDEOS", payload: { video } });
                  // setShowModal(true);
                  // setText("Added To Liked Videos");
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
                  // setShowModal(false);
                  // setText("Removed from Liked Videos");
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
          </div>
        </div>
        <div className="creator-details">
          <div className="thumbnail-and-name">
            <img className="thumbnail" src={video.creatorThumbnail} />
            <p className="name">{video.creatorName}</p>
          </div>
          <div className="video-details">
            <p className="video-description">{video.description}</p>
          </div>
        </div>
      </div>

      <Notes />

      <LibraryModal {...props} />
    </div>
  );
}
