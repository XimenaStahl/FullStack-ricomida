$(document).ready(function() {

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente...");
    });

    $("h4").on("dblclick", function() {
        $(this).addClass("colorrojo");
    });

    $(".card-title").click(function() {
        $(".card-text").toggle();
    });

})