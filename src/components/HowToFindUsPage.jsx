import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import vk from '../assets/images/vk.png';

function HowToFindUs() {
    return (
        <section className="how__to__find__us" id="how-to-find-us">
                <div className="info">
                    <h3 className="info__main_title">Как нас найти</h3>
                    <ul className="info__list">
                        <li className="info__item">
                            <article className="info__content">
                                <p className="info__title">Адрес</p>
                                <p className="info__text">Санкт-Петербург, <br/> ул Большая Конюшенная, д 19</p>
                            </article>
                        </li>
                        <li className="info__item">
                            <article className="info__content">
                                <p className="info__title">Режим работы</p>
                                <p className="info__text">Ежедневно, с 9:00 до 20:00</p>
                            </article>
                        </li>
                        <li className="info__item">
                            <article className="info__content">
                                <p className="info__title">Телефон</p>
                                <p className="info__text">8 (800) 333-55-99</p>
                            </article>
                        </li>
                        <li className="info__item">
                            <article className="info__content">
                                <p className="info__title">E-mail</p>
                                <p className="info__text">info@cat-hotel.ru</p>
                            </article>
                        </li>
                        <li className="info__item">
                            <article className="info__content">
                                <p className="info__title">Социальные сети</p>
                                <article className="social__media">
                                    <img src={facebook} alt="facebook logo" className="info__image"/>
                                    <img src={instagram} alt="instagram logo" className="info__image"/>
                                    <img src={vk} alt="vk logo" className="info__image"/>                                
                                </article>
                            </article>
                        </li>
                    </ul>
                </div>
                <div className="map">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad258a520b28d0305c6cf9f1bca22b237d2a2fb0a10e6580357f3adab3badcb75&amp;source=constructor" width="500" height="400" frameBorder="0"></iframe>
                </div>
        </section> 
    );
}

export default HowToFindUs;