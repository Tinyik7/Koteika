import {Link} from "react-router-dom";
import Logo from "../assets/images/лого.png";

function Header () {
    return (
            <header className="header">
                <Link to="/">
                    <img className="header__logo" src={Logo} alt="koteika logo" />
                </Link>
                <nav className="navbar">
                    <Link className="nav__item" to="/why-us">Почему мы?</Link>
                    <Link className="nav__item" to="/numbers">Номер</Link>
                    <Link className="nav__item" to="/reviews">Отзывы</Link>
                    <Link className="nav__item" to="/how-to-find-us">Как нас найти</Link>
                    <Link className="nav__item" to="/Catalog">Каталог</Link>
                </nav>
            </header> 
    );
}

export default Header;