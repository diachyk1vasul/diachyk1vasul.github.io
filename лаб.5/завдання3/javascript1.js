var k1=0;
var k2=0;
$ (document).ready(function() { 

$("#Fruits").bind("click", function(){
if(k1==0){
$("#text1").show();	
k1=1;
}
else{
$("#text1").hide();	
k1=0;
}
});


$("#Vegetables").bind("click", function(){
if(k2==0){
$("#text2").show();	
k2=1;
}
else{
$("#text2").hide();	
k2=0;
}
});

})