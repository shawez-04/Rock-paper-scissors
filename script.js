let user_score = 0;
let comp_score = 0;
const choices = document.querySelectorAll(".choices");
const resultbox = document.querySelector(".score-mssg");
const user_score_show = document.querySelector("#user-score");
const comp_score_show = document.querySelector("#comp-score");

// Random choice from computer
const compchoice = () => {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
};

// Determine winner
const winner = (userchoice) => {
    const comp = compchoice();
    console.log(`Computer chose: ${comp}`);

    if (userchoice === comp) {
        draw();
    } 
    else if (
        (userchoice === "rock" && comp === "scissors") ||
        (userchoice === "paper" && comp === "rock") ||
        (userchoice === "scissors" && comp === "paper")
    ) {
        user_score++;
        user_won();
    } 
    else {
        comp_score++;
        comp_won();
    }
};

// Functions
const draw = () => {
    console.log("game was draw");
    user_score_show.innerHTML = user_score;
    comp_score_show.innerHTML = comp_score;
    resultbox.innerHTML = "<div> It's a draw </div>";
    resultbox.style.backgroundColor="#17303D";
};

const comp_won = () => {
    console.log("comp won");
    user_score_show.innerHTML = user_score;
    comp_score_show.innerHTML = comp_score;
    resultbox.innerHTML = "<div> You Lost </div>";
    resultbox.style.backgroundColor="red";
};

const user_won = () => {
    console.log("user won");
    user_score_show.innerHTML = user_score;
    comp_score_show.innerHTML = comp_score;
    resultbox.innerHTML = "<div> You Won </div>";
    resultbox.style.backgroundColor="green";
};

// Event listeners
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        winner(userchoice);
    });
});
