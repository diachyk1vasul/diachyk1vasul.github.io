
    var number1=Math.floor(Math.random()*9);
	var number2=Math.floor(Math.random()*9);
	var correct_result=0;
	var amount=1;
function next_task(){
	document.getElementById('result').value="";
	document.getElementById('result_check').innerHTML="";
    if(amount<=9){
	number1=Math.floor(Math.random()*9);
	
	number2=Math.floor(Math.random()*9);
	document.getElementById('exprescions').innerHTML=number1+"*"+number2;
	amount++;
    }
    else{
    	document.getElementById('button_chek').value="Тест завершено";
    	document.getElementById('check').innerHTML="Вітаємо! Ви завершили тест! Ваш результат "+10*correct_result+"%("+correct_result+"/10)";
    }
 }
$(document).ready(function(){
	$("#exprescions").text(number1+"*"+number2);
});
function checking(){
	if(number1*number2==parseInt(document.getElementById('result').value)){
     correct_result++;
     document.getElementById('result_check').innerHTML="Правильно!";
	}
	else{
		 document.getElementById('result_check').innerHTML="Помилка! Правильна відповідь \""+number1*number2+"\"";
	}
}