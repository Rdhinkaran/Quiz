const questions = [
{
question:"1. What is the primary role of a community pharmacy?",
options:[
"Manufacturing medicines",
"Dispensing medicines and providing patient counseling",
"Drug research",
"Importing medicines"
],
answer:1
},
{
question:"2. Community pharmacies are also known as:",
options:[
"Industrial pharmacies",
"Hospital laboratories",
"Retail or outpatient pharmacies",
"Manufacturing units"
],
answer:2
},
{
question:"3. Which professional must be present while selling medicines in a retail drug store?",
options:[
"Doctor",
"Nurse",
"Registered Pharmacist",
"Sales Executive"
],
answer:2
},
{
question:"4. Wholesale drug stores mainly supply medicines to:",
options:[
"Individual patients",
"Retailers and hospitals",
"Schools",
"Pharmacies only"
],
answer:1
},
{
question:"5. Which license is generally required for a wholesale drug store?",
options:[
"Form 20/21",
"Form 20B/21B",
"Form 25",
"Form 18"
],
answer:1
},
{
question:"6. Who is legally responsible for dispensing medicines in a retail pharmacy?",
options:[
"Store Keeper",
"Pharmacist-in-Charge",
"Accountant",
"Sales Staff"
],
answer:1
},
{
question:"7. Which of the following is NOT a type of retail drug store?",
options:[
"Independent Pharmacy",
"Chain Pharmacy",
"Government Wholesale Depot",
"Franchise Pharmacy"
],
answer:2
},
{
question:"8. Thermolabile drugs should be stored at:",
options:[
"25–30°C",
"15–20°C",
"2–8°C",
"Below 0°C"
],
answer:2
},
{
question:"9. FIFO stands for:",
options:[
"First In First Out",
"Fast In Fast Out",
"Final In First Out",
"First Item Final Order"
],
answer:0
},
{
question:"10. Narcotic and Schedule X drugs should be kept in a:",
options:[
"Open shelf",
"Refrigerator",
"Locked cabinet",
"Glass display rack"
],
answer:2
},
{
question:"11. Proprietary medicines are marketed under:",
options:[
"Generic name only",
"Pharmacopoeial name only",
"Manufacturer's brand name",
"Chemical formula only"
],
answer:2
},
{
question:"12. Before dispensing a proprietary product, the pharmacist should first:",
options:[
"Change the brand name",
"Verify the prescription",
"Open the medicine pack",
"Remove the label"
],
answer:1
},
{
question:"13. Which register records prescriptions for Schedule H, H1, and X drugs?",
options:[
"Attendance Register",
"Prescription Register",
"Temperature Log",
"Cash Register"
],
answer:1
},
{
question:"14. A Drug Inspector may inspect:",
options:[
"Only once every five years",
"Only government pharmacies",
"Premises, stock, and records at any time",
"Only wholesale stores"
],
answer:2
},
{
question:"15. Accurate record maintenance is important because it is:",
options:[
"Optional",
"Only for billing purposes",
"A legal requirement",
"Required only in hospitals"
],
answer:2
}
];

let current=0;
let score=0;
let timer;
let timeLeft=30;

const question=document.getElementById("question");
const options=document.getElementById("options");
const timerText=document.getElementById("timer");
const qNo=document.getElementById("questionNo");

loadQuestion();

function loadQuestion(){

clearInterval(timer);

timeLeft=30;
timerText.innerHTML=timeLeft;

qNo.innerHTML=`Question ${current+1} / ${questions.length}`;

question.innerHTML=questions[current].question;

options.innerHTML="";

questions[current].options.forEach((opt,index)=>{

const btn=document.createElement("button");

btn.innerHTML=opt;

btn.onclick=()=>checkAnswer(index);

options.appendChild(btn);

});

timer=setInterval(()=>{

timeLeft--;

timerText.innerHTML=timeLeft;

if(timeLeft==0){

clearInterval(timer);

showCorrect();

}

},1000);

}

function checkAnswer(index){

clearInterval(timer);

const btns=options.querySelectorAll("button");

if(index===questions[current].answer){

btns[index].classList.add("correct");

score++;

}else{

btns[index].classList.add("wrong");

btns[questions[current].answer].classList.add("correct");

}

disableButtons();

setTimeout(nextQuestion,2000);

}

function showCorrect(){

const btns=options.querySelectorAll("button");

btns[questions[current].answer].classList.add("correct");

disableButtons();

setTimeout(nextQuestion,2000);

}

function disableButtons(){

const btns=options.querySelectorAll("button");

btns.forEach(btn=>btn.disabled=true);

}

function nextQuestion(){

current++;

if(current<questions.length){

loadQuestion();

}else{

document.getElementById("quizBox").classList.add("hide");

document.getElementById("resultBox").classList.remove("hide");

document.getElementById("score").innerHTML=`${score} / ${questions.length}`;

}

}

document.getElementById("score").innerHTML=`${score} / ${questions.length}`;