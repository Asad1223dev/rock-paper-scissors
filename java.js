let num,num1,num2,num3,num4;
num2=0;
num3=1;
num4=2;
function getComputerChoice()
{
    num= Math.floor(Math.random()*3);
    {
        if(num===num2)
        {
            return("Rock")
        }
        else if(num===num3)
        {
            return("Scissors")
        }
        else if(num==num4)
        {
            return("Paper")
        }
    }
}
console.log(getComputerChoice());

function getHumanChoice()
{
    num1=prompt("Enter Your Choice Please!");
    return num1;
}
console.log(getHumanChoice());
{
    if(num1=="Rock")
    {
        num1=0;
    }
    else if(num1=="Scissors")
    {
        num1=1;
    }
    else if(num1=="Paper")
    {
        num1=2;
    }
}
{
    if(num1==num2||num1==num3||num1==num4)
    {
        console.log("Draw");
    }
}