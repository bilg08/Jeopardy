document.addEventListener("DOMContentLoaded",() => {
 	const gameContainer = document.getElementById("game");
	const score = document.getElementById("score");
	let gameScore=0;

const questions = [

	 {
	 	id:0,
	 	question:"Христофор Колумби хэзээ Америк тивд хүрсэн бэ?",
	 	answers:[1482,1492],
	 	correct:"1492",
	 	score:300,
	 	isClicked:false
	 },
	 {
	 	id:1,
	 	question:"Европоос Энэтхэг хүрэх далайн замыг анх нээсэн далайчин?",
	 	answers:["Магелан","Васко да Гамма"],
	 	correct:"Васко да Гамма",
	 	score:500,
	 	isClicked:false
	 },
	 {
	 	id:2,
	 	question:"Магна Карта хэмээх бичиг баримтыг хаана үйлдсэн бэ?",
	 	answers:["Англи","Итали"],
	 	correct:"Англи",
	 	score:200,
	 	isClicked:false

	 },
	 {
	 	id:3,
	 	question:"Солонгосын флот хэзээ Япончуудыг далайд бут ниргэсэн бэ?",
	 	answers:["13-р зуун","16-р зуун"],
	 	correct:"16-р зуун",
	 	score:500,
	 	isClicked:false

	 },
	 {
	 	id:4,
	 	question:"Монголын байлдан дагуулагчдын хүрээгүй улс аль нь вэ?",
	 	answers:["Польш","Грек"],
	 	correct:"Грек",
	 	score:200,
	 	isClicked:false

	 },
	 {
	 	id:5,
	 	question:"Ромын эзэн хаан Калигула өөрийн _________-г албан ёсоор Сенатор болгож байв.",
	 	answers:["Морь","Муур"],
	 	correct:"Морь",
	 	score:300,
	 	isClicked:false

	 },
	 {
	 	id:6,
	 	question:"Эдгээр улсуудын аль нь Дэлхийн Хоёрдугаар дайны үед Нацист Германы холбоотон байсан бэ?",
	 	answers:["Энэтхэг","Тайланд"],
	 	correct:"Тайланд",
	 	score:300,
	 	isClicked:false

	 },
	 {
	 	id:7,
	 	question:"Ямар амьтан нь үхэхээр эртний Египетчүүд хөмсгөө хусдаг байсан бэ?",
	 	answers:["Муур","Тэмээ"],
	 	correct:"Муур",
	 	score:100,
	 	isClicked:false

	 },
	 {
	 	id:8,
	 	question:"Аль нь Дэлхийн долоон гайхамшигт багтдаггүй вэ?",
	 	answers:["Атлантисийн арлууд","Грек дэхь Зевс бурханы хөшөө"],
	 	correct:"Атлантисийн арлууд",
	 	score:100,
	 	isClicked:false

	 },
	 {
	 	id:9,
	 	question:"Манай Эриний 30 онд Египетийг ямар гүрэн эзэлсэн бэ?",
	 	answers:["Грек","Ром"],
	 	correct:"Ром",
	 	score:200,
	 	isClicked:false

	 }


];
//cartaa HTML deeree gargah
function createQuestionCarts() {
   let data = "";
   questions.forEach((question) => {

   	data=
   	`
     <div class="cart" id="${question.id}">
   				<h1 class="score" id="${"score"+question.id}">${question.score}</h1>
   				<h2 class="questions" id="${"asuult"+question.id}">${question.question}</h2>
   				<div class="buttons">
 				  <button class="hariult1" id="${"hariult1+"+question.id}">${question.answers[0]}</button>
   				<button class="hariult2" id="${"hariult2+"+question.id}">${question.answers[1]}</button>
   				</div>

   	 </div>
    `;
    gameContainer.innerHTML+=data;

   });
   
}
createQuestionCarts();
const carts = document.getElementsByClassName("cart");
const cartsArray = Array.from(carts);

//cartaa erguulj asuultaa harah
for(let i=0;i<cartsArray.length;i++) {
	cartsArray[i].addEventListener("click",(e) => {
		const index = cartsArray.indexOf(e.target);
		const idOfCart = questions[index].id;


		const cartScore = document.getElementById("score"+idOfCart);
		const asuultId = document.getElementById("asuult"+idOfCart);
		const button1 = document.getElementById("hariult1+"+idOfCart);
		const button2 = document.getElementById("hariult2+"+idOfCart);

			cartScore.style.display="none";
			asuultId.style.display="block";
			button1.style.display="block";
			button2.style.display="block";

   

		button1.addEventListener("click",() => {
			
			 const buttonParentId = button1.parentElement.parentElement.getAttribute("id");
			 
			 
	       if(questions[buttonParentId].correct===button1.innerText&&questions[buttonParentId].isClicked===false) {
	          gameScore+=questions[buttonParentId].score;
	          score.innerText=gameScore;
	          button1.style.backgroundColor="green";
	          questions[buttonParentId].isClicked=true
	       }else{
	       		button1.style.backgroundColor="red";
	       		questions[buttonParentId].isClicked=true

	       }
	    

		});


		button2.addEventListener("click",() => {
			 const buttonParentId = button1.parentElement.parentElement.getAttribute("id");
 				
 			if(questions[buttonParentId].isClicked===false)

			{
				 if(questions[buttonParentId].correct===button2.innerText) {
	          gameScore+=questions[buttonParentId].score;
	          score.innerText=gameScore;
	          button2.style.backgroundColor="green";
	         
	       }else{
	       		button2.style.backgroundColor="red";  
	          questions[buttonParentId].isClicked=true
	       		
	         

	       }
	    }

		})

});



}




})

