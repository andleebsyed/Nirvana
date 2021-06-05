import "./Library.css";
import { Liked } from "../Liked/Liked";
import { Playlists } from "../Playlists/Playlists";
import { useVideo } from "../Reducer/Reducer";
import { SetLoader } from "../Loader/Loader";
export function Library() {
  const { state } = useVideo();
  const { videos } = state;
  if (videos.length > 0) {
    return (
      <div>
        <div className="liked-videos library-section">
          <h1 className="heading-intro">Liked Videos|</h1>
          <Liked />
        </div>
        <div className="library-section">
          <h1 className="heading-intro">Playlists|</h1>
          <Playlists />
        </div>
      </div>
    );
  } else {
    return <SetLoader />;
  }
}
