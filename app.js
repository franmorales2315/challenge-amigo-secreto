const nombreAmigos = []; // El universo que permite crear la lista con los nombres de los amigos que participan en el sorteo

function agregarAmigos() {
    const nombre = document.getElementById("nombreAmigoInput").value.trim(); // Usar .trim() para eliminar espacios al principio y final

    // Crear un comando que no permita que la lista esté vacía
        if (nombre === "") {
        alert("Por favor, ingrese un nombre válido."); // Genera una alerta si el nombre está vacío
        return;
    }

    nombreAmigos.push(nombre); // Agregar el nombre a la lista
    console.log("Lista de amigos actualizada:", nombreAmigos); // Ver la lista actualizada
    document.getElementById("nombreAmigoInput").value = ""; // Limpiar la caja una vez se ingresa el nombre
    mostrarAmigos(); // Mostrar la lista actualizada
}

function mostrarAmigos() {
    document.getElementById("listaAmigos").innerText = "Amigos: " + nombreAmigos; // Mostrar la lista sin usar join
}

// Función para sortear un amigo
function sortearAmigo() {
    // Verificar si hay amigos en la lista antes de sortear
    if (nombreAmigos.length === 0) {
        alert("Por favor, ingrese el nombre de los participantes."); // Mostrar alerta si no hay amigos en la lista
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length); // Generar un índice aleatorio
    let amigoSorteado = nombreAmigos[indiceAleatorio]; // Obtener el amigo sorteado

    document.getElementById("resultado").innerText = "Amigo sorteado: " + amigoSorteado; // Mostrar el resultado
}

// Conectar funciones a los botones
document.getElementById("botonAgregar").onclick = agregarAmigos;
document.getElementById("botonSortear").onclick = sortearAmigo;
