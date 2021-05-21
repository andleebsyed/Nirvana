import "./VideoPlayer.css";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useVideo } from "../Reducer/Reducer";
import { LibraryModal } from "../LibraryModal/LibraryModal";
import { Notes } from "../Notes/Notes";
import { useAuth } from "../Reducer/AuthReducer";
export function VideoPlayer() {
  const navigate = useNavigate();
  const { state, dispatch } = useVideo();
  const { originalVideos, likedVideos } = state;
  const { stateAuth, dispathAuth } = useAuth();
  const { isUserAuthenticated } = stateAuth;
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
            {/* load this if user is not authenticated */}
            {!isUserAuthenticated ? (
              <Link to="/login">
                <button title="Like" className="not-liked buttons">
                  <ion-icon name="thumbs-up-outline"></ion-icon>
                </button>
              </Link>
            ) : // if authenticated check if liked or not : revese what is already present by clicking the button
            videoInLiked.length === 0 ? (
              <button
                title="Like"
                onClick={() => {
                  dispatch({ type: "ADD_TO_LIKED_VIDEOS", payload: { video } });
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
            )}
            }
            {isUserAuthenticated ? (
              <button
                title="Add to Library"
                className="buttons tooltip"
                onClick={() => setShow(true)}
              >
                <ion-icon name="create-outline"></ion-icon>
              </button>
            ) : (
              <Link to="/login">
                <button
                  title="Add to Library"
                  className="buttons tooltip"
                  // onClick={() => setShow(true)}
                >
                  <ion-icon name="create-outline"></ion-icon>
                </button>
              </Link>
            )}
            {/* <button
              title="Add to Library"
              className="buttons tooltip"
              onClick={() => setShow(true)}
            >
              <ion-icon name="create-outline"></ion-icon>
            </button> */}
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
