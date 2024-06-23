import cookieImg from '../assets/cookies.png';
import donutsImg from '../assets/donuts.png';
import cupcakeImg from '../assets/cupcakes.png';
import macaroonImg from '../assets/macaroons.png';
import "./WhatWeProducePage.css";

export default function WhatWeProducePage(){
    return(
        <div className="whatweproduce_container">
            <h2>WHAT WE PRODUCE?</h2>
            <h3>subheading</h3>

            <div className="whatweproduce_main">
            <div className="whatweproduce_content">
                    <img src={cookieImg} alt="Cookies" />
                    <h4>Cookies</h4>
                    <p>Delicious homemade cookies.</p>
                </div>
                <div className="whatweproduce_content">
                    <img src={donutsImg} alt="Donuts" className='donuts_img'/>
                    <h4>Apple Pie</h4>
                    <p>Classic apple pie with a flaky crust.</p>
                </div>
                <div className="whatweproduce_content">
                    <img src={cupcakeImg} alt="Cupcakes" />
                    <h4>Cupcakes</h4>
                    <p>Sweet and delightful cupcakes.</p>
                </div>
                <div className="whatweproduce_content">
                    <img src={macaroonImg} alt="Macaroons" />
                    <h4>Macaroons</h4>
                    <p>Colorful and tasty macaroons.</p>
                </div>
            </div>

            <button>SEE ALL PRODUCTS</button>
        </div>
    );
}