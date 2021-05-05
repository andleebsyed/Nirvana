import './Header.css'
export function Header() {
    return (
        <div className="header-container">
            <div className="header-start">
                <span className="menu-icon">
                    <ion-icon name="menu-outline"></ion-icon>
                </span>
                <span className="logo-span">


                    <svg data-src="https://s2.svgbox.net/illlustrations.svg?ic=travel-bag" width="60" height="60" color="#000"></svg>

                    {/* <svg data-src="https://s2.svgbox.net/illlustrations.svg?ic=travel" width="100" height="100" color="#000"></svg> */}
                </span>
            </div>
            <div className="header-center">
                <input type="text" className="search-box" placeholder=" Search" />
                <button className="search-button">
                    <ion-icon className="search-icon" name="search-outline"></ion-icon>
                </button>
                <button className="mic-button">
                    <ion-icon name="mic-outline"></ion-icon>
                </button>
            </div>

            <div className="header-end">
                <button className="bell-icon">
                    <ion-icon name="notifications-outline"></ion-icon>
                </button>
                <button className="account">
                    A
                </button>
            </div>
        </div>
    )
}