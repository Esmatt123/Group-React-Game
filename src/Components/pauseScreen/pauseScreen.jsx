import TutorialScreen from "../tutorialScreen/tutorialScreen"

const pauseBtn = document.getElementById("pause-btn");
const pausePanel = document.getElementById("pause-panel");
const resumeBtn = document.getElementById("resume-btn");
const settingsBtn = document.getElementById("settings-btn");
const quitBtn = document.getElementById("quit-btn");

pauseBtn.addEventListener("click", () => {
    pauseGame();
});

resumeBtn.addEventListener("click", () => {
    resumeGame();
});

// function to pause the game
function pauseGame() {
    pausePanel.classList.remove("hidden");

}

// function to resume the game
function resumeGame() {
    pausePanel.classList.add("hidden")
}



export default PauseScreen