import "./Playlists.css";
import { Card } from "../Card/Card";
import { useVideo } from "../Reducer/Reducer";
import { DeleteFromPlaylist, RemovePlaylist } from "../ApiCalls/ApiCalls";
import { SetLoader } from "../Loader/Loader";
import { useActionManager } from "../Contexts/ActionManagementContext";
import { PopUpModal } from "../PopUpModal/PopUpModal";
import { BeforeAsyncOperation, AfterAsyncOperation } from "../../utils/funcs";
export function Playlists({ playlist }) {
  const { dispatch, state } = useVideo();
  const { playlists } = state;
  const { action, setAction } = useActionManager();
  const { isLoading } = action;
  console.log("let's see if states are modifying", { action });
  if (playlists.length > 0) {
    return (
      <>
        {playlists.map((playlist) => (
          <>
            <div className="single-playlist-show">
              <h1 style={{ fontWeight: "lighter", textAlign: "left" }}>
                {playlist.playlistName}
              </h1>
              <button
                onClick={async () => {
                  BeforeAsyncOperation({
                    action,
                    setAction,
                    playlistNamePassed: playlist.playlistName,
                  });
                  await RemovePlaylist(playlist._id, dispatch);
                  AfterAsyncOperation({
                    action,
                    setAction,
                    textPassedToModal: "Playlist Removed Successfully",
                  });
                }}
                className="trash-button"
              >
                <ion-icon name="trash"></ion-icon>
              </button>
              {isLoading.status &&
                isLoading.playlistName === playlist.playlistName && (
                  <div className="playlist-loader">
                    <SetLoader />
                  </div>
                )}
            </div>
            {playlist.videos.length > 0 ? (
              <div className="video-container">
                {playlist.videos.map((video) => (
                  <div>
                    <Card video={video} />
                    <button
                      className=" remove-video-button trash-button"
                      onClick={async () => {
                        BeforeAsyncOperation({
                          action,
                          setAction,
                          playlistNamePassed: playlist.playlistName,
                        });
                        await DeleteFromPlaylist(
                          video._id,
                          playlist._id,
                          dispatch
                        );
                        AfterAsyncOperation({
                          action,
                          setAction,
                          textPassedToModal:
                            "Removed Video From Playlist Successfully",
                        });
                      }}
                    >
                      <ion-icon name="trash"></ion-icon>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h1 className="none-selected">
                  No videos in here currently...
                </h1>
              </div>
            )}
          </>
        ))}
        {action.showModal && (
          <div>
            <PopUpModal
              props={{
                showModal: action.showModal,
                modalText: action.modalText,
              }}
            />
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <h1 className="none-selected">No playlists added currently...</h1>
        {action.showModal && (
          <div>
            <PopUpModal
              props={{
                showModal: action.showModal,
                modalText: action.modalText,
              }}
            />
          </div>
        )}
      </>
    );
  }
}
