import paw from '../assets/images/paw.png';

function Poster() {
    return(
        <section className="poster">
            <div className="poster__content">
                <p className="poster__text">
                    Cанкт-Петербург
                </p>
                <h1 className="poster__title">
                     Котейка
                </h1>
                <p className="poster__subtitle">
                    Уютная гостиница для котов и кошек
                </p>
                <button className="poster__button">
                    Забранировать
                    <img src={paw} alt="button_paw"/>
                </button>
            </div>
        </section>
    );
}

export default Poster;