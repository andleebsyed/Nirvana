import "./LibraryModal.css";
import { useState, useRef } from "react";
import { checkForIdInPlaylist } from "../../utils/funcs";
import { useVideo } from "../Reducer/Reducer";
export function LibraryModal({ show, setShow, video }) {
  const { state, dispatch } = useVideo();
  const { playlists } = state;
  const [current, setCurrent] = useState("");
  const inputEl = useRef(null);
  const modalClass = {
    offclick: "modale",
    onclick: "modale active",
  };
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  function keyPressHandler(e) {
    return e.key === "Enter"
      ? (dispatch({ type: "ADD_NEW_PLAYLIST", payload: { name: current } }),
        (e.currentTarget.value = ""))
      : "do nothing";
  }

  function onClickHandler(e) {
    dispatch({ type: "ADD_NEW_PLAYLIST", payload: { name: current } });
    inputEl.current.value = "";
  }
  function checkboxHandler(playlist, video) {
    if (checkForIdInPlaylist(playlist.videos, video.id) === true) {
      dispatch({ type: "REMOVE_FROM_PLAYLIST", payload: { playlist, video } });
      setModalText(`Removed from ${playlist.playlistName}`);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 1300);
    } else {
      dispatch({ type: "ADD_TO_PLAYLIST", payload: { playlist, video } });

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
        <div className={showModal ? modalClass.onclick : modalClass.offclick}>
          {modalText}
        </div>
      </div>
    );
  }
}
