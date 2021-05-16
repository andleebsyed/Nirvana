import './Library.css'
import { Liked } from '../Liked/Liked'
import { Playlists } from '../Playlists/Playlists'
import { useVideo } from '../Reducer/Reducer'
export function Library() {
    const { state } = useVideo()
    const { playlists } = state
    console.log("playlists in state are ", playlists)
    return (
        <div>
            <div className="liked-videos library-section">
                <h1 className="heading-intro">Liked Videos|</h1>
                <Liked />
            </div>
            <div className="library-section">
                <h1 className="heading-intro">Playlists|</h1>
                {playlists.length > 0 ?
                    playlists.map(playlist => <Playlists playlist={playlist} />) :
                    <h1 className="none-selected">No playlists added currently...</h1>
                }
            </div>

        </div>
    )
}