import './Main.css'
import { VideoPlayer } from '../VideoPlayer/VideoPlayer'
import { useVideo } from '../Data/Data'
import { Card } from '../Card/Card'
export function Main() {
    const { videos } = useVideo()
    return (
        <div className="cards-container">
            {videos.map(video => <Card video={video} />)}
        </div>
    )
}