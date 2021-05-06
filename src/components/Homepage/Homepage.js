import './Homepage.css'
import { Categories } from '../Categories/Categories'
import { Sidebar } from '../Sidebar/Sidebar'
import { Main } from '../Main/Main'
// import { Categories } from '../Categories/Categories'

export function Homepage() {
    return (
        <div className="homepage-outer">
            <div className="main"><Main /></div>
            <div className="categories"><Categories /></div>
            <div className="sidebar"><Sidebar /></div>
        </div>
    )
}