
function Header() {
    return (
    <div>
        <nav className="navbar">
            <div className="main-menu">
                <ul>
                    <li><a href="#">Questions</a></li>
                </ul>
            </div>
            <div className="user-menu">
                <ul>
                    <li><a href="#">Ask question</a></li>
                    <li><a href="#">Logout</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Header;