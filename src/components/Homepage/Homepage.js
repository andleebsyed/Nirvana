import './Homepage.css'
import { Categories } from '../Categories/Categories'
import { Sidebar } from '../Sidebar/Sidebar'
import { Main } from '../Main/Main'
import { Liked } from '../Liked/Liked'
import { Route, Routes } from 'react-router-dom'
export function Homepage() {
    return (
        <div className="homepage-outer">
            {/* <div className="main"><Main /></div> */}
            <Routes>
                <Route path='/' element={<div className="main"><Main /></div>} />
                <Route path='/liked' element={<div className="main"><Liked /></div>} />
            </Routes>

            <div className="categories"><Categories /></div>
            <div className="sidebar"><Sidebar /></div>
        </div>
    )
}