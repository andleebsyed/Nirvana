import "./Playlists.css";
import { Card } from "../Card/Card";
import { useVideo } from "../Reducer/Reducer";

export function Playlists({ playlist }) {
  const { dispatch, state } = useVideo();
  const { playlists } = state;
  console.log("my user's playlists ", playlists);
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
                onClick={() =>
                  dispatch({ type: "REMOVE_PLAYLIST", payload: { playlist } })
                }
                className="trash-button"
              >
                <ion-icon name="trash"></ion-icon>
              </button>
            </div>
            {playlist.videos.length > 0 ? (
              <div className="video-container">
                {playlist.videos.map((video) => (
                  <div className="video-container">
                    <Card video={video} />
                    <button
                      className=" remove-video-button trash-button"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_PLAYLIST",
                          payload: { playlist, video },
                        })
                      }
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
