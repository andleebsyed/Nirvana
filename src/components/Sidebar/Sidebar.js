import './Sidebar.css'
import { Link } from 'react-router-dom'
export function Sidebar() {
    return (
        <div className="sidebar">
            <Link to='/' className="sidebar-link">
                <div className="side-icon">
                    <a className="adjustment"><ion-icon name="home-outline"></ion-icon></a><span className="adjustment icon-text">Home</span>

                </div>
            </Link>
            <Link to='/explore' className="sidebar-link">
                <div className="side-icon">
                    <a className="adjustment"><ion-icon name="compass-outline"></ion-icon></a><span className="adjustment icon-text">Explore</span>

                </div>
            </Link>
            <Link to='/library' className="sidebar-link">
                <div className="side-icon">
                    <a className="adjustment"><ion-icon name="library-outline"></ion-icon></a><span className="adjustment icon-text">Library</span>

                </div>
            </Link>

        </div>
    )
}


