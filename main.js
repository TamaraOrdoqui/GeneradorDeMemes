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


// CAMBIO DE COLUMNA IMAGEN A COLUMNA TEXTO CON BOTONES
const btnImagen = document.getElementById('button-text-img');
const btnText = document.getElementById('button-text-text');
const panelImagen = document.getElementById('panel-imagen');
const panelText = document.getElementById('panel-txt');
const btnPanelCierre = document.getElementById('panel_close_button');

btnImagen.addEventListener('click', () =>{
    panelImagen.style.display = "block";
    panelText.style.display = "none";
})

btnText.addEventListener('click', () =>{
    panelImagen.style.display = "none";
    panelText.style.display = "block";
})

btnPanelCierre.addEventListener('click', () =>{
    panelImagen.style.display = "none";
    panelText.style.display = "none";
})

// PARA REABRIR EL PANEL

let isPanelOpen = false; 


function togglePanels() {
    if (isPanelOpen) {
        panelImagen.style.display = "none";
        panelText.style.display = "none";
    } else {
       
        panelImagen.style.display = "block"; 
        panelText.style.display = "none";
    }
    isPanelOpen = !isPanelOpen; 
}

btnImagen.addEventListener('click', () => {
    panelImagen.style.display = "block";
    panelText.style.display = "none";
    isPanelOpen = true;
})

btnText.addEventListener('click', () => {
    panelImagen.style.display = "none";
    panelText.style.display = "block";
    isPanelOpen = true;
})

btnPanelCierre.addEventListener('click', togglePanels);


// URL INPUT 

const urlImg = document.getElementById("url-img");

urlImg.addEventListener('input', () =>{
    imagen.style = `background-image: url(${urlImg.value})`

})

// INPUT DESDE PC 

const fileInput = document.getElementById("fileInput");
const box_img = document.getElementById("box_img");
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.match('image.*')) {
        const reader = new FileReader();

        reader.onload = function(e) {
            box_img.style.backgroundImage = `url(${e.target.result})`;
        };

        reader.readAsDataURL(file);
    }
});

// COLOR DE FONDO DE IMAGEN //CAMBIOS SELECT IMAGEN | MEZCLA DE FONDO

const contenedora = document.getElementById('box-meme');
const fondoColorImg = document.getElementById('idcolor');
const colorValor = document.getElementById('img-Color');
const mix = document.getElementById('mix');

fondoColorImg.addEventListener('input', (event) =>{
    const color = event.target.value;
    contenedora.style.background = color;
    colorValor.innerHTML = `${color}`;
})

const fondoColor = () => {
    imagen.style.backgroundColor = fondoColorImg.value;
}

const actualizarTipoMezcla = () => {
    imagen.style.backgroundBlendMode = mix.value;
};

fondoColorImg.addEventListener('change', fondoColor);
mix.addEventListener('change', actualizarTipoMezcla);

//PANEL DE FILTROS EN LA IMAGEN////CAJA MEME

const imagen = document.getElementById('box_img');
const bright = document.getElementById('bright');
const opacity = document.getElementById('opacity');
const contrast = document.getElementById('contrast');
const blur = document.getElementById('blur');
const gray = document.getElementById('gray-scale');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const saturation = document.getElementById('saturation');
const negative = document.getElementById('negative');

const filtros = () => {
     imagen.style.filter = `brightness(${bright.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${gray.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturation.value}%) invert(${negative.value})`;
}

 bright.addEventListener('input', filtros); 
 opacity.addEventListener('input', filtros);
 contrast.addEventListener('input', filtros);
 blur.addEventListener('input',filtros);
 gray.addEventListener('input', filtros);
 sepia.addEventListener('input', filtros);
 hue.addEventListener('input', filtros);
 saturation.addEventListener('input', filtros);
 negative.addEventListener('input', filtros);

