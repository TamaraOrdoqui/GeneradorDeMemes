// MODO CLARO - MODO OSCURO

const light = document.getElementById('button-modo-dark');
const body = document.body;

const valor  = localStorage.getItem('light')

light.addEventListener('click', () =>{
    const val = body.classList.toggle('theme-light')
    localStorage.setItem('light', val)
})
//funcion para que al actualizar página siga con el modo elegido por el usuario

if (valor === "true") {
    body.classList.add("theme-light");
}
else
{
    body.classList.remove('theme-light');
}

// BOTON DE DESCARGA MEME
const btnDescarga = document.getElementById('button_download');

btnDescarga.addEventListener('click', () => {
    domtoimage.toBlob(document.getElementById('box-meme'))
        .then(blob => {
            saveAs(blob, 'mi-meme.png');
            return new Promise(resolve => setTimeout(resolve, 2000)); // Espera 2 segundos
        })
        .then(() => {
            window.location.reload(); // Recarga la página
        });
});


