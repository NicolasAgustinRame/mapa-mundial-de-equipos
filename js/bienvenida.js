window.addEventListener("load", () => {
    mostrarAlerta()
})

function mostrarAlerta() {
    Swal.fire(
        {
            title: '¡Bienvenido al mapa Mundial de Equipos!',
            text: 'Busca equipos en todo el mundo',
            showConfirmButton: false,
            timer: 2500
        }
    )
}