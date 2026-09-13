'use client';

import Image from 'next/image';
import {useEffect, useState} from 'react';
import styles from './EventGallery.module.css';
import Container from "@components/container/Container";

type EventPhoto = {
    src: string;
    alt: string;
    category: string;
    title: string;
};

const photos: EventPhoto[] = [
    // {
    //     src: '/images/event/event-1.png',
    //     alt: 'Оформление праздничного зала',
    //     category: 'Свадьба',
    //     title: 'Торжество в загородной усадьбе',
    // },
    {
        src: '/images/event/event-2.png',
        alt: 'Сервировка стола на мероприятии',
        category: 'Частное событие',
        title: 'Ужин в кругу близких',
    },
    {
        src: '/images/event/event-3.png',
        alt: 'Гости на корпоративном мероприятии',
        category: 'Корпоратив',
        title: 'Корпоратив или Team building',
    },
    {
        src: '/images/event/event-4.jpg',
        alt: 'Декор праздничной площадки',
        category: 'Свадьба',
        title: 'Свадьба',
    },
    {
        src: '/images/event/event-5.png',
        alt: 'Праздничная атмосфера мероприятия',
        category: 'День рождения',
        title: 'Юбилей',
    },
    {
        src: '/images/event/event-6.png',
        alt: 'Гала-ужин на площадке',
        category: 'Корпоратив',
        title: 'Гала-вечер бренда',
    },
    {
        src: '/images/event/выпускной.png',
        alt: 'Выпускной',
        category: 'Выпускной',
        title: 'Выпускной вечер и последний звонок',
    },
];


const slides = [photos[photos.length - 1], ...photos, photos[0]];

export default function EventGallery() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    const activeIndex =
        currentSlide === 0
            ? photos.length - 1
            : currentSlide === slides.length - 1
                ? 0
                : currentSlide - 1;

    const goToPrevious = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setIsTransitionEnabled(true);
        setCurrentSlide((current) => current - 1);
    };

    const goToNext = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setIsTransitionEnabled(true);
        setCurrentSlide((current) => current + 1);
    };

    const goToDot = (index: number) => {
        if (isAnimating || index === activeIndex) return;

        setIsTransitionEnabled(true);
        setCurrentSlide(index + 1);
    };

    const handleTransitionEnd = () => {
        setIsAnimating(false);

        if (currentSlide === 0) {
            setIsTransitionEnabled(false);
            setCurrentSlide(photos.length);
            return;
        }

        if (currentSlide === slides.length - 1) {
            setIsTransitionEnabled(false);
            setCurrentSlide(1);
        }
    };

    useEffect(() => {
        if (isTransitionEnabled) return;

        const frameId = requestAnimationFrame(() => {
            setIsTransitionEnabled(true);
        });

        return () => cancelAnimationFrame(frameId);
    }, [isTransitionEnabled]);

    return (
        <section className={styles.section} id="portfolio">
            <Container>
                <div className={styles.top}>
                    <div>
                        <span className={styles.eyebrow}>Портфолио</span>
                        <h2>Моменты, которые остаются в памяти</h2>
                    </div>

                    <a className={styles.allLink} href="#contacts">
                        Обсудить мероприятие
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>

                <div className={styles.galleryArea}>
                    <button
                        className={`${styles.arrow} ${styles.arrowPrevious}`}
                        type="button"
                        onClick={goToPrevious}
                        disabled={isAnimating}
                        aria-label="Предыдущая фотография"
                    >
                        <svg
                            className={styles.arrowSvg}
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M5 12H19M5 12L11 6M5 12L11 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <div className={styles.viewport}>
                        <div
                            className={`${styles.track} ${
                                isTransitionEnabled ? styles.trackTransition : ''
                            }`}
                            style={{
                                transform: `translateX(calc(-1 * ${currentSlide} * (var(--card-width) + var(--gap))))`,
                            }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {slides.map((photo, index) => {
                                const isClone = index === 0 || index === slides.length - 1;

                                return (
                                    <article
                                        className={styles.slide}
                                        key={`${photo.src}-${index}`}
                                        aria-hidden={isClone ? true : undefined}
                                    >
                                        <div className={styles.imageWrapper}>
                                            <Image
                                                src={photo.src}
                                                alt={isClone ? '' : photo.alt}
                                                fill
                                                sizes="(max-width: 640px) 82vw, (max-width: 1000px) 64vw, 520px"
                                                className={styles.image}
                                                priority={index === currentSlide}
                                            />

                                            <div className={styles.overlay}/>

                                            <div className={styles.caption}>
                                                <span>{photo.category}</span>
                                                <h3>{photo.title}</h3>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        className={`${styles.arrow} ${styles.arrowNext}`}
                        type="button"
                        onClick={goToNext}
                        disabled={isAnimating}
                        aria-label="Следующая фотография"
                    >
                        <svg
                            className={styles.arrowSvg}
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M5 12H19M19 12L13 6M19 12L13 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <div className={styles.pagination} aria-label="Навигация по слайдам">
                    {photos.map((photo, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${
                                activeIndex === index ? styles.dotActive : ''
                            }`}
                            type="button"
                            onClick={() => goToDot(index)}
                            aria-label={`Перейти к фотографии ${index + 1}`}
                            aria-current={activeIndex === index ? 'true' : undefined}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}