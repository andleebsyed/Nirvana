import './VideoPlayer.css'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { useVideo } from '../Data/Data'
import { useVideoData } from '../Reducer/Reducer'
export function VideoPlayer() {
    const { state, dispatch } = useVideoData()
    const { likedVideos } = state
    const { id } = useParams()
    const { videos } = useVideo()
    const currentVideo = videos.filter(video => video.id === id)
    const video = currentVideo[0];
    const videoInLiked = likedVideos.filter(videoInIteration => videoInIteration.id === video.id)
    const [notes, setNotes] = useState([])

    function notesHandler(e) {
        setNotes([...notes, e.target.value])
        e.currentTarget.value = "";
    }

    return (
        <div className="outer-main">
            <div className="player-card">
                <div className="player">
                    <ReactPlayer
                        url={video.url}
                        controls={true}
                        width={'50vw'}
                        height={'60vh'}
                    />
                </div>
                <div className="video-label">
                    <p className="video-intro">
                        {video.videoName}
                    </p>

                    <div className="interactions">
                        {videoInLiked.length === 0 ?
                            <button title="Like" onClick={() => dispatch({ type: 'ADD_TO_LIKED_VIDEOS', payload: video })} className='not-liked buttons' ><ion-icon name="thumbs-up-outline"></ion-icon></button>

                            :
                            <button onClick={() => dispatch({ type: 'REMOVE_FROM_LIKED_VIDEOS', payload: video })} className='liked buttons'><ion-icon name="thumbs-up-sharp"></ion-icon></button>
                        }

                        <button title="Add to Library" className="buttons tooltip" ><ion-icon name="create-outline"></ion-icon></button>


                    </div>

                </div>
                <div className="creator-details">
                    <div className="thumbnail-and-name">
                        < img className="thumbnail" src={video.creatorThumbnail} />
                        <p className="name">{video.creatorName}</p>
                    </div>
                    <div className="video-details">
                        <p className="video-description">{video.description}</p>
                    </div>

                </div>


            </div>

            <div className="notes-outer">
                <p className="notes-heading">Take Notes</p>
                <div className="notes">

                    {notes.map(note => <div className="individual-note">
                        {note}
                    </div>)}
                </div>
                <input className="notes-input-box" type="text" placeholder="Type here..." onKeyPress={(e) => e.key === 'Enter' ? notesHandler(e) : 'do nothing'} />


            </div>




        </div>
    )
}