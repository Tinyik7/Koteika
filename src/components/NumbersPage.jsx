import container_image from '../assets/images/container_image.png';
import paw_orange from '../assets/images/paw_orange.png';

function Numbers() {
    return(
        <section className="container" id="numbers">
            <h2 className="container__title">
                Номера
            </h2>
            <div className="container__content">
                <img src={container_image} alt="container_koteika" className="container__image"/>
                <div className="container__apartment">
                    <div className="apartment__text">
                        <h3 className="apartment__subtitle">Эконом плюс</h3>
                        <ul>
                            <li>Площадь - 0,90 м2</li>
                            <li>Размеры (ШхГхВ) — 90х100х180 см</li>
                            <li>Цена за сутки: 200₽</li>
                         </ul>
                        <button className="apartment__button">
                            Забранировать
                            <img src={paw_orange} alt="button_paw"/>
                        </button>
                     </div>
                </div>
            </div>
        </section>
    );
}

export default Numbers;