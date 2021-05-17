import './Categories.css'
import { useVideo } from "../Reducer/Reducer"

export function Categories() {
    const { state, dispatch } = useVideo()
    const { videos, originalVideos } = state
    const orgVideos = videos
    console.log("videos are ", videos)
    let categories = ["All"]
    originalVideos.map(video => { if (!categories.includes(video.category)) categories.push(video.category) })
    console.log("unique categories ", categories)
    return (
        <div className="buttons-outer" >
            {categories.map(category =>
                <button onClick={() => dispatch({ type: 'FILTER_OUT_CATEGORIES', payload: { category } })} className="categories-button">{category}</button>

            )

            }
            {/* <button onClick={() => dispatch({ type: 'SHOW_ALL' })} className="categories-button">All</button>
            <button className="categories-button" onClick={() => dispatch({ type: 'SHOW_ALL', })} >Road Trip</button>
            <button className="categories-button">Explore</button>
            <button className="categories-button">Inspirational</button>
            <button className="categories-button">Education</button> */}




        </div>
    )
}