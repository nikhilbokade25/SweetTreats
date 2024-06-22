import './Hero.css';
import BannerImg from '../assets/header2.jpg';


export default function Hero(){
    return(
        <div className='hero_main'>
            <div className='hero_banner'>
                <img src={BannerImg} alt='banner'/>
            </div>
        </div>
    );
}