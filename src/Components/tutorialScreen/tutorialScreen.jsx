import './tutorialScreen.css'

const TutorialScreen = () => {
    return (
       <div className="container-tutorial">
        <div className="tutorial-header">
        <h2>Aliens attacked the moon!</h2>
        </div>
        <div className="tutorial-text-first">
            <p>Whack the aliens with the hammer and earn points.
        It's getting harder with time. Do NOT whack the bombs.</p>
        </div>
        <div className="tutorial-icons">
            <img src="../src/assets/icons/Bomb-rules.svg" alt="Bomb" />
            <img src="../src/assets/icons/equal-icon-rules.svg" alt="Icon" />
            <img src="../src/assets/icons/No-heart-rules.svg" alt="Xheart" />
        </div>
        <div className="tutorial-text-second">
            <p>Do NOT whack the bombs
            You only have three lives.
            Reach a 500 score to WIN!</p>
        </div>
        <div className="tutorial-alien">
            <img src="../src/assets/images/Sad-alien-rules.svg" alt="Alien" />
        </div>
        <div className="tutorial-play-btn">
            <button type="button" class="btn">Start game</button>
        </div>
       </div>     
    )};

export default TutorialScreen 