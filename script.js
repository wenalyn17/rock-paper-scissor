function start(){
    document.getElementById("start").style.visibility="hidden";
    document.getElementById("rock").style.visibility="visible";
    document.getElementById("paper").style.visibility="visible";
    document.getElementById("scissors").style.visibility="visible";
}

clicked
Hand=["<img src='rock.png' id='img1'>","<img src='paper.jpg' id='img1'>","<img src='scissors.jpg' id=img1'>" ];

clickedRightHand=["<img src='rock.png' id='img2'>","<img src='paper.jpg' id='img2'>","<img src='scissors.' id=img2'>" ];

function game(position){
    document.getElementById("img1").style.animation='shakeLeft 1s 5 ease-in-out';
    document.getElementById("img2").style.animation='shakeRight 1s 5 ease-in-out';
    
var random=Math.floor(Math.random()*3);
setTimeout(() => {
    document.getElementById("hand2").innerHTML=clickedRightHand 
    [random];
    document.getElementById("hand1").innerHTML=clickedHand 
    [position];
}, 5000);  

setTimeout(() => {
    if(random==position){
        alert("ITS A TIE !!");
        window.location.reload();

    }
    else if(position==0 && random==2) {
        alert("YOU ARE WINNER, GOOD JOB !!");
        window.location.reload();
    } 

    else if(position==1 && random==1) {
        alert("YOU GOOD, GOOD LUCK !!");
        window.location.reload();
    }
    else if(position==2 && random==1) {
        alert("YOU WIN, GOOD JOB !!");
        window.location.reload();
    }
    else{
        alert("COMP is WIN, TRY AGAIN !!")
        window.location.reload();
    }
}, 5000);

}