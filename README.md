# Rock Paper Scissors

A console-based **Rock Paper Scissors** game built with JavaScript.

## How It Works

- `getComputerChoice()` uses `Math.random()` and `Math.floor()` to randomly return `"Rock"`, `"Paper"`, or `"Scissors"`.
- `getHumanChoice()` prompts the user for input (`"Pick Rock,Paper or Scissors"`) and returns the entered value.
- `scoreTracking()` initializes `humanScore` and `computerScore` at `0`, defines `playRound(humanChoice, computerChoice)` inside its scope, runs a 5-round `for` loop (`i = 0` to `4`), and logs the final score at the end.
- Inside `playRound()`, both choices are converted to lowercase (`.toLowerCase()`) before checking ties, winning combinations, or losses, updating the score accordingly.

## How to Run and Play

1. Open `index.html` in a browser with `java.js` linked.
2. Open the browser **Console** (`F12` or `Ctrl + Shift + I` -> **Console**).
3. Enter `Rock`, `Paper`, or `Scissors` in each prompt across 5 rounds.
4. View round outcomes and `Final Score ->You: X , Computer: Y` in the console.

## Future Improvements

- Add overall match winner/loser logic based on `humanScore` and `computerScore`.
- Handle `null` (when prompt is canceled) or unexpected inputs safely.
- Build a webpage UI using HTML/CSS and DOM manipulation.