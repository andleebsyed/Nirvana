import './Header.css'
export function Header() {
    return (
        <div className="header-container">
            <div className="header-start">
                <span className="menu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" >xmlns: <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"></path><path d="M3 6h18"></path><path d="M3 18h18"></path></g></svg>
                </span>
                <span className="logo-span">
                    Logo_goes_here
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

            </div>
        </div>
    )
}