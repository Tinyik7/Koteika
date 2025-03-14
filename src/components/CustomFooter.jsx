import {Link} from "react-router-dom";
import Logo from "../assets/images/лого.png";

function Footer () {
    return (
            <footer className="footer">
                <div className="footer__top">
                    <Link to="/">
                        <img className="header__logo" src={Logo} alt="koteika logo" />
                    </Link>
                    <nav className="navbar">
                        <Link className="nav__item" to="/why-us">Почему мы?</Link>
                        <Link className="nav__item" to="/numbers">Номера</Link>
                        <Link className="nav__item" to="/reviews">Отзывы</Link>
                        <Link className="nav__item" to="/how-to-find-us">Как нас найти</Link>
                        <Link className="nav__item" to="/Catalog">Каталог</Link>
                        <Link className="nav__item" to="/Rooms">Номера</Link>
                    </nav>
                </div>

                <hr className="footer__hr"/>
        
                <div className="footer__bottom">
                    <span className="footer__secondary__text">
                        ©2019 Все права защищены
                    </span>
                    <span className="footer__secondary__text">
                        Политика конфиденциальности
                    </span>
                </div>

            </footer> 
    );
}

export default Footer;