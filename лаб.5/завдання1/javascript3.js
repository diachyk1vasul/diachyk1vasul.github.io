var a=['прапор1.jpg','прапор2.jpg','герб.jpg'];
var k=0;
function forward(){
var temp=document.getElementById('im');
k++;
if(k<a.length){
	temp.src=a[k];
    }
else{
		k=0;
		temp.src=a[k];
	}
}

function backwards(){
var temp=document.getElementById('im');
	k--;
if(k>=0){
	temp.src=a[k];
	}
else{
	k=2;
	temp.src=a[k];
	}
}	