import "./AboutUs.css";
import donutAboutImg from '../assets/donut_about.png';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        let animation;
        
        if (!isMobile) {
            animation = gsap.to('.aboutus_image', {
                scrollTrigger: {
                    trigger: '.aboutus_main',
                    start: 'top top', // when the top of the trigger hits the top of the viewport
                    end: 'bottom bottom', // when the bottom of the trigger hits the bottom of the viewport
                    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                },
                y: 265,
                ease: 'none'
            });
        }

        // Cleanup function
        return () => {
            if (animation) {
                animation.scrollTrigger.kill();
                animation.kill();
            }
        };
    }, []);

    return (
        <div className="aboutus_container">
            <h2>About Us</h2>
            <div className="aboutus_main">
                <div className="aboutus_image">
                    <img src={donutAboutImg} alt="donut" />
                </div>
                <div className="aboutus_text">
                    <p>Welcome to Sweet Treats, where the aroma of freshly baked goods fills the air and warms the soul. Established over two decades ago, our bakery has become a beloved cornerstone of the community. Our journey began with a passion for creating delectable treats using the finest ingredients and traditional baking methods. Over the years, we've perfected our recipes to offer a delightful assortment of pastries, cakes, cookies, and breads that cater to every taste and occasion.
                        <br/><br/>Our bakers are dedicated artisans who pour love and creativity into every item they craft. From our classic chocolate chip cookies to our signature wedding cakes, each creation is a testament to our commitment to quality and flavor. We take pride in using locally sourced ingredients, ensuring that every bite is fresh and wholesome.
                        <br/><br/>Thank you for choosing Sweet Treats. We are honored to be a part of your daily life and look forward to serving you the finest baked goods for many more years to come. Our commitment to excellence and passion for baking is what drives us, and we can't wait to share our love for sweets with you. Come visit us and experience the magic of Sweet Treats.
                    </p>
                </div>
            </div>
        </div>
    );
}
