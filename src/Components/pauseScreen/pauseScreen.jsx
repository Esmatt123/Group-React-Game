import TutorialScreen from "../tutorialScreen/tutorialScreen"

const PauseScreen = () => {
    return (
       
        <div className="pause-container">
            <h2>Paused</h2>
            <button onClick={ResumeGame}>Resume</button>
            <button onClick={TutorialScreen}>Rules</button>
            <button onClick={}>Quit game</button>
        </div>
    
    )
}

function Start () {
    PauseScreen.SetActive(false);
}

const PauseGame () {
    PauseMenu.SetActive(true);
    <Time className="timscale"></Time>
    
}

const ResumeGame () {
    PauseMenu.SetActive(false);
}

export default PauseScreen