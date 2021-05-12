import './Explore.css'
import { Categories } from '../Categories/Categories'
import { Main } from '../Main/Main'
export function Explore() {
    return (
        <div>
            <div className="categories" ><Categories /></div>
            <div ><Main /></div>
        </div>
    )
}