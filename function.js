(function(){
    $(".send_form").click(function() {

        var nombre = $(".nombre").val();
            email = $(".email").val();
            validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            mensaje = $(".mensaje").val();

        if (nombre == "") {
            $(".nombre").focus();
            return false;
        }else if(email == "" || !validacion_email.test(email)){
            $(".email").focus();
            return false;
        }else if(mensaje == ""){
            $(".mensaje").focus();
            return false;
        }else{
            // Si todo paso, aqui ira la llamada AJAX
            $('.ajaxgif').removeClass('hide');
            var datos = 'nombre='+ nombre + '&email=' + email + '&mensaje=' + mensaje;
            $.ajax({
                type: "POST",
                url: "send_contacto.php",
                data: datos,
                success: function() {
                    setTimeout(function() {
                        $('.ajaxgif').hide();
                    }, 2000);
                    setTimeout(function() {
                        $('.msg').text('Mensaje enviado!').addClass('msg_ok').animate({ 'right' : '680px' }, 300);
                        setTimeout(function() {
                            $('.msg').text('').removeClass('msg_ok').animate({ 'right' : '650px' }, 300);
                            $(".nombre").val("");
                            $(".email").val("");
                            $(".mensaje").val("");
                        }, 2500);
                    }, 3000);
                },
                error: function() {
                    setTimeout(function() {
                        $('.ajaxgif').hide();
                    }, 2000);
                    setTimeout(function() {
                        $('.msg').text('Hubo un error!').addClass('msg_error').animate({ 'right' : '680px' }, 300);
                        setTimeout(function() {
                            $('.msg').text('').removeClass('msg_error').animate({ 'right' : '650px' }, 300);
                        }, 2500);
                    }, 3000);
                }
            });
            return false;
        }

    });
})();

