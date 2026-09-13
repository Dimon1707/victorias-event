import React from 'react';
import styles from './Hero.module.css';
import Container from "@components/container/Container";

const heroImage = '/images/hero.jpg'

const Hero: React.FC = () => {
    return (
        <section
            id="top"
            className={styles.hero}
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <Container>
                <div className={styles.overlay}/>

                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Мероприятия,
                        <br/>
                        которые запомнят
                        <br/>
                        <span className={styles.titleItalic}>на годы</span>
                    </h1>

                    <p className={styles.description}>
                        Организация мероприятий под ключ — от концепции до последнего гостя.
                        Корпоративы, свадьбы, частные праздники, шоу и церемонии прощания.
                    </p>

                    <div className={styles.actions}>
                        <a href="#contacts" className={styles.primaryButton}>
                            Оставить заявку
                        </a>
                        <a href="#portfolio" className={styles.secondaryButton}>
                            Смотреть портфолио
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
