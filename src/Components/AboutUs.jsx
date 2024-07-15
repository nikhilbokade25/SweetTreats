import "./AboutUs.css";
import donutAboutImg from '../assets/donut_about.png';
import React from 'react';
import donutIcon from '../assets/donut_icon.png';
import cookieIcon from '../assets/cookies_icon.png';
import macaroonIcon from '../assets/macaroon_icon.png';
import cupcakeIcon from '../assets/cupcake_icon.png';
import cakeIcon from '../assets/cake_icon.png';
import pastryIcon from '../assets/pastry_icon.png';
import pancakeIcon from '../assets/pancake_icon.png';
import Marquee from "react-fast-marquee";



export default function AboutUs() {
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

            <div className="sliding_container"> 
                <Marquee velocity="10">
                    <div className="sliding_image">
                        <img src={cookieIcon} />
                    </div>

                    <div className="sliding_image">
                        <img src={donutIcon} />
                    </div>

                    <div className="sliding_image">
                        <img src={cupcakeIcon} />
                    </div>

                    <div className="sliding_image">
                        <img src={pastryIcon} />
                    </div>

                    <div className="sliding_image">
                        <img src={macaroonIcon} />
                    </div>

                    <div className="sliding_image">
                        <img src={cakeIcon} />
                    </div>

                    <div className="sliding_image">
                        <img src={pancakeIcon} />
                    </div>
                </Marquee>
            </div>
        </div>
    );
}
