import "./Playlists.css";
import { useState } from "react";
import { Card } from "../Card/Card";
import { useVideo } from "../Reducer/Reducer";
import { DeleteFromPlaylist, RemovePlaylist } from "../ApiCalls/ApiCalls";
import { SetLoader } from "../Loader/Loader";

export function Playlists({ playlist }) {
  const { dispatch, state } = useVideo();
  const { playlists } = state;
  const [isLoading, setIsLoading] = useState(false);
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
                  setIsLoading({
                    status: true,
                    playlistName: playlist.playlistName,
                  });
                  await RemovePlaylist(playlist._id, dispatch);
                  setIsLoading({
                    status: false,
                    playlistName: playlist.playlistName,
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
                        setIsLoading({
                          status: true,
                          playlistName: playlist.playlistName,
                        });
                        await DeleteFromPlaylist(
                          video._id,
                          playlist._id,
                          dispatch
                        );
                        setIsLoading(false);
                        //   setModalText(`Removed video from ${playlist.playlistName}`);
                        //   setShowModal(true);
                        //   setTimeout(() => setShowModal(false), 1300);
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
      </>
    );
  } else {
    return <h1 className="none-selected">No playlists added currently...</h1>;
  }
}
