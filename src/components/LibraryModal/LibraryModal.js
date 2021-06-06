import "./LibraryModal.css";
import { useState, useRef } from "react";
import { checkForIdInPlaylist } from "../../utils/funcs";
import { useVideo } from "../Reducer/Reducer";
import {
  AddVideoToPlaylist,
  AddNewPlaylist,
  DeleteFromPlaylist,
} from "../ApiCalls/ApiCalls";
import { PopUpModal } from "../PopUpModal/PopUpModal";
export function LibraryModal({ show, setShow, video }) {
  const { state, dispatch } = useVideo();
  const { playlists } = state;
  const [current, setCurrent] = useState("");
  const inputEl = useRef(null);
  let result;
  const modalClass = {
    offclick: "modale",
    onclick: "modale active",
  };
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  function keyPressHandler(e) {
    return e.key === "Enter"
      ? (AddNewPlaylist(dispatch, current, video),
        // dispatch({ type: "ADD_NEW_PLAYLIST", payload: { name: current } })
        (e.currentTarget.value = ""))
      : "do nothing";
  }

  async function onClickHandler(e) {
    await AddNewPlaylist(dispatch, current, video);
    inputEl.current.value = "";
  }
  async function checkboxHandler(playlist, video) {
    if (checkForIdInPlaylist(playlist.videos, video.id) === true) {
      await DeleteFromPlaylist(video._id, playlist._id, dispatch);
      setModalText(`Removed from ${playlist.playlistName}`);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 1300);
    } else {
      await AddVideoToPlaylist(dispatch, video, playlist);
      setModalText(`Added to  ${playlist.playlistName}`);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 1300);
    }
  }

  if (!show) {
    return null;
  } else {
    return (
      <div className="modal-outer" onClick={() => setShow(false)}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <p>Add to Library</p>
            <button className="close-modal" onClick={() => setShow(false)}>
              X
            </button>
          </div>
          <div className="playlists">
            {playlists.map((playlist) => (
              <div className="single-playlist">
                <input
                  type="checkbox"
                  checked={checkForIdInPlaylist(playlist.videos, video.id)}
                  onChange={() => checkboxHandler(playlist, video)}
                />
                <label>{playlist.playlistName}</label>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <input
              type="text"
              id="input"
              ref={inputEl}
              placeholder="Add new..."
              onChange={(e) => setCurrent(e.target.value)}
              onKeyPress={(e) => keyPressHandler(e)}
            />
            <button
              className="footer-button"
              onClick={(e) => onClickHandler(e)}
            >
              Add
            </button>
          </div>
        </div>
        <div>
          <PopUpModal props={{ showModal, modalText }} />
        </div>
      </div>
    );
  }
}
