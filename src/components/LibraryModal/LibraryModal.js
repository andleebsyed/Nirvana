import "./LibraryModal.css";
import { useState, useRef, Component } from "react";
import {
  checkForIdInPlaylist,
  BeforeAsyncOperation,
  AfterAsyncOperation,
} from "../../utils/funcs";
import { useVideo } from "../Reducer/Reducer";
import {
  AddVideoToPlaylist,
  AddNewPlaylist,
  DeleteFromPlaylist,
} from "../ApiCalls/ApiCalls";
import { PopUpModal } from "../PopUpModal/PopUpModal";
import { useActionManager } from "../Contexts/ActionManagementContext";
import { SetLoader } from "../Loader/Loader";
export function LibraryModal({ show, setShow, video }) {
  const { state, dispatch } = useVideo();
  const { playlists } = state;
  const [current, setCurrent] = useState("");
  const inputEl = useRef(null);
  // const [showModal, setShowModal] = useState(false);
  // const [modalText, setModalText] = useState("");
  const { action, setAction } = useActionManager();
  // const [isLoading, SetLoader] = useState(false);
  const { isLoading, showModal, modalText, component } = action;

  async function keyPressHandler(e) {
    if (e.key === "Enter") {
      BeforeAsyncOperation({ action, setAction, component: "playlistsModal" });
      const playlistName = await AddNewPlaylist(dispatch, current, video);
      e.target.value = "";
      AfterAsyncOperation({
        action,
        setAction,
        textPassedToModal: `Added to ${playlistName}`,
      });
      // setModalText(`Added to  ${playlistName}`);
      // setShowModal(true);
      // setTimeout(() => setShowModal(false), 1300);
    }
  }

  async function onClickHandler(e) {
    BeforeAsyncOperation({ action, setAction, component: "playlistsModal" });
    const playlistName = await AddNewPlaylist(dispatch, current, video);
    inputEl.current.value = "";
    AfterAsyncOperation({
      action,
      setAction,
      textPassedToModal: `Added to ${playlistName}`,
    });

    // setModalText(`Added to  ${playlistName}`);
    // setShowModal(true);
    // setTimeout(() => setShowModal(false), 1300);
  }
  async function checkboxHandler(playlist, video) {
    if (checkForIdInPlaylist(playlist.videos, video.id) === true) {
      BeforeAsyncOperation({ action, setAction, component: "checkbox" });

      await DeleteFromPlaylist(video._id, playlist._id, dispatch);
      AfterAsyncOperation({
        action,
        setAction,
        textPassedToModal: `Removed from ${playlist.playlistName}`,
      });
      // setModalText(`Removed from ${playlist.playlistName}`);
      // setShowModal(true);
      // setTimeout(() => setShowModal(false), 1300);
    } else {
      BeforeAsyncOperation({ action, setAction, component: "checkbox" });
      await AddVideoToPlaylist(dispatch, video, playlist);
      AfterAsyncOperation({
        action,
        setAction,
        textPassedToModal: `Added to ${playlist.playlistName}`,
      });
      // setModalText(`Added to  ${playlist.playlistName}`);
      // setShowModal(true);
      // setTimeout(() => setShowModal(false), 1300);
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
            {isLoading &&
              (component === "playlistsModal" || component === "checkbox") && (
                <div className="playlist-interaction-loader">
                  <SetLoader />
                </div>
              )}
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
