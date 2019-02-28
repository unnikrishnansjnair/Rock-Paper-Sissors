let userScore=0;
let compScore=0;
let userScoreSpan=document.getElementById("user-score");
let compScoreSpan=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
var getGamePoint15=document.getElementById("15")
var getGamePoint20=document.getElementById("20")
var getGamePoint25=document.getElementById("25")
var getGamePoint=0;
var setGamePoint_div=document.getElementById("gamePoint");
//debugger            
//console.log(getGamePoint)
const result_p=document.querySelector(".result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const sisors_div=document.getElementById("s");

main();

function getInput(){ 
    getGamePoint=document.document.querySelector('input[name="gamept"]:checked').value;
    alert(getGamePoint);
    setGamePoint_div.innerHTML=("Game point is "+getGamePoint);
}

function getComputerChoice() {
    const choices=['r', 'p', 's'];
    const randomNumber=Math.floor(Math.random()*3)
    return choices[randomNumber];
}

function toWord(inp){
    if (inp === "r")
        return "Rock";
    if(inp === "p")
        return "Paper"
    return "Sissors"
}

function win(userchoise,compchoise,getGamePoint){
    userScore++;
    userScoreSpan.innerHTML=userScore;
    compScoreSpan.innerHTML=compScore;
    const smallusrword = "user".fontsize(3).sup();
    const smallcmpword = "comp".fontsize(3).sup();
    result_p.innerHTML=`${toWord(userchoise)}${smallusrword} beats ${toWord(compchoise)}${smallcmpword}. You WIN...!!`;
    document.getElementById(userchoise).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userchoise).classList.remove('green-glow')},300);
    if(userScore==getGamePoint)
    {
        result_p.innerHTML="Great.. You won the Match..!";
        alert("Great.. You won the Match by "+userScore+" : "+getGamePoint+" ..!");
        window.location.reload();
        userScore=0;compScore=0;
    }
    console.log("You win");
}

function lose(userchoise,compchoise,getGamePoint){
    compScore++;
    compScoreSpan.innerHTML=compScore;
    userScoreSpan.innerHTML=userScore;
    const smallusrword = "user".fontsize(3).sup();
    const smallcmpword = "comp".fontsize(3).sup();
    result_p.innerHTML=`${toWord(userchoise)}${smallusrword} lost ${toWord(compchoise)}${smallcmpword}. You LOSE...!!`;
    document.getElementById(userchoise).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userchoise).classList.remove('red-glow')},300);
    console.log("You Lost");
    if(compScore==getGamePoint)
    {
        result_p.innerHTML="Sorry.. Better luck next time..!";
        alert("Sorry.. You lost by "+userScore+" : "+getGamePoint+" . Better luck next time..!");
        window.location.reload();
        userScore=0;compScore=0;
    }
}

function draw(userchoise,compchoise){
    
    compScoreSpan.innerHTML=compScore;
    userScoreSpan.innerHTML=userScore;
    const smallusrword = "user".fontsize(3).sup();
    const smallcmpword = "comp".fontsize(3).sup();
    result_p.innerHTML=`${toWord(userchoise)}${smallusrword} equals ${toWord(compchoise)}${smallcmpword}. It's Draw...!!`;
    document.getElementById(userchoise).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(userchoise).classList.remove('grey-glow')},300);
    console.log("Draw");
    console.log(getGamePoint);
}

function game(userchoise,getGamePoint){
    const compchoise=getComputerChoice();
    switch(userchoise+compchoise){
        case "rs":
        case "pr":
        case "sp":
            win(userchoise,compchoise,getGamePoint);
            break;

        case "sr":
        case "rp":
        case "ps":
            lose(userchoise,compchoise,getGamePoint);
            break;

        default:
            draw(userchoise,compchoise,getGamePoint);
            break;
    }
}

/* $(document).ready(function(){
    $("input[type='button']").click(function(){
        var radioValue = $("input[name='gamept']:checked").val();
        if(radioValue){
            alert("Your are a - " + radioValue);
        }
    });
    
}); 
$(document).ready(function(){
    $('input[type=radio]').click(function(){
        alert(this.value);
    });
}); */

function showGamePoint(){
    document.getElementById('gamePoint').innerHTML = document.getElementById("text1").value;
} 

function main(){
   
    //showGamePoint();
    //setGamePoint_div="Your game point is "+getGamePoint;
    //getGamePoint=15;
    //console.log(document.querySelector('input[name="gamept"]:checked').value;);
    
    getGamePoint15.addEventListener('click', function(){
        userScore=0;compScore=0;
        userScoreSpan.innerHTML=userScore;
        compScoreSpan.innerHTML=compScore;
        getGamePoint=15;
        setGamePoint_div.innerHTML=("Game point is "+getGamePoint);
    })

    getGamePoint20.addEventListener('click', function(){
        userScore=0;compScore=0;
        userScoreSpan.innerHTML=userScore;
        compScoreSpan.innerHTML=compScore;
        getGamePoint=20;
        setGamePoint_div.innerHTML=("Game point is "+getGamePoint);
    })

    getGamePoint25.addEventListener('click', function(){
        userScore=0;compScore=0;
        userScoreSpan.innerHTML=userScore;
        compScoreSpan.innerHTML=compScore;
        getGamePoint=25;
        setGamePoint_div.innerHTML=("Game point is "+getGamePoint);
    })

    rock_div.addEventListener('click', function(){
        if(getGamePoint==0){
            alert("Please select game point.");
        }
        else{
            game("r",getGamePoint);
        }
    })
    paper_div.addEventListener('click', function(){if(getGamePoint==0){
            alert("Please select game point.");
        }
        else{
            game("p",getGamePoint);
        }
    })
    sisors_div.addEventListener('click', function(){if(getGamePoint==0){
            alert("Please select game point.");
        }
        else{
            game("s",getGamePoint);
        }
    })
}

