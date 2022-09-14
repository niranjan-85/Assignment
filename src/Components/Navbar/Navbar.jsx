import './Navbar.css';


function Navbar() {
    return (
        <>
            <div className="navigation">
                <div className="logo"></div>
                {/* checkbox - controls menu click */}
                <input type="checkbox" id="click" />
                <label htmlFor="click" className='menu'>
                    <i className="menu fa-solid fa-bars"></i>
                </label>
                <ul className='navigation-links'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Discover</a></li>
                    <li><a href='#'>Latest Posts</a></li>
                    <li className='mx-4'>
                        <a href='#' className='sign-up-link'>
                            Sign Up
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;