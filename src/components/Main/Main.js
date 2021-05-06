import './Main.css'
import { useParams } from 'react-router-dom'
import { VideoPlayer } from '../VideoPlayer/VideoPlayer'
import { useVideo } from '../Data/Data'
import { Card } from '../Card/Card'
import { useVideoData } from '../Reducer/Reducer'
export function Main() {
    const { videos } = useVideo()
    return (
        <div className="cards-container">
            {videos.map(video => <Card video={video} />)}
        </div>
    )
}