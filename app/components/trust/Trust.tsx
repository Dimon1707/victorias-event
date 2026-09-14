import type {ReactNode} from 'react';
import styles from './Trust.module.css';
import Container from "@components/container/Container";

type TrustItem = {
    icon: ReactNode;
    title: string;
    description: string;
};

const trustItems: TrustItem[] = [
    {
        icon: <ShieldIcon/>,
        title: 'Прозрачная смета',
        description:
            'Фиксируем бюджет в договоре. Никаких «всплывающих» расходов — вы заранее знаете, за что платите, и видите каждую статью.',
    },
    {
        icon: <ClockIcon/>,
        title: 'Резервный план на форс-мажор',
        description:
            'Погода, задержка подрядчика, технический сбой — для каждого сценария есть план B. Ваше мероприятие состоится в любом случае.',
    },
    {
        icon: <PeopleIcon/>,
        title: 'Личный менеджер 24/7',
        description:
            'Один человек ведёт ваш проект от первой встречи до финального отчёта. Не нужно объяснять ситуацию разным людям — все вопросы в один контакт, в любое время.',
    },
    {
        icon: <GridIcon/>,
        title: 'Собственная команда',
        description:
            'Декораторы, техник, ведущие, кейтеринг — люди, с которыми работаем годами. Нет случайных исполнителей.',
    },
];

export function TrustSection(): React.JSX.Element {
    return (
        <section className={styles.section} aria-labelledby="trust-title">
            <Container>
                <header className={styles.header}>
                    <h2 className={styles.title} id="trust-title">
                        Почему нам доверяют
                    </h2>

                    <p className={styles.subtitle}>
                        Мы убираем хаос и стресс из организации. Вы получаете <br className={styles.desktopBreak}/>результат — и время наслаждаться им.
                    </p>
                </header>

                <div className={styles.grid}>
                    {trustItems.map((item) => (
                        <article className={styles.card} key={item.title}>
                            <div className={styles.icon} aria-hidden="true">
                                {item.icon}
                            </div>

                            <h3 className={styles.cardTitle}>{item.title}</h3>

                            <p className={styles.cardDescription}>
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}

function ShieldIcon(): React.JSX.Element {
    return (
        <svg viewBox="0 0 28 28" fill="none">
            <path
                d="M14 3.5 22 6.6v7.1c0 5.1-3.4 9.4-8 10.8-4.6-1.4-8-5.7-8-10.8V6.6L14 3.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="m10.7 14 2.1 2.1 4.5-4.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ClockIcon(): React.JSX.Element {
    return (
        <svg viewBox="0 0 28 28" fill="none">
            <circle
                cx="14"
                cy="14"
                r="9.2"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M14 9v5l3.2 2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function PeopleIcon(): React.JSX.Element {
    return (
        <svg viewBox="0 0 28 28" fill="none">
            <circle
                cx="9.4"
                cy="9.4"
                r="3.2"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <circle
                cx="20.5"
                cy="10.2"
                r="2.6"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M4.8 20.7c0-2.8 2.2-5 5-5h.8c2.8 0 5 2.2 5 5M16.8 20.7c0-2.8 1.9-4.8 4.5-4.8 1.3 0 2.5.5 3.3 1.4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
}

function GridIcon(): React.JSX.Element {
    return (
        <svg viewBox="0 0 28 28" fill="none">
            <rect
                x="4.5"
                y="4.5"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <rect
                x="16.5"
                y="4.5"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <rect
                x="4.5"
                y="16.5"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <rect
                x="16.5"
                y="16.5"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.6"
            />
        </svg>
    );
}