const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre =
        document.getElementById("nombre").value.trim();

    const apellido =
        document.getElementById("apellido").value.trim();

    const asistencia =
        document.getElementById("asistencia").value;

    const personas =
        document.getElementById("personas").value;

    const acompanantes =
        document.getElementById("acompanantes").value.trim();

    const mensajePersonal =
        document.getElementById("mensaje").value.trim();


    const numeroWhatsApp = "543813013387";


    let mensaje =
        "Hola Susana 💗\n\n" +
        "Quiero confirmar mi asistencia a tu cumpleaños 🎂\n\n" +

        "👤 Nombre: " +
        nombre + " " +
        apellido + "\n" +

        "💗 ¿Asiste?: " +
        asistencia + "\n" +

        "👥 Cantidad de personas: " +
        personas + "\n";


    if (acompanantes !== "") {

        mensaje +=
            "👫 Acompañantes: " +
            acompanantes +
            "\n";
    }


    if (mensajePersonal !== "") {

        mensaje +=
            "\n💌 Mensaje: " +
            mensajePersonal +
            "\n";
    }


    mensaje +=
        "\n¡Nos vemos! 💕";


    const url =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(mensaje);


    window.open(url, "_blank");

});