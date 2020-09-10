$(document).ready(function(){
    var cambio = $(".parrafito");


    cambio.mouseenter(function(){
        $("#cambiocolor").fadeto("fast",0.5);
        //$("#cambiocolor").css("background-color","likeblue");
    });
})

$(document).ready(function(){
    $("#boton").click(function(){
        $("#titulo").text("siiii funciona");
    });
    $("#titulo").mouseenter(function(){
        $("#titulo").text("jiji");
    });
});
var escondido = false;
$("#boton").click(function(){
    if (escondido == true) {
        escondido = false;
        $("h2").show();
    } else {
        escondido = true;
        $("h2").hide();
    }
})
