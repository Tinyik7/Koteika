import temp from '../assets/images/temp.png';
import cam from '../assets/images/cam.png';
import taxi from '../assets/images/taxi.png';
import food from '../assets/images/food.png';
import strole from '../assets/images/strole.png';
import vets from '../assets/images/vets.png';

function WhyUs() {
    return (
        <section className="container" id="why-us">
            <h2 className="container__title">
                Почему мы?
            </h2>
            <div className="container__grid">
                <div className="container__card">
                    <img src={temp} alt="temp" className="why-us__icon"/>
                    <h3 className="container__title">Комфортная температура</h3>
                    <p className="container__text">
                        Во всех номерах поддерживается комфортная температура в пределах 23 - 25 градусов.
                        В каждом номере можно дополнительно отрегулировать температуру.
                    </p>
                </div>
                 <div className="container__card">
                    <img src={cam} alt="cams" className="why-us__icon"/>
                    <h3 className="container__title">Видеонаблюдение</h3>
                    <p className="container__text">
                         Мы предоставляем доступ в нашу систему. Вы сможете следить за своим питомцем со смартфона или
                                        компьютера.
                    </p>
                </div>
                <div className="container__card">
                    <img src={taxi} alt="taxi" className="why-us__icon"/>
                    <h3 className="container__title">Услуги Зоотакси</h3>
                    <p className="container__text">
                        Мы приедем за вашим питомцем в любой район Санкт-Петербурга.
                    </p>
                </div>
                <div className="container__card">
                    <img src={food} alt="food" className="why-us__icon"/>
                    <h3 className="container__title">Сбалансированное питание</h3>
                    <p className="container__text">
                         Вы можете привезти свой корм или доверить рацион своего питомца нашим профессионалам.
                    </p>
                 </div>
                 <div className="container__card">
                    <img src={strole} alt="stroles" className="why-us__icon"/>
                    <h3 className="container__title">Ежедневные прогулки</h3>
                    <p className="container__text">
                         По вашему желанию мы выгуливаем вашего питомца два раза в день на специализированной закрытой
                                        территории.
                    </p>
                </div>
                <div className="container__card">
                    <img src={vets} alt="vets" className="why-us__icon"/>
                    <h3 className="container__title">Лучшие ветеринары</h3>
                    <p className="container__text">
                        В гостинице 24 часа дежурит ветеринарный врач, который окажет любую помощь в случае
                                        необходимости.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;