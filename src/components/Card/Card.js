import './Card.css'
import { Link } from 'react-router-dom'
export function Card({ video }) {
    return (
        <Link to={`/watch/${video.id}`
        } className="video-card">
            <img className="card-image" src={video.thumbnail} />
            <p className="video-name">{video.videoName}</p>
            <img className="card-badge" src={video.creatorThumbnail} />
            <p className="creator-name">{video.creatorName}</p>

        </Link>
    )
}