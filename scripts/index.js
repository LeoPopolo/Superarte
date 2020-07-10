
window.onload = asignarEventos;

function asignarEventos() {
    
    $("#menuGaleria").hide();
    $("#menuNosotros").hide();
    $("#menuModalidades").hide();
    $("#menuStaff").hide();
    $("#menuSedes").hide();
    
    /*$("#btnNosotros").click(function(){
        mostrarNosotros();
    });*/
    
    $("#ClickDevocional").click(function(){
        mostrarDevocional();
    });
    
    $("#ClickTecnica").click(function(){
        mostrarTecnica();
    });

    $("#ClickMinisterial").click(function(){
        mostrarMinisterial();
    });
    
    $("#fotoSA").click(function(){
        mostrarNovedades();
    });

    $("#btnModalidades").click(function(){
        cerrarNav();
        mostrarModalidades();
    });
    
    $("#btnGaleria").click(function(){
        cerrarNav();
        mostrarGaleria();
    });

    $("#btnStaff").click(function(){
        cerrarNav();
        mostrarStaff();
    });
    
    $("#btnSedes").click(function(){
        cerrarNav();
        mostrarSedes();
    });

    $("#btnNosotros").click(function(){
        cerrarNav();
        mostrarNosotros();
    });

    $("#btnCloseNav").click(function(){
        cerrarNav();
    });

    $("#loadPage").delay(1000).fadeOut("slow");    

    window.sr = ScrollReveal();
    
    sr.reveal('header',{
        duration: 2000,
        origin: 'left',
        distance: '300px'
    });

    $("#mostrarIconos").click(function(){
        $("#mostrarIconos").hide();
        $("#ulNav").slideToggle();
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function cerrarNav(){
    $("#ulNav").slideUp("fast");
    $("#mostrarIconos").show();
}

function mostrarNovedades(){
    
    window.location.replace(
        "/index.html"
    );
}

function mostrarModalidades(){

    var cuadro1 = document.getElementById("ClickDevocional");
    var cuadro2 = document.getElementById("ClickTecnica");
    var cuadro3 = document.getElementById("ClickMinisterial");

    cuadro1.style.borderColor = "black";
    cuadro2.style.borderColor = "black";
    cuadro3.style.borderColor = "black";

    $("#menuNosotros").hide();
    $("#menuGaleria").hide();
    $("#menuStaff").hide();
    $("#menuSedes").hide();

    $("#menuModalidades").fadeIn("slow");

    $("#divDevocional").hide();
    $("#divTecnica").hide();
    $("#divMinisterial").hide();

    $("#divLogosFormacion").fadeIn("slow");

}

function mostrarDevocional(){
    $("#divDevocional").fadeIn("slow");
    $("#divTecnica").hide();
    $("#divMinisterial").hide();

    var cuadro1 = document.getElementById("ClickDevocional");
    var cuadro2 = document.getElementById("ClickTecnica");
    var cuadro3 = document.getElementById("ClickMinisterial");

    cuadro1.style.borderColor = "#00b8e4";
    cuadro2.style.borderColor = "black";
    cuadro3.style.borderColor = "black";

}

function mostrarTecnica(){
    $("#divDevocional").hide();
    $("#divTecnica").fadeIn("slow");
    $("#divMinisterial").hide();

    var cuadro1 = document.getElementById("ClickDevocional");
    var cuadro2 = document.getElementById("ClickTecnica");
    var cuadro3 = document.getElementById("ClickMinisterial");

    cuadro1.style.borderColor = "black";
    cuadro2.style.borderColor = "#00b8e4";
    cuadro3.style.borderColor = "black";
}

function mostrarMinisterial(){
    $("#divDevocional").hide();
    $("#divTecnica").hide();
    $("#divMinisterial").fadeIn("slow");

    var cuadro1 = document.getElementById("ClickDevocional");
    var cuadro2 = document.getElementById("ClickTecnica");
    var cuadro3 = document.getElementById("ClickMinisterial");

    cuadro1.style.borderColor = "black";
    cuadro2.style.borderColor = "black";
    cuadro3.style.borderColor = "#00b8e4";
    
}

function mostrarGaleria(){

    
    $("#menuNosotros").hide();
    $("#menuModalidades").hide();
    $("#menuStaff").hide();
    $("#menuSedes").hide();
    $("#menuGaleria").fadeIn("slow");

}

function mostrarNosotros(){

    
    $("#menuNosotros").fadeIn("slow");
    $("#menuModalidades").hide();
    $("#menuGaleria").hide();
    $("#menuStaff").hide();
    $("#menuSedes").hide();

}

function mostrarStaff(){

    $("#menuNosotros").hide();
    $("#menuModalidades").hide();
    $("#menuGaleria").hide();
    $("#menuStaff").fadeIn("slow");
    $("#menuSedes").hide();

}

function mostrarSedes(){

    $("#menuNosotros").hide();
    $("#menuModalidades").hide();
    $("#menuGaleria").hide();
    $("#menuStaff").hide();
    $("#menuSedes").fadeIn("slow");

}

//codigo Emi

var countForm = 0;

function inyectarForm() {
    //creo el formulario colocandole un id con countForm.
    
    $("#btnIngresar").fadeOut();   

    var form = `<form id ="form_${countForm}">
                    <div id="divForm">
                        <p>
                            Ingrese sus datos:
                        </p>

                        <div id="cajasDatos" class="container">
                            <input class="col-xs-3" placeholder="Usuario" type="email" id="txtUsuario" autocomplete="off"
                                pattern="[a-zA-Z]{3,15}" required class="form-control">
                            <br>
                            <br>
                            <input class="col-xs-3" placeholder="Contraseña" type="password" id="txtContraseña" autocomplete="off"
                                pattern="[a-zA-Z]{3,15}" required class="form-control">
                            <br>
                        </div>

                        <div class="container" id="divBotones">
                            <button type="button" class="btn btn-outline-light" id="btnIniciar"
                                onclick="alert('La pagina todavia no esta funcionando!');">Iniciar</button>
                            <button type="button" class="btn btn-outline-light" id="btnCancelar"
                                onclick="ocultar();">Cancelar</button>
                        </div>
                    </div>
                </form>`
    //Le resto -1 para borrar el formulario que se inyecto anteriormente.
    $(`#form_${countForm-1}`).remove();
    //inyecto el formulario actual en el html.
    $('#frmIngreso').append(form).hide().show('slow');
    //sumo el contador.
    countForm++;
}

function ocultar() {
    console.log('entro',`#form_${countForm}`)
    $(`#form_${countForm-1}`).fadeOut()
    $("#btnIngresar").fadeIn();
}