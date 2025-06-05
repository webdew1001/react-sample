import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="header"> 
            <div className="inner">
                <h1 className="logo">
                    <Link to="/">logo</Link>
                </h1>

                <nav className="nav">
                    <ul className="gnb">
                        <li>
                            <Link to="/sub/sub1">menu-1</Link>
                            
                        </li>
                        <li>
                            <Link to="/sub/sub2">menu-2</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;