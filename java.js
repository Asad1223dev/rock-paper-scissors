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

function getHumanChoice()
{
    const input=prompt("Pick Rock,Paper or Scissors");
    return input;
}

function scoreTracking()
{
let humanScore=0;
let computerScore=0;
{
    function playRound(humanChoice,computerChoice)
    {
    const cleanChoice=humanChoice.toLowerCase();
    const computerChoices=computerChoice.toLowerCase();
    {
        if(cleanChoice===computerChoices)
        {
            console.log("It's a tie!");
        }
        else if(
        (cleanChoice==="rock"&&computerChoices==="scissors")||
        (cleanChoice=="scissors"&&computerChoices=="paper")||
        (cleanChoice=="paper"&&computerChoices=="rock")
        )
        {
            console.log("You Win!");
            humanScore+=1;
        }
        else
        {
            console.log("You Lose!")
            computerScore+=1;
        }
    }
}
}
    for(let i=0;i<5;i++)
    {
        const pChoice=getComputerChoice();
        const sChoice=getHumanChoice();
        playRound(sChoice,pChoice);
    }
    console.log(`Final Score ->You: ${humanScore} , Computer: ${computerScore}`);
}
scoreTracking();
  