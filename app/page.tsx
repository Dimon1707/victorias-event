import React from 'react';
import Navbar from "@components/Navbar/Navbar";
import Hero from "@components/Hero/Hero";
import {ReviewsSection} from "@components/reviews/Reviews";
import {TrustSection} from "@components/trust/Trust";
import Container from "@components/container/Container";
import ContactsSection from "@components/ContactsSection/ContactsSection";
import Footer from "@components/Footer/Footer";
import EventGallery from "@components/EventGallery/EventGallery";
import ServicesSection from "@components/ServicesSection/ServicesSection";
import HowWeWork from "@components/HowWeWork/HowWeWork";

const HomePage: React.FC = () => {
    return (
        <main id="top">
            {/* Фиксированный заблюренный навбар поверх hero */}
            <Navbar />

            {/* Hero-секция на весь экран */}
                <Hero/>
            {/* Заглушки под остальные секции, чтобы заработали ссылки из навбара */}
            <section id="services">
                <ServicesSection/>
            </section>

            <section id="why-us">
                <TrustSection/>
            </section>

            <section id="portfolio">
                <EventGallery/>
            </section>

            <section id="reviews">
                    <ReviewsSection/>
            </section>

            <HowWeWork/>

            <section id="contacts">
                <ContactsSection/>
            </section>

            {/*<section id="request">*/}
            {/*    */}
            {/*</section>*/}

            <Footer/>
        </main>
    );
};

export default HomePage;