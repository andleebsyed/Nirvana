import './Library.css'
import { Liked } from '../Liked/Liked'
export function Library() {
    return (
        <div>
            <div className="liked-videos">
                <h1 className="liked-intro">Liked Videos|</h1>
                <Liked />
            </div>

        </div>
    )
}