'use client';

import {useEffect, useRef} from 'react';
import styles from './ContactsSection.module.css';
import Container from "@components/container/Container";

declare global {
    interface Window {
        ymaps?: {
            ready: (callback: () => void) => void;
            Map: new (
                element: HTMLElement,
                state: {
                    center: [number, number];
                    zoom: number;
                    controls?: string[];
                },
            ) => {
                geoObjects: {
                    add: (object: unknown) => void;
                };
                destroy: () => void;
            };
            Placemark: new (
                coordinates: [number, number],
                properties?: Record<string, string>,
                options?: Record<string, string>,
            ) => unknown;
        };
    }
}

const YANDEX_MAPS_API_KEY = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;
const ADDRESS = 'г. Владивосток, ул. Некрасовская, 38а';
const COORDINATES: [number, number] = [43.119717, 131.904054];

export default function ContactsSection() {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        let map:
            | {
            geoObjects: {
                add: (object: unknown) => void;
            };
            destroy: () => void;
        }
            | undefined;

        let cancelled = false;

        const initMap = () => {
            if (cancelled || !mapRef.current || !window.ymaps) return;

            window.ymaps.ready(() => {
                if (cancelled || !mapRef.current || !window.ymaps) return;

                map = new window.ymaps.Map(mapRef.current, {
                    center: COORDINATES,
                    zoom: 16,
                    controls: ['zoomControl', 'fullscreenControl'],
                });

                const placemark = new window.ymaps.Placemark(
                    COORDINATES,
                    {
                        balloonContentHeader: 'Victoria’s Event',
                        balloonContentBody: ADDRESS,
                        hintContent: ADDRESS,
                    },
                    {
                        preset: 'islands#redDotIcon',
                    },
                );

                map.geoObjects.add(placemark);
            });
        };

        const existingScript = document.querySelector<HTMLScriptElement>(
            'script[data-yandex-maps="true"]',
        );

        if (existingScript) {
            if (window.ymaps) initMap();
            else existingScript.addEventListener('load', initMap);
        } else {
            const script = document.createElement('script');
            const apiKey = YANDEX_MAPS_API_KEY
                ? `&apikey=${YANDEX_MAPS_API_KEY}`
                : '';

            script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${apiKey}`;
            script.async = true;
            script.dataset.yandexMaps = 'true';
            script.addEventListener('load', initMap);
            document.head.appendChild(script);
        }

        return () => {
            cancelled = true;
            existingScript?.removeEventListener('load', initMap);
            map?.destroy();
        };
    }, []);

    return (
        <section className={styles.section} id="contacts">
            <Container>
                <div className={styles.heading}>
                    <span className={styles.eyebrow}>Связаться</span>
                    <h2>Обсудим ваше мероприятие?</h2>
                    <p>
                        Мы заранее уточняем детали: что вы любите, кого ждёте в гостях, о чем мечтаете для этого дня.
                        Не для формальности - чтобы в день мероприятия у вас осталась только одна задача: быть рядом с близкими.
                    </p>
                </div>

                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.infoItem}>
                            <span className={styles.icon} aria-hidden="true">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.6666 11.2802V13.2802C14.6674 13.4659 14.6294 13.6497 14.555 13.8198C14.4806 13.9899 14.3715 14.1426 14.2347 14.2681C14.0979 14.3937 13.9364 14.4892 13.7605 14.5487C13.5846 14.6082 13.3982 14.6303 13.2133 14.6136C11.1619 14.3907 9.19131 13.6897 7.45998 12.5669C5.84919 11.5433 4.48353 10.1777 3.45998 8.56689C2.33329 6.8277 1.63214 4.84756 1.41331 2.78689C1.39665 2.60254 1.41856 2.41673 1.47764 2.24131C1.53673 2.06589 1.63169 1.90469 1.75649 1.76797C1.88128 1.63126 2.03318 1.52203 2.2025 1.44724C2.37183 1.37245 2.55487 1.33374 2.73998 1.33356H4.73998C5.06351 1.33038 5.37717 1.44495 5.62248 1.65592C5.8678 1.86689 6.02803 2.15986 6.07331 2.48023C6.15772 3.12027 6.31428 3.74871 6.53998 4.35356C6.62967 4.59218 6.64908 4.8515 6.59591 5.10081C6.54274 5.35012 6.41922 5.57897 6.23998 5.76023L5.39331 6.60689C6.34235 8.27592 7.72428 9.65786 9.39331 10.6069L10.24 9.76023C10.4212 9.58099 10.6501 9.45746 10.8994 9.40429C11.1487 9.35112 11.408 9.37053 11.6466 9.46023C12.2515 9.68593 12.8799 9.84248 13.52 9.92689C13.8438 9.97258 14.1396 10.1357 14.351 10.3852C14.5624 10.6348 14.6748 10.9533 14.6666 11.2802Z"
                                        stroke="#AD89FB" strokeWidth="1.33333" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <div>
                                <span className={styles.label}>Телефон</span>
                                <a href="tel:+79025053966">+7 (902) 505-39-66</a>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.icon} aria-hidden="true">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.26665 13.3332C6.53903 13.9859 8.0027 14.1627 9.3939 13.8317C10.7851 13.5007 12.0123 12.6838 12.8545 11.528C13.6966 10.3722 14.0983 8.95367 13.987 7.52798C13.8758 6.10228 13.259 4.76318 12.2479 3.752C11.2367 2.74081 9.89757 2.12404 8.47187 2.01281C7.04617 1.90159 5.62763 2.30323 4.47186 3.14537C3.31609 3.9875 2.49911 5.21474 2.16813 6.60594C1.83715 7.99714 2.01394 9.46082 2.66665 10.7332L1.33331 14.6665L5.26665 13.3332Z"
                                        stroke="#AD89FB" strokeWidth="1.33333" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <div>
                                <span className={styles.label}>Мессенджеры</span>
                                <div className={styles.messengers}>
                                    <a href="https://wa.me/+79025053966" target="_blank" rel="noreferrer">
                                        WhatsApp
                                    </a>
                                    <a href="https://t.me/@Tory1287" target="_blank" rel="noreferrer">
                                        Telegram
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.icon} aria-hidden="true">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.40069 14.5328C9.64069 13.4622 13.3334 9.9955 13.3334 6.66683C13.3334 5.25234 12.7715 3.89579 11.7713 2.89559C10.7711 1.8954 9.41451 1.3335 8.00002 1.3335C6.58553 1.3335 5.22898 1.8954 4.22878 2.89559C3.22859 3.89579 2.66669 5.25234 2.66669 6.66683C2.66669 9.9955 6.35935 13.4622 7.59935 14.5328C7.71487 14.6197 7.85549 14.6667 8.00002 14.6667C8.14455 14.6667 8.28517 14.6197 8.40069 14.5328Z"
                                        stroke="#AD89FB" strokeWidth="1.33333" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
                                        stroke="#AD89FB" strokeWidth="1.33333" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <div>
                                <span className={styles.label}>Офис</span>
                                <address>{ADDRESS}</address>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.icon} aria-hidden="true">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.99998 14.6668C11.6819 14.6668 14.6666 11.6821 14.6666 8.00016C14.6666 4.31826 11.6819 1.3335 7.99998 1.3335C4.31808 1.3335 1.33331 4.31826 1.33331 8.00016C1.33331 11.6821 4.31808 14.6668 7.99998 14.6668Z"
                                        stroke="#AD89FB" strokeWidth="1.33333" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path d="M8 4V8L10.6667 9.33333" stroke="#AD89FB" strokeWidth="1.33333"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </span>
                            <div>
                                <span className={styles.label}>Режим работы</span>
                                <p>Принимаем заявки 24/7</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mapWrapper}>
                        <div className={styles.map} ref={mapRef} aria-label={`Карта: ${ADDRESS}`}/>
                        <noscript>
                            <p className={styles.mapFallback}>{ADDRESS}</p>
                        </noscript>
                    </div>
                </div>
            </Container>
        </section>
    );
}