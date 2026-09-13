import styles from './Reviews.module.css';
import Container from "@components/container/Container";

type Review = {
    name: string;
    event: string;
    text: string;
    initials: string;
    avatarColor: string;
    rating: number;
};

const reviews: Review[] = [
    {
        name: 'Анна и Михаил',
        event: 'Свадьба',
        text:
            'Мы смогли полностью расслабиться и наслаждаться своим днём. Команда взяла на себя абсолютно все организационные вопросы.',
        initials: 'АМ',
        avatarColor: '#d8b9a9',
        rating: 5,
    },
    {
        name: 'Екатерина Смирнова',
        event: 'День рождения',
        text:
            'Праздник получился именно таким, каким я его представляла. Всё было красиво, спокойно и без неожиданных расходов.',
        initials: 'ЕС',
        avatarColor: '#b9c7bb',
        rating: 5,
    },
    {
        name: 'Илья Воронцов',
        event: 'Презентация бренда',
        text:
            'Особенно понравился подход команды: всё чётко, быстро и очень внимательно к деталям. Гости остались под большим впечатлением.',
        initials: 'ИВ',
        avatarColor: '#c7bfd2',
        rating: 5,
    },
];

export function ReviewsSection(): React.JSX.Element {
    return (
        <section className={styles.section} aria-labelledby="reviews-title">
            <Container>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <h2 className={styles.title} id="reviews-title">
                            Отзывы наших клиентов
                        </h2>

                        <p className={styles.subtitle}>
                            Мы ценим доверие клиентов и бережно относимся к каждому мероприятию.
                        </p>
                    </header>

                    <div className={styles.grid}>
                        {reviews.map((review) => (
                            <article className={styles.card} key={review.name}>
                                <div
                                    className={styles.rating}
                                    aria-label={`Оценка: ${review.rating} из 5`}
                                >
                                    {Array.from({length: review.rating}).map((_, index) => (
                                        <StarIcon key={index}/>
                                    ))}
                                </div>

                                <blockquote className={styles.quote}>
                                    «{review.text}»
                                </blockquote>

                                <footer className={styles.author}>
                                    <div
                                        className={styles.avatar}
                                        style={{backgroundColor: review.avatarColor}}
                                        aria-hidden="true"
                                    >
                                        {review.initials}
                                    </div>

                                    <div className={styles.authorInfo}>
                                        <cite className={styles.name}>{review.name}</cite>
                                        <span className={styles.event}>{review.event}</span>
                                    </div>
                                </footer>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function StarIcon(): React.JSX.Element {
    return (
        <svg
            className={styles.star}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="m12 2.8 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2-4.5-4.4 6.3-.9L12 2.8Z"/>
        </svg>
    );
}