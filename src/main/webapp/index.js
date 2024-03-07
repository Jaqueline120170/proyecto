// Array predefinido
    var miArray = ["Valor 0", "Valor 1", "Valor 2", "Valor 3", "Valor 4"];

    // Función para obtener el valor según la posición
    function obtenerValor() {
        // Solicitar al usuario ingresar un número
        var posicion = prompt("Ingrese un número para obtener el valor correspondiente:");

        // Validar que la entrada sea un número válido
        if (isNaN(posicion)) {
            alert("Por favor, ingrese un número válido.");
            return;
        }

        // Convertir la entrada a un entero
        posicion = parseInt(posicion);

        // Validar que el número esté dentro de los límites del array
        if (posicion < 0 || posicion >= miArray.length) {
            alert("Número fuera de los límites permitidos.");
            return;
        }

        // Mostrar el valor correspondiente
        alert("El valor en la posición " + posicion + " es: " + miArray[posicion]);
    }

    // Llamar a la función al cargar la página (solo para demostración)
    obtenerValor();