import './Footer1.css';
import facebookIcon from "../assets/facebook_icon.png";
import twitterIcon from "../assets/twitter_icon.png";
import instagramIcon from "../assets/instagram_icon.png";

export default function Footer1(){
    return(
        <div className='footer_container'>

            <div className='footer_main'>
                <div className='footer_company'>
                    <h2>TELL SWEET TREATS</h2>
                    <p>Have feedback about our products or service? 
                    Contact Sweet Treats directly! <br/>
                    (For donations please <a className='footer_click'> <span className='click_here'>CLICK HERE</span> </a>)</p>
                    <a href='mailto:contact@sweetreats.com' className='contact_us'>contact@sweetreats.com</a>
                    <div className='footer_socials'>
                        <img src={facebookIcon} alt='Facebook'/>
                        <img src={twitterIcon} alt='Twitter'/>
                        <img src={instagramIcon} alt='Instagram'/>

                    </div>
                </div>

                <div className='footer_menu'>
                    <h2>OUR MENU</h2>
                    <ul>
                        <li><a href=''>CAKES</a></li>
                        <li><a href=''>CUPCAKES</a></li>
                        <li><a href=''>COOKIES</a></li>
                        <li><a href=''>SPECIALS</a></li>
                    </ul>
                </div>

                <div className='footer_about'>
                    <h2>ABOUT US</h2>
                    <ul>
                        <li><a href=''>OUR STORY</a></li>
                        <li><a href=''>LOCATIONS</a></li>
                        <li><a href=''>WEDDING</a></li>
                        <li><a href=''>PRESS</a></li>
                        <li><a href=''>CAREERS</a></li>
                        <li><a href=''>BLOG</a></li>
                    </ul>
                </div>

                <div className='footer_help'>
                    <h2>HELP</h2>
                    <ul>
                        <li><a href=''>CONTACT US</a></li>
                        <li><a href=''>DONATIONS</a></li>
                        <li><a href=''>FAQ</a></li>
                        <li><a href=''>ACCESSIBILITY</a></li>
                    </ul>
                </div>

                <div className='footer_giftcards'>
                    <h2>GIFT CARDS</h2>
                    <ul>
                        <li><a href=''>PURCHASE GIFT CARDS</a></li>
                    </ul>
                </div>
            </div>

            <div className='footer_banner'>
                <div className='footer_copyright'>
                    <p>SWEET TREATS 2024. All rights reserved &reg;</p>
                </div>

                <div className='footer_quicklinks'>
                    <ul>
                        <li>PRIVACY</li>
                        <li>TERMS</li>
                        <li>COOKIES</li>
                        <li>SITEMAP</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}