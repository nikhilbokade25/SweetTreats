import { WHATSNEWCARD_DATA } from "./WhatsNewCardData";
import "./WhatsNewPage.css";

export default function WhatsNewPage(){
    return(
        <div className="whatsnewpage_main">
            <div className="whatsnewpage_inner">
                <h1 className="whatsnewpage_title">What's New</h1>
                <div className="whatsnewpage_card_block">
                {WHATSNEWCARD_DATA.map(item => (
                        <div key={item.id} className="whatsnew_card">
                            <img src={item.img} alt={item.title} className="whatsnew_card_image" />
                            <h2 className="whatsnew_card_title">{item.title}</h2>
                            <p className="whatsnew_card_description">{item.description}</p>
                            <button className="whatsnew_card_button">Try Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}