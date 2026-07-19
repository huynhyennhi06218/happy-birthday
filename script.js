// =========================
// Birthday Website Script
// =========================

// Pages
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

// Buttons
const openGift = document.getElementById("openGift");
const nextBtn = document.getElementById("nextBtn");
const lastBtn = document.getElementById("lastBtn");
const musicBtn = document.getElementById("musicBtn");

// Audio
const music = document.getElementById("music");

// Typing
const typing = document.getElementById("typing");

// Gift
const gift = document.querySelector(".gift-box");

// =========================
// Typing Text
// =========================

const message = `🎂 Happy Birthday 🎂

Sinh nhật vui vẻ nha!

Chúc em tuổi mới thành công,
sẽ luôn vui vẻ và hạnh phúc,
càng ngày càng phát triển bản thân.

À...
nhớ phát triển cả chiều cao nữa nha. 😂

Đừng có ỷ sức quá,
ngủ sớm,
ăn uống đầy đủ đấy.

Mong em sẽ luôn gặp nhiều điều tốt đẹp,
mọi điều mong muốn đều thành hiện thực.

Hy vọng hôm nay sẽ là
một ngày sinh nhật thật đáng nhớ.

❤️ Happy Birthday ❤️`;

function typeWriter(){

typing.innerHTML="";

let i=0;

function type(){

if(i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

setTimeout(type,40);

}

}

type();

}

// =========================
// Open Gift
// =========================

openGift.onclick=()=>{

gift.classList.add("open");

setTimeout(()=>{

page1.classList.remove("active");

page2.classList.add("active");

typeWriter();

startFireworks();

},1000);

}

// =========================
// Next
// =========================

nextBtn.onclick=()=>{

page2.classList.remove("active");

page3.classList.add("active");

}

// =========================
// Last
// =========================

lastBtn.onclick=()=>{

page3.classList.remove("active");

page4.classList.add("active");

}

// =========================
// Music
// =========================

let playing=false;

musicBtn.onclick=()=>{

if(!playing){

music.play();

musicBtn.innerHTML="⏸️";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="🎵";

playing=false;

}

}

// =========================
// Hearts
// =========================

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,350);

// =========================
// Flowers
// =========================

function createFlower(){

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML="🌸";

flower.style.left=Math.random()*100+"vw";

flower.style.fontSize=(18+Math.random()*18)+"px";

flower.style.animationDuration=(5+Math.random()*4)+"s";

document.getElementById("flowers").appendChild(flower);

setTimeout(()=>{

flower.remove();

},9000);

}

setInterval(createFlower,700);

// =========================
// Stars
// =========================

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*2+"s";

document.getElementById("stars").appendChild(star);

}

// =========================
// Fireworks
// =========================

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let particles=[];

function random(min,max){

return Math.random()*(max-min)+min;

}

function explode(x,y){

for(let i=0;i<80;i++){

particles.push({

x,

y,

dx:random(-5,5),

dy:random(-5,5),

life:100,

size:random(2,5)

});

}

}

function update(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x+=p.dx;

p.y+=p.dy;

p.dy+=0.05;

p.life--;

ctx.beginPath();

ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

ctx.fill();

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(update);

}

update();

function startFireworks(){

setInterval(()=>{

explode(

random(150,canvas.width-150),

random(80,canvas.height/2)

);

},800);

}

// =========================
// Resize
// =========================

window.onresize=()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

};
