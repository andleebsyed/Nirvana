import "./Library.css";
import { Liked } from "../Liked/Liked";
import { Playlists } from "../Playlists/Playlists";
import { useVideo } from "../Reducer/Reducer";
import { SetLoader } from "../Loader/Loader";
import { PopUpModal } from "../PopUpModal/PopUpModal";
import { useActionManager } from "../Contexts/ActionManagementContext";
export function Library() {
  const { action } = useActionManager();
  const { modalText, showModal } = action;
  const { state } = useVideo();
  const { originalVideos } = state;
  if (originalVideos.length > 0) {
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
        <div>
          <PopUpModal
            props={{
              showModal,
              modalText,
            }}
          />
        </div>
      </div>
    );
  } else {
    return <SetLoader />;
  }
}
