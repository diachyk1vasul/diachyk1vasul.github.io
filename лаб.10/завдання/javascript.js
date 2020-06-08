$( document ).ready(function(){
    $("#contains").click(function(){
        alert($.contains( document.getElementById("contTest"), $("b")[0] ));
        $("#mes1").show()
    })

    $("#data").click(function(){
        var t = $("#dataVal");
         $.data(t,"data", dataVal.value);
          alert($.data(t,"data"));
          $("#mes2").show()
    })

    $("#each").click(function(){
        var res = ""
        $.each([ 52, 97 , 12, 12, 32, 32, 54], function( index, value ) {
             res+=  index + " : " + value + "\n" ;
        });
        alert(res)
        $("#mes3").show()
    })

    $("#extend").click(function(){
        first = {val1 : "firstOb"}
        second = {val2 : "secondOb"}
        var res = {a:"a"};
        $.extend(res, first, second)
        alert(res.val1 + "  " + res.val2);
        $("#mes4").show()
    })

    $("#fnextend").click(function(){
        $.fn.extend({
            redButtons : function(){
                $("button").css("color", "red")
            }
        })
        
        $("").redButtons()
        $("#mes5").show()
    })


    $("#globalEval").click(function(){
        $.globalEval("var globalVar = \"this is global variable\"")
        $("#mes6").show()
        alert(globalVar)
    })

    $("#grep").click(function(){
        var arr = [2, 4 , 54, 34 , 23 , 4 , 5]
        alert($.grep(arr, function(a){
            return (a < 10);
        }, true))
        $("#mes7").show()
    })

    $("#inArray").click(function(){
        var arr = [2, 4 , 54, 34 , 23 , 4 , 5]
        alert("number 34 is on position " + $.inArray(34, arr) + "  in array")
        $("#mes8").show()
    })

    $("#isArray").click(function(){
        var arr = [2, 4 , 54, 34 , 23 , 4 , 5]
        if ($.isArray(arr)) {alert("Отримане значення є масивом")}
            else alert("Отримане значення не є масивом")
        $("#mes9").show()
    })

    $("#isEmptyObject").click(function(){
        var ob = {a : ""}
        if ($.isEmptyObject(ob)) {alert("Отримане значення є порожнім масивом")}
            else alert("Отримане значення не є порожнім масивом")
        $("#mes10").show()
    })

    $("#isNumeric").click(function(){
        var ob = {a : ""}
        if ($.isNumeric(ob)) {alert("Отримане значення є числом")}
            else alert("Отримане значення не є числом")
        $("#mes11").show()
    })

    $("#isPlainObject").click(function(){
        var ob = {a : ""}
        if ($.isPlainObject(ob)) {alert("Отримане значення є простим числом")}
            else alert("Отримане значення не є простим числом")
        $("#mes12").show()
    })

    $("#makeArray").click(function(){
         elems = document.getElementsByTagName( "li" );
         arr = $.makeArray( elems );
         arr.reverse();
        $( arr ).appendTo( $("#ul") );
        $("#mes13").show()
    })

    $("#marge").click(function(){
         a = [1 , 2 , 3 , 4];
         b = [-1 , -2 , -3 , -4];
        $("#mes14").show()
        alert($.merge(a,b))
    })

    $("#noop").click(function(){
        $("#mes15").show()
        $.noop()
    })

    $("#now").click(function(){
        $("#mes16").show()
        alert("Current time is:" + $.now())
    })

    $("#parseHTML").click(function(){
        $("#mes17").show()
        firstLine = "<li>List element</li>"
        secondLine = "<li>List element</li>"
        thirdtLine = "<li>List element</li>"
        $("#parseH").append(firstLine,secondLine,thirdtLine)
    })

    $("#parseXML").click(function(){
        $("#mes18").show()
        xmlText = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><note><body>Simple xml code</body></note> "
        xml = $.parseXML(xmlText)
        $("#parseX").append($(xml).find("body"))
    })

    $("#trim").click(function(){
        $("#mes19").show()
        temp = trimText.value;
        trimText.value = $.trim(temp)
    })

    $("#type").click(function(){
        $("#mes20").show()
        typeText.value = "" + $.type(20) + "  " + $.type({a:2}) + "  " + $.type("s") + "  " + $.type(function function_name(argument) {
        }) + "  " + $.type([1,2,3]) + "  "
    })

});