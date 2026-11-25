# Rock Paper Scissors

An interactive **Rock Paper Scissors** web game built with HTML, CSS, and JavaScript.

## Features
- **Interactive UI:** Play directly in the browser using **Rock**, **Paper**, and **Scissors** buttons.
- **Live Score & Feedback:** Tracks `humanScore` and `computerScore` in real time and displays round outcomes and status messages.
- **First to 5 Wins:** Automatically detects when a player or the computer reaches 5 points, announces the overall winner, and disables choice buttons.
- **Reset / Play Again:** Resets scores to `0`, clears/updates status text, and re-enables gameplay controls.
- **Classic Parchment Theme:** Styled with external CSS (`style.css`) and Google Fonts.

## How It Works
- `getComputerChoice()` randomly selects `"Rock"`, `"Paper"`, or `"Scissors"` for the computer.
- Clicking a choice button triggers round evaluation, compares the player's selection against the computer's choice, and updates the live score and result text.
- A winner check locks the choice buttons once a player reaches `5` points and displays the final match result.
- Clicking **Play Again** resets `humanScore` and `computerScore` back to `0`, updates the UI text, and unlocks the choice buttons.

## How to Run and Play
1. Open `index.html` in a web browser (linked with `style.css` and `java.js`).
2. Click **Rock**, **Paper**, or **Scissors** to play rounds against the computer.
3. First to reach **5 points** wins the match.
4. Click **Play Again** anytime to reset the score and start a new match.

## Future Improvements
- Add sound effects or subtle animations for wins, losses, and resets.
- Add keyboard support (e.g., `R`, `P`, `S` keys) for faster play.
- Track win streaks or total matches played.