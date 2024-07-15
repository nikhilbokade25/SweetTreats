import './Opportunities.css';
import rewardsImg from '../assets/reward_image.png';
import applyImg from '../assets/apply_image.png';

export default function Opportunities(){
    return(
        <div className="opportunities_container">
            <div className='opportunities_main'>
                <div className='opportunities_reward'>
                    <div className='reward_image'>
                        <img src={rewardsImg} alt='rewards on phone'/>
                    </div>
                    <div className='reward_text'>
                        <p>A reward program that celebrates you</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='opportunities_apply'>
                    <div className='apply_image'>
                        <img src={applyImg} alt='we are hiring' />
                    </div>
                    <div className='apply_text'>
                        <p>Have a career at Sweet Treats!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
