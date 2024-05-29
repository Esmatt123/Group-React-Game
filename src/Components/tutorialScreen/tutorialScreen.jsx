import './tutorialScreen.css'
import MainButton  from "../mainButton/mainButton"
import UseLink from "../linksDelay/linksDelay";
import bombRules from "../../../public/assets/icons/Bomb-rules.svg";
import equalIcon from "../../../public/assets/icons/equal-icon-rules.svg"
import noHeart from "../../../public/assets/icons/No-heart-rules.svg"
import exitCross from "../../../public/assets/icons/Exit-cross-rules.svg"
import sadAlien from "../../../public/assets/images/Sad-alien-rules.svg"

const TutorialScreen = () => {
    const nameBtn = 'Play';
    return (
       <div className="container-tutorial">

        <div className="tutorial-header">
        <h2>Aliens attacked the moon!</h2>
        <img src={exitCross} alt="Exit cross" />
        </div>
        <div className="tutorial-text-first">
            <p>Whack the aliens with the hammer and earn points.
        It's getting harder with time. Do NOT whack the bombs.</p>
        </div>
        <div className="tutorial-icons">
            <img src={bombRules} alt="Bomb" />
            <img src={equalIcon} alt="Icon" />
            <img src={noHeart} alt="Xheart" />
        </div>
        <div className="tutorial-text-second">
            <p>Do NOT whack the bombs
            You only have three lives.
            Reach a 500 score to WIN!</p>
        </div>
        <div className="tutorial-alien">
            <img src={sadAlien} alt="Alien" />
        </div>
        
        <div className='tutorial-btn'>
        <UseLink to="/levelone">
		<MainButton name={nameBtn} /> 
		</UseLink>
        </div>			
        
       </div>     
    )};

export default TutorialScreen 