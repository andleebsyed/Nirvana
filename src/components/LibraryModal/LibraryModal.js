import './LibraryModal.css'
import { useState, useRef, createContext, useContext } from 'react'
import { Playlists } from '../Playlists/Playlists'
import { checkForIdInPlaylist } from '../../utils/funcs'
const ModalContext = createContext()
export function LibraryModal({ show, setShow, video }) {
    const { playlists, setPlaylists } = useModal()
    const [current, setCurrent] = useState('')
    const inputEl = useRef(null)

    function keyPressHandler(e) {
        return e.key === 'Enter' ? (setPlaylists([...playlists, { name: current, list: [] }]), e.currentTarget.value = "") : 'do nothing'
    }
    function onClickHandler(e) {
        setPlaylists([...playlists, { name: current, list: [] }])
        inputEl.current.value = ""

    }

    function addVideoToPlaylist(playlist, videoId) {
        console.log(" i am inside add function")
        const tempPlaylist = [...playlists]
        const index = tempPlaylist.findIndex(loopPlaylist => playlist.name === loopPlaylist.name)
        // console.log("index we got is ", index)
        // console.log("list which we are updating", tempPlaylist[index])
        tempPlaylist[index] = { ...tempPlaylist[index], list: [...tempPlaylist[index].list, videoId] }
        // console.log("updated playlist is ", tempPlaylist)
        setPlaylists(tempPlaylist)
    }

    function removeVideoFromPlaylist(playlist, videoId) {
        const tempPlaylist = [...playlists]
        const index = tempPlaylist.findIndex(loopPlaylist => playlist.name === loopPlaylist.name)
        const addedVideos = tempPlaylist[index].list.filter(currentId => currentId !== videoId)
        const whatToPassToList = addedVideos.length > 0 ? addedVideos : [];
        tempPlaylist[index] = { ...tempPlaylist[index], list: whatToPassToList }
        setPlaylists(tempPlaylist)
    }
    function checkboxHandler(playlist, videoId) {
        if (checkForIdInPlaylist(playlist.list, videoId) === true
        ) {
            console.log("i am coming to remove")
            removeVideoFromPlaylist(playlist, videoId)
        }
        else {
            console.log("i am coming to add")

            addVideoToPlaylist(playlist, videoId)
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
export default function ModalProvider({ children }) {
    const [playlists, setPlaylists] = useState([{ name: 'Add to Watch Later', list: [] }])

    return (
        <ModalContext.Provider value={{ playlists, setPlaylists }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal() {
    return useContext(ModalContext)
}