import React from 'react';
import styles from './Navbar.module.css';


interface NavLink {
    label: string;
    href: string;
}

const NAV_LINKS: NavLink[] = [
    {label: 'Услуги', href: '#services'},
    {label: 'Почему мы', href: '#why-us'},
    {label: 'Портфолио', href: '#portfolio'},
    {label: 'Отзывы', href: '#reviews'},
    {label: 'Контакты', href: '#contacts'},
];

const Navbar: React.FC = () => {
    return (
        <header className={styles.navbar}>
            <a href="#top" className={styles.logoLink}>
                <img src="/logo_nav_main.svg" alt="Victoria's Event" className={styles.logoImage}/>
            </a>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className={styles.navLink}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>


            </div>
            <a href="#contacts" className={styles.ctaButton}>
                Оставить заявку
            </a>
        </header>
    );
};

export default Navbar;