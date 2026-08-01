/* ==========================================
   PREMIUM GIRLFRIEND WEBSITE
   script.js
   PART 1/2
========================================== */

const PASSWORD = "28/07/26";

/* --------------------------
Password
-------------------------- */

function checkPassword(){

const input=document.getElementById("password");

if(!input) return;

const value=input.value.trim();

if(value===PASSWORD){

fadeTo("home.html");

}else{

const error=document.getElementById("error");

if(error){

error.innerHTML="❤️ Wrong date. Try our special day.";

}

input.classList.add("shake");

setTimeout(()=>{

input.classList.remove("shake");

},500);

}

}

/* --------------------------
Fade Navigation
-------------------------- */

function fadeTo(page){

document.body.style.opacity="0";

document.body.style.transition="opacity .5s ease";

setTimeout(()=>{

window.location.href=page;

},500);

}

/* --------------------------
Typewriter
-------------------------- */

function startTyping(text,id,speed=35){

const target=document.getElementById(id);

if(!target) return;

target.innerHTML="";

let index=0;

function write(){

if(index<text.length){

target.innerHTML+=text.charAt(index);

index++;

setTimeout(write,speed);

}

}

write();

}

/* --------------------------
Floating Particles
-------------------------- */

function createParticles(){

const container=document.querySelector(".particles");

if(!container) return;

for(let i=0;i<40;i++){

const dot=document.createElement("span");

dot.className="particle";

dot.style.left=Math.random()*100+"%";

dot.style.animationDelay=Math.random()*8+"s";

dot.style.animationDuration=(6+Math.random()*8)+"s";

dot.style.opacity=Math.random();

container.appendChild(dot);

}

}

/* --------------------------
Reveal Animation
-------------------------- */

function reveal(){

const items=document.querySelectorAll(".reveal");

items.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-80){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

/* --------------------------
Button Hover Glow
-------------------------- */

document.addEventListener("DOMContentLoaded",()=>{

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});

});

/* --------------------------
Page Load Animation
-------------------------- */

window.addEventListener("load",()=>{

document.body.style.opacity="1";

createParticles();

reveal();

});

/* ==========================================
   PREMIUM GIRLFRIEND WEBSITE
   script.js
   PART 2/2
========================================== */

/* --------------------------
Relationship Timer
-------------------------- */

function startRelationshipTimer(){

const timer=document.getElementById("timer");

if(!timer) return;

const start=new Date("2026-07-28T00:00:00");

function update(){

const now=new Date();

let diff=now-start;

if(diff<0){

timer.innerHTML="Our journey begins soon ❤️";

return;

}

const days=Math.floor(diff/86400000);

diff%=86400000;

const hours=Math.floor(diff/3600000);

diff%=3600000;

const minutes=Math.floor(diff/60000);

diff%=60000;

const seconds=Math.floor(diff/1000);

timer.innerHTML=`
<div>${days} Days</div>
<div>${hours} Hours</div>
<div>${minutes} Minutes</div>
<div>${seconds} Seconds</div>
`;

}

update();

setInterval(update,1000);

}

/* --------------------------
Card Animation
-------------------------- */

function animateCards(){

const cards=document.querySelectorAll(".reason-card");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".6s ease";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*60);

});

}

/* --------------------------
Heart Burst
-------------------------- */

function heartBurst(){

const container=document.body;

for(let i=0;i<25;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

heart.style.transition="transform 5s linear, opacity 5s linear";

container.appendChild(heart);

setTimeout(()=>{

heart.style.transform=
`translateY(-120vh) rotate(${Math.random()*720}deg)`;

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},5200);

}

}

/* --------------------------
Confetti
-------------------------- */

function launchConfetti(){

for(let i=0;i<80;i++){

const piece=document.createElement("div");

piece.style.position="fixed";

piece.style.width="6px";

piece.style.height="12px";

piece.style.left=Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.background=
Math.random()>0.5?"#d4af37":"#ffffff";

piece.style.pointerEvents="none";

piece.style.transition="transform 5s linear";

piece.style.zIndex="9998";

document.body.appendChild(piece);

setTimeout(()=>{

piece.style.transform=
`translateY(120vh) rotate(${Math.random()*720}deg)`;

},100);

setTimeout(()=>{

piece.remove();

},5200);

}

}

/* --------------------------
Replay
-------------------------- */

function replayStory(){

fadeTo("index.html");

}

/* --------------------------
Keyboard Enter
-------------------------- */

document.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

const input=document.getElementById("password");

if(input){

checkPassword();

}

}

});

/* --------------------------
Auto Init
-------------------------- */

document.addEventListener("DOMContentLoaded",()=>{

startRelationshipTimer();

animateCards();

const final=document.querySelector(".final-card");

if(final){

setTimeout(()=>{

heartBurst();

launchConfetti();

},1000);

}

});