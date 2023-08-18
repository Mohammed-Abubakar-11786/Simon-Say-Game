let userSeq = [];
let gameSeq = [];
let colrs = ["red","yellow","green","blue"];
let scrul = document.querySelector("#ul");

let started = false;
let level = 0;
initiat();
function initiat(){
    document.addEventListener("keypress",function(event){
        if(started==false){
            console.log("Game Started");
            started =true;
            levelup();
        }
    });
}

let h2 = document.querySelector("h2");

function flashClr(clr){
    clr.classList.add("flash");
    setTimeout(() => {
        clr.classList.remove("flash");
    }, 250);
}
let cnt = 0;
let scr  = 0;
let max = 0;
function chekAns(indx){
    if(userSeq[indx]===gameSeq[indx])
    {
        if(userSeq.length==gameSeq.length)
        setTimeout(function(){
            levelup();
        },1000);
    }else{
        
        if(cnt<=5){
            if(level>max){
                max=level;
            }
            
        h2.innerHTML = "Wrong Sequence! <b>Your Score was "+level+"<b> <br>Press any key to try again";
            
        let li = document.createElement("h4");
        
        li.innerHTML = `Your Score ${level}`;
        scrul.appendChild(li);
        document.querySelector("body").style.backgroundColor= "red";
       
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        },150);
        cnt++;

        resetTo();
        }else if(cnt==6){
           
            h2.innerHTML = "Game Over! Refresh the page to continue playing";
            let li = document.createElement("h4");
            li.innerHTML = `Your Max Score ${max}`;
            scrul.append(li);
            cnt++;
        }
        
        
    }
}
function btnpress(){
    let btn = this;
    flashClr(btn);
    
    let color = btn.getAttribute("id");
    userSeq.push(color);

    chekAns(userSeq.length-1);
}

function levelup(){
    userSeq = [];
    
    level++;
    h2.innerText = `Yoy are Currently at Level ${level}`;

    let randIndex = Math.floor(Math.random() * 4); // Ensure index 0 to 3
    let rndclr = colrs[randIndex];
    let randclr = document.querySelector(`.${rndclr}`);
    flashClr(randclr);
    gameSeq.push(rndclr);
    

    console.log(gameSeq);
    
        let btns = document.querySelectorAll(".btns");
        for (btn of btns){
            
            btn.addEventListener("click",btnpress);
        }      
    
    
    

   
}
function resetTo(){
    started = false;
        level = 0;
        gameSeq = [];
        userSeq = [];
        
        initiat();
}


