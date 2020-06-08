function f(){
    var length=document.getElementById('length');
    var width=document.getElementById('width');
    var perimetr = 2 * (parseInt(length.value) + parseInt(width.value) );
    var square = parseInt(length.value) * parseInt(width.value);
    var diagonal_length=Math.sqrt(parseInt(length.value)*parseInt(length.value)+ parseInt(width.value)* parseInt(width.value));
    $("#perimetr_").text(perimetr);
    $("#square_").text(square);
    $("#diagonal_length_").text(diagonal_length);
  }