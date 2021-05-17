import './Main.css'
import { Card } from '../Card/Card'
import { useVideo } from '../Reducer/Reducer'
export function Main() {
    const { state } = useVideo()
    const { videos } = state

    return (
        <div className="cards-container abc">
            {videos.map(video => <Card video={video} />)}
        </div>
    )
}