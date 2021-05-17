import './Categories.css'
import { useVideo } from "../Reducer/Reducer"

export function Categories() {
    const { state, dispatch } = useVideo()
    const { videos, originalVideos } = state
    let categories = ["All"]
    originalVideos.map(video => { if (!categories.includes(video.category)) categories.push(video.category) })
    return (
        <div className="buttons-outer" >
            {categories.map(category =>
                <button onClick={() => dispatch({ type: 'FILTER_OUT_CATEGORIES', payload: { category } })} className="categories-button">{category}</button>
            )

            }
        </div>
    )
}