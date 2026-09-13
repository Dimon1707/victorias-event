import styles from './HowWeWork.module.css';
import Container from "@components/container/Container";

type WorkStep = {
    number: string;
    title: string;
    description: string;
};

const steps: WorkStep[] = [
    {
        number: '01',
        title: 'Знакомство и бриф',
        description:
            'Уточняем все детали по телефону или при личной встрече.',
    },
    {
        number: '02',
        title: 'Смета и договор',
        description:
            'Формируем прозрачную смету, согласовываем детали и фиксируем всё в договоре.',
    },
    {
        number: '03',
        title: 'Подготовка',
        description:
            'Собираем команду, площадку, подрядчиков и сценарий. Все шаги согласовываются с заказчиком.',
    },
    {
        number: '04',
        title: 'Мероприятие и отчёт',
        description:
            'Координируем событие до последней детали, а затем передаём фото, видео и отчёт.',
    },
];

export default function HowWeWork() {
    return (
        <section className={styles.section} id="process">
            <Container>
                <div className={styles.heading}>
                    <div>
                        <span className={styles.eyebrow}>Процесс</span>
                        <h2>Как мы работаем</h2>
                        <p>
                            Бережно ведём проект от первой идеи до финальных эмоций и
                            материалов после события.
                        </p>
                    </div>


                </div>

                <div className={styles.process}>
                    <div className={styles.cards}>
                        {steps.map((step) => (
                            <article className={styles.card} key={step.number}>
                                <div
                                    className={`${styles.corner} ${styles.cornerTopLeft}`}
                                    aria-hidden="true"
                                />
                                <div
                                    className={`${styles.corner} ${styles.cornerTopRight}`}
                                    aria-hidden="true"
                                />
                                <div
                                    className={`${styles.corner} ${styles.cornerBottomLeft}`}
                                    aria-hidden="true"
                                />
                                <div
                                    className={`${styles.corner} ${styles.cornerBottomRight}`}
                                    aria-hidden="true"
                                />

                                <div className={styles.cardHeader}>
                                    <span className={styles.number}>{step.number}</span>

                                    <svg
                                        className={styles.stepArrow}
                                        viewBox="0 0 48 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M3 12H43M43 12L35 5M43 12L35 19"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div className={styles.cardContent}>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className={styles.timeline} aria-hidden="true">
                        <div className={styles.timelineBase}/>
                        <div className={styles.timelineProgress}/>

                        {steps.map((step, index) => (
                            <div className={styles.timelineStep} key={step.number}>
                                <span className={styles.timelinePoint}/>
                                <span className={styles.timelineNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}