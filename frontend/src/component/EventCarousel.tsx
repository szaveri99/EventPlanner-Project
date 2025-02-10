import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Container, Card } from "react-bootstrap";

import '../App.css'
const items = [
    { title: "Corporate", text: "Lorem ipsum dolor sit amet adipiscing elit. Nunc maximus, nec ut commodo." },
    { title: "Weddings", text: "Lorem ipsum dolor sit amet adipiscing elit. Nunc maximus, nec ut commodo." },
    { title: "Gatherings", text: "Lorem ipsum dolor sit amet adipiscing elit. Nunc maximus, nec ut commodo." },
    { title: "Weddings", text: "Lorem ipsum dolor sit amet adipiscing elit. Nunc maximus, nec ut commodo." },
    { title: "Gatherings", text: "Lorem ipsum dolor sit amet adipiscing elit. Nunc maximus, nec ut commodo." },
    { title: "Weddings", text: "Lorem ipsum dolor sit amet adipiscing elit. Nunc maximus, nec ut commodo." },
    { title: "Gatherings", text: "Lorem ipsum dolor sit amet adipiscing elit. Nunc maximus, nec ut commodo." },
];

export const EventCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;


    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, items.length - itemsPerPage));
    };
    return (
        <Container className="text-center mt-5">
            <h2 className="mb-4">Get Started for Event Planning With Us !</h2>
            <div className="slider-container">
                <Swiper
                    cssMode={true}
                    // spaceBetween={20}
                    slidesPerView={3}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >{items.map((item, index) => (
                    <SwiperSlide>
                        <div key={index} className="slider-item">
                            <Card className="shadow-sm border-0 text-center p-3">
                                <Card.Img variant="top" src="music-event.jpg" className="mx-auto" />
                                <Card.Body>
                                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                                    <Card.Text>{item.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </Container>
    );
};
