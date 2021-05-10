import './Homepage.css'
import { Categories } from '../Categories/Categories'
import { Main } from '../Main/Main'
export function Homepage() {
    return (
        <div>
            <div className="categories"><Categories /></div>
            <div className="main"><Main /></div>
        </div>
    )
}