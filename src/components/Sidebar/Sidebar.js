import './Sidebar.css'
export function Sidebar() {
    return (
        <div className="sidebar">
            <div className="side-icon">
                <a className="adjustment"><ion-icon name="home-outline"></ion-icon></a><span className="adjustment icon-text">Home</span>

            </div>
            <div className="side-icon">
                <a className="adjustment"><ion-icon name="compass-outline"></ion-icon></a><span className="adjustment icon-text">Explore</span>

            </div>
        </div>
    )
}