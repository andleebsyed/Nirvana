import "./Library.css";
import { Liked } from "../Liked/Liked";
import { Playlists } from "../Playlists/Playlists";
export function Library() {
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
}
