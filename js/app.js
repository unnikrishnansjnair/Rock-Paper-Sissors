let userScore=0;
let compScore=0;
let userScoreSpan=document.getElementById("user-score");
let compScoreSpan=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const sisors_div=document.getElementById("s");

main();

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

function win(userchoise,compchoise){
    userScore++;
    userScoreSpan.innerHTML=userScore;
    const smallusrword = "user".fontsize(3).sup();
    const smallcmpword = "comp".fontsize(3).sup();
    result_p.innerHTML=`${toWord(userchoise)}${smallusrword} beats ${toWord(compchoise)}${smallcmpword}. You WIN...!!`;
    document.getElementById(userchoise).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userchoise).classList.remove('green-glow')},300);
    console.log("You win");
}

function lose(userchoise,compchoise){
    compScore++;
    compScoreSpan.innerHTML=compScore;
    const smallusrword = "user".fontsize(3).sup();
    const smallcmpword = "comp".fontsize(3).sup();
    result_p.innerHTML=`${toWord(userchoise)}${smallusrword} lost ${toWord(compchoise)}${smallcmpword}. You LOSE...!!`;
    document.getElementById(userchoise).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userchoise).classList.remove('red-glow')},300);
    console.log("You Lost");
}

function draw(userchoise,compchoise){
    const smallusrword = "user".fontsize(3).sup();
    const smallcmpword = "comp".fontsize(3).sup();
    result_p.innerHTML=`${toWord(userchoise)}${smallusrword} equals ${toWord(compchoise)}${smallcmpword}. It's Draw...!!`;
    document.getElementById(userchoise).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(userchoise).classList.remove('grey-glow')},300);
    console.log("Draw");
}

function game(userchoise){
    const compchoise=getComputerChoice();
    switch(userchoise+compchoise){
        case "rs":
        case "pr":
        case "sp":
            win(userchoise,compchoise);
            break;

        case "sr":
        case "rp":
        case "ps":
            lose(userchoise,compchoise);
            break;

        default:
            draw(userchoise,compchoise);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    sisors_div.addEventListener('click', function(){
        game("s");
    })
}
