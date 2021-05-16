import './LibraryModal.css'
import { useState, useRef } from 'react'
import { checkForIdInPlaylist } from '../../utils/funcs'
import { useVideo } from '../Reducer/Reducer'
export function LibraryModal({ show, setShow, video }) {
    const { state, dispatch } = useVideo()
    const { playlists } = state
    const [current, setCurrent] = useState('')
    const inputEl = useRef(null)

    function keyPressHandler(e) {
        return e.key === 'Enter' ? (
            dispatch({ type: 'ADD_NEW_PLAYLIST', payload: { name: current } }), e.currentTarget.value = "") : 'do nothing'
    }

    function onClickHandler(e) {
        dispatch({ type: 'ADD_NEW_PLAYLIST', payload: { name: current } })
        inputEl.current.value = ""

    }
    function checkboxHandler(playlist, videoId) {
        if (checkForIdInPlaylist(playlist.list, videoId) === true) {

            dispatch({ type: 'REMOVE_FROM_PLAYLIST', payload: { playlist, videoId } })
        }
        else {
            dispatch({ type: 'ADD_TO_PLAYLIST', payload: { playlist, videoId } })
        }
    }


    if (!show) {
        return null
    }
    else {
        console.log("playlist is being populated or not ", playlists)

        return (
            <div className="modal-outer" onClick={() => setShow(false)}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <p>Add to Library</p>
                        <button className="close-modal" onClick={() => setShow(false)}>X</button>
                    </div>
                    <div className="playlists">

                        {playlists.map(playlist =>
                            <div className="single-playlist">
                                <input type="checkbox" checked={checkForIdInPlaylist(playlist.list, video.id)} onChange={() => checkboxHandler(playlist, video.id)} />
                                <label>{playlist.name}</label>
                            </div>
                        )}

                    </div>
                    <div className="modal-footer">
                        <input type="text" id="input" ref={inputEl} placeholder="Add new..." onChange={(e) => setCurrent(e.target.value)} onKeyPress={(e) => keyPressHandler(e)} />
                        <button className="footer-button" onClick={(e) => onClickHandler(e)}>Add</button>
                    </div>


                </div>

            </div >
        )
    }

}
