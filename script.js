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
        "Hola Susana \u{1F497}\n\n" +
        "Quiero confirmar mi asistencia a tu cumpleaños \u{1F382}\n\n" +

        "\u{1F464} Nombre: " +
        nombre + " " +
        apellido + "\n" +

        "\u{1F497} ¿Asiste?: " +
        asistencia + "\n" +

        "\u{1F465} Cantidad de personas: " +
        personas + "\n";

    if (acompanantes !== "") {

        mensaje +=
            "\u{1F46B} Acompañantes: " +
            acompanantes +
            "\n";
    }

    if (mensajePersonal !== "") {

        mensaje +=
            "\n\u{1F48C} Mensaje: " +
            mensajePersonal +
            "\n";
    }

    mensaje +=
        "\n¡Nos vemos! \u{1F495}";

    const url =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(mensaje);

    window.open(url, "_blank");

});