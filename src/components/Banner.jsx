import paw from '../assets/images/paw.png';

function Banner () {
    return(
        <section className="banner">
            <div className="banner__content">
                <h1 className="banner__title">
                    Каждый 7-й день
                    бесплатно!
                </h1>
                <p className="banner__subtitle">
                    Акция действует при размещении
                    в номерах “Люкс” и “Супер-Люкс” 
                </p>
                <button className="banner__button">
                    Забранировать
                    <img src={paw} alt="button_paw"/>
                </button>
            </div>
        </section>
    );
}

export default Banner;