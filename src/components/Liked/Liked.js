import './Liked.css'
import { useVideoData } from '../Reducer/Reducer'
import { Card } from '../Card/Card'
export function Liked() {
    const { state } = useVideoData()
    const { likedVideos } = state
    if (likedVideos.length === 0) {
        return (
            <div className="cards-container">
                <h1>No Liked Videos</h1>
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