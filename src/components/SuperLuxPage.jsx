import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import paw_orange from '../assets/images/paw_orange.png';
import SuperLuxBig from '../assets/images/SuperLuxBig.png';


function SuperLux() {
    return(
        <section className="super__lux" id='1'>
            <div className="images">
                <img className='image' src={image1} alt="cat_1" />
                <img className='image' src={image2} alt="cat_2" />
                <img className='image' src={image3} alt="cat_3" />
            </div>
            <img className='image__big' src={SuperLuxBig} alt="SuperLuxBig" />
            <div className='super__lux__text'>
                <h3 className="super__lux__subtitle">Супер Люкс</h3>
                <p>Площадь - 0,90 м2</p>
                <p>Размеры (ШхГхВ) — 90х100х180 см</p>
                <p>Оснащение номера</p>
                <p>Лежак</p>
                <p>Домик</p>
                <p>Игровой комплекс - 3 яруса</p>
                <p>Когтеточка</p>
                <p>Цена за сутки: 200₽</p>
                <button className="super__lux__button">
                    Забранировать
                    <img src={paw_orange} alt="button_paw"/>
                </button>
             </div>
        </section>
    );
}

export default SuperLux;