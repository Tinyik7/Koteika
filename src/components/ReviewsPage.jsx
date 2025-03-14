function Reviews() {
    return(
        <section className="container" id="reviews">
            <h2 className="container__title">
                Отзывы
            </h2>
            <div className="container__grid">
                <div className="container__card">
                    <div className="container__card--text">
                        <p className="reviews__quotes">“</p>
                        <p className="reviews__text">
                            Первый раз пришлось оставить нашего котика
                            в гостинице, очень переживали. Администратор Мария каждый день высылала нам фото нашего
                            питомца,
                            рассказывала, как он себя чувствует.
                            И мы и котик остались очень довольны!
                        </p>
                    </div>
                    <div className="container__card--secondary_text">
                        <span className="reviews__secondary-text">
                            Валерия Гришаева
                        </span>
                        <span className="reviews__secondary-text">
                            15 ноября, 2019
                        </span>
                    </div>
                </div>
                <div className="container__card">
                    <div className="container__card--text">
                        <p className="reviews__quotes">“</p>
                        <p className="reviews__text">
                            Гостиницу для питомцев нам посоветовали друзья. Они всегда оставляют здесь своего кота,
                            когда уезжают.
                            В “Котейке” очень хорошо заботятся о питомцах,
                            в гостинице очень чисто. Всем рекомендую!
                            Будем обращаться еще.
                        </p>
                    </div>
                    <div className="container__card--secondary_text">
                        <span className="reviews__secondary-text">
                            Екатерина Минаева
                        </span>
                        <span className="reviews__secondary-text">
                            10 октября, 2019
                        </span>
                    </div>
                </div>
                <div className="container__card">
                    <div className="container__card--text">
                        <p className="reviews__quotes">“</p>
                        <p className="reviews__text">
                            Мой кот — настоящая привереда, угодить ему сложно.
                            У меня были особые требования к уходу за ним,
                            и “Котейка” отлично справились. Я часто наблюдал по видео за питомцем
                            со своего телефона, это очень удобно.
                        </p>
                    </div>
                    <div className="container__card--secondary_text">
                        <span className="reviews__secondary-text">
                            Павел Нечаев
                        </span>
                        <span className="reviews__secondary-text">
                            2 августа, 2019
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;