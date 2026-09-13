'use client';

import Image from 'next/image';
import {useRef, useState} from 'react';
import styles from './ServicesSection.module.css';
import Container from "@components/container/Container";

type Service = {
    title: string;
    image: string;
    href: string;
};

const services: Service[] = [
    {
        title: 'Корпоративы',
        image: '/images/services/Корпоративы.png',
        href: '#corporate',
    },
    {
        title: 'Свадьбы',
        image: '/images/services/свадьба.png',
        href: '#weddings',
    },
    {
        title: 'Дни рождения',
        image: '/images/services/Дни рождения.png',
        href: '#birthdays',
    },
    {
        title: 'Фуршеты и банкеты',
        image: '/images/services/Фуршеты и банкеты.png',
        href: '#banquets',
    },
    {
        title: 'Выпускной вечер и последний звонок',
        image: '/images/services/выпускной.jpg',
        href: '#shows',
    },
    {
        title: 'Прощание',
        image: '/images/services/Прощание.png',
        href: '#farewell',
    },
];

export default function ServicesSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isVideoStarted, setIsVideoStarted] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const startVideo = async () => {
        const video = videoRef.current;

        if (!video) return;

        setIsVideoStarted(true);

        try {
            await video.play();
            setIsVideoPlaying(true);
        } catch {
            setIsVideoPlaying(false);
        }
    };

    const toggleVideo = async () => {
        const video = videoRef.current;

        if (!video) return;

        if (!isVideoStarted) {
            await startVideo();
            return;
        }

        if (video.paused) {
            try {
                await video.play();
                setIsVideoPlaying(true);
            } catch {
                setIsVideoPlaying(false);
            }

            return;
        }

        video.pause();
        setIsVideoPlaying(false);
    };

    return (
        <section className={styles.section} id="services">
            <Container>
                    <div className={styles.heading}>
                        <span className={styles.eyebrow}>Услуги</span>
                        <h2>Мы организуем</h2>
                        <p>
                            Любой формат — от камерного семейного ужина до большого шоу.
                            Берём на себя всё.
                        </p>
                    </div>

                    <div className={styles.servicesLayout}>
                        <div className={styles.servicesGrid}>
                            {services.map((service) => (
                                <a
                                    className={styles.serviceCard}
                                    href={service.href}
                                    key={service.title}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        unoptimized
                                        fill
                                        sizes="(max-width: 760px) 50vw, (max-width: 1100px) 28vw, 260px"
                                        className={styles.serviceImage}
                                    />
                                    <span className={styles.cardOverlay}/>
                                    <span className={styles.serviceTitle}>{service.title}</span>
                                </a>
                            ))}
                        </div>

                        <aside className={styles.videoColumn}>
                            <div className={styles.videoCard}>
                                {!isVideoStarted && (
                                    <Image
                                        src="/images/preview.png"
                                        alt="Фрагмент с мероприятия"
                                        fill
                                        sizes="(max-width: 760px) 100vw, 300px"
                                        className={styles.videoPoster}
                                    />
                                )}

                                <video
                                    ref={videoRef}
                                    className={`${styles.video} ${
                                        isVideoStarted ? styles.videoVisible : styles.videoHidden
                                    }`}
                                    preload="none"
                                    playsInline
                                    controls={isVideoStarted}
                                    onPlay={() => setIsVideoPlaying(true)}
                                    onPause={() => setIsVideoPlaying(false)}
                                    onEnded={() => setIsVideoPlaying(false)}
                                >
                                    <source src="/videos/video.mp4" type="video/mp4"/>
                                    Ваш браузер не поддерживает воспроизведение видео.
                                </video>

                                <button
                                    className={`${styles.playButton} ${
                                        isVideoPlaying ? styles.playButtonPlaying : ''
                                    }`}
                                    type="button"
                                    onClick={toggleVideo}
                                    aria-label={
                                        isVideoPlaying
                                            ? 'Поставить видео на паузу'
                                            : 'Воспроизвести видео'
                                    }
                                >
                                    {isVideoPlaying ? (
                                        <span className={styles.pauseIcon} aria-hidden="true">
                    <span/>
                    <span/>
                  </span>
                                    ) : (
                                        <span className={styles.playIcon} aria-hidden="true"/>
                                    )}
                                </button>
                            </div>
                        </aside>
                    </div>
            </Container>
        </section>
    );
}