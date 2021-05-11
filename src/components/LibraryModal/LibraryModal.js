import './LibraryModal.css'
export function LibraryModal({ show, setShow }) {
    if (!show) { return null }
    else {
        return (
            <div className="modal-outer" onClick={() => setShow(false)}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <p>Add to Library</p>
                        <button className="close-modal" onClick={() => setShow(false)}>X</button>
                    </div>
                    <div className="playlists">
                        <div className="single-playlist">
                            <input type="checkbox" id="playlist-one" name="playlist-one" value="playlist-one" />
                            <label for="playlist-one">Watch Later</label>
                        </div>

                    </div>
                    <div className="modal-footer">

                        <input type="text" placeholder="Add new..." />
                        <button className="footer-button">Add</button>
                    </div>

                </div>

            </div>
        )
    }
}