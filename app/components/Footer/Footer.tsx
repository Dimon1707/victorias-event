import Image from 'next/image';
import styles from './Footer.module.css';
import Container from "@components/container/Container";

const navigation = [
    {label: 'Услуги', href: '#services'},
    {label: 'Почему мы', href: '#why-us'},
    {label: 'Портфолио', href: '#portfolio'},
    {label: 'Отзывы', href: '#reviews'},
    {label: 'Контакты', href: '#contacts'},
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.columns}>
                    <div className={styles.brand}>
                        <a href="/" className={styles.logoLink} aria-label="На главную">
                            <Image
                                src="/logo_main.svg"
                                alt="Victoria’s Event"
                                width={150}
                                height={60}
                                className={styles.logo}
                            />
                        </a>
                        <p>Мероприятия, которые запомнятся на годы.</p>
                    </div>

                    <div className={styles.column}>
                        <h2>Навигация</h2>
                        <nav aria-label="Навигация в подвале">
                            <ul>
                                {navigation.map((item) => (
                                    <li key={item.href}>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className={styles.column}>
                        <h2>Контакты</h2>
                        <ul>
                            <li><a href="tel:+79025053966">+7 (902) 505-39-66</a></li>
                            <li><a href="https://t.me/@Tory1287" target="_blank" rel="noreferrer">Telegram</a></li>
                            <li><a href="https://wa.me/79025053966" target="_blank" rel="noreferrer">WhatsApp</a></li>
                            <li>г. Владивосток, ул. Некрасовская, 38а</li>
                        </ul>
                    </div>

                    {/*<div className={styles.column}>*/}
                    {/*    <h2>Юридическое</h2>*/}
                    {/*    <ul>*/}
                    {/*        <li>ИП Иванова В.А.</li>*/}
                    {/*        <li>ИПН: 7712345678</li>*/}
                    {/*        <li>ОГРН: 1187746000000</li>*/}
                    {/*        <li><a href="/privacy">Политика конфиденциальности</a></li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Victoria’s Event. Все права защищены.</p>
                </div>
            </Container>
        </footer>
    );
}