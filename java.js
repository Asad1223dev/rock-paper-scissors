let humanScore =0;
let computerScore =0;
const rockIcon=document.querySelector("#rock");
const paperIcon=document.querySelector("#paper");
const scissorsIcon=document.querySelector("#scissors");
const resultDiv=document.querySelector("#result");
const liveScore=document.querySelector("#live-score");
const resetButton=document.querySelector("#reset");

rockIcon.addEventListener("click",function(){
    const computerChoice=getComputerChoice();
    const roundResult=playRound("Rock",computerChoice);
    resultDiv.textContent=roundResult;
    liveScore.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    if(humanScore===5)
    {
        resultDiv.textContent="Congratulations! You won the game!";
        rockIcon.disabled = true;
        paperIcon.disabled = true;
        scissorsIcon.disabled = true;
    }
    else if(computerScore===5)
    {
        resultDiv.textContent="Alas! Computer won the game!";
        rockIcon.disabled = true;
        scissorsIcon.disabled = true;
        paperIcon.disabled = true;
    }
});

paperIcon.addEventListener("click",function(){
    const computerChoice=getComputerChoice();
    const roundResult=playRound("Paper",computerChoice);
    resultDiv.textContent=roundResult;
    liveScore.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
     if(humanScore===5)
    {
        resultDiv.textContent="You won the game!";
        paperIcon.disabled = true;
        scissorsIcon.disabled = true;
        rockIcon.disabled = true;
    }
    else if(computerScore===5)
    {
        resultDiv.textContent="Computer won the game!";
        paperIcon.disabled = true;
        scissorsIcon.disabled = true;
        rockIcon.disabled = true;
    }
});

scissorsIcon.addEventListener("click",function(){
    const computerChoice=getComputerChoice();
    const roundResult=playRound("Scissors",computerChoice);
    resultDiv.textContent=roundResult;
    liveScore.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
     if(humanScore===5)
    {
        resultDiv.textContent="You won the game!";
        scissorsIcon.disabled = true;
        rockIcon.disabled = true;
        paperIcon.disabled = true;
    }
    else if(computerScore===5)
    {
        resultDiv.textContent="Computer won the game!";
        scissorsIcon.disabled = true;
        rockIcon.disabled = true;
        paperIcon.disabled = true;
    }
});

resetButton.addEventListener("click",function(){
    humanScore=0;
    computerScore=0;
    resultDiv.textContent="Make your move!";
    liveScore.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    rockIcon.disabled = false;
    paperIcon.disabled = false;
    scissorsIcon.disabled = false;
})

function getComputerChoice()
{
    const num=Math.floor(Math.random()*3);
    if(num===0)
    {
        return "Rock";
    }
    if(num===1)
    {
        return "Paper";
    }
    if(num===2)
    {
        return "Scissors";
    }
}

 function playRound(humanChoice,computerChoice)
    {
    const cleanChoice=humanChoice.toLowerCase();
    const computerChoices=computerChoice.toLowerCase();
    {
        if(cleanChoice===computerChoices)
        {
            console.log("It's a tie!");
            return "It's a tie!";
        }
        else if(
        (cleanChoice==="rock"&&computerChoices==="scissors")||
        (cleanChoice==="scissors"&&computerChoices==="paper")||
        (cleanChoice==="paper"&&computerChoices==="rock")
        )
        {
            console.log("You Win!");
            humanScore+=1;
            return "You Win!";
        }
        else
        {
            console.log("You Lose!")
            computerScore+=1;
            return "You Lose!";
        }
    }
}
  