import './Liked.css'
import { useVideo } from '../Reducer/Reducer'
import { Card } from '../Card/Card'
export function Liked() {
    const { state } = useVideo()
    const { likedVideos } = state
    if (likedVideos.length === 0) {
        return (
            <div className="cards-container">
                <h1 className="none-liked">No Liked Videos Yet...</h1>
            </div>

        )
    }
    else {
        return (
            <div className="cards-container">
                {likedVideos.map(video => <Card video={video} />)}
            </div>
        )
    }

}