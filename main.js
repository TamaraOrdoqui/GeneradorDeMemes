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

//BOTON RESTABLECER FILTROS
const resetFilters = (e) => {
    e.preventDefault()
    imagen.style.filter = `brightness(1)`;
    imagen.style.filter = `opacity(1)`;
    imagen.style.filter = `contrast(100)`;
    imagen.style.filter = `blur(0)`;
    imagen.style.filter = `grayscale(0)`;
    imagen.style.filter = `sepia(0)`;
    imagen.style.filter = `saturate(0)`;
    imagen.style.filter = `saturate(100)`;
    imagen.style.filter = `invert(0)`;
    bright.value = 1;
    opacity.value = 1;
    contrast.value = 100;
    blur.value = 0;
    gray.value = 0;
    sepia.value = 0;
    hue.value = 0;
    saturation.value = 100;
    negative.value = 0;
};

const btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click',(e) =>{resetFilters(e)});

//  INPUT TEXTO CAJA MEME | CHECKBOX CAJA MEME

const inputTop = document.getElementById('inputTop');
const inputBottom = document.getElementById('inputBottom');
const topText = document.getElementById('topText'); 
const bottomText = document.getElementById('bottomText');

const check1 = document.getElementById('not-top');
const check2 = document.getElementById('not-bottom');

inputTop.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    topText.innerHTML = textoIngresado;
})
inputBottom.addEventListener('input', (event) => {
    const textoIngresado2 = event.target.value;
    bottomText.innerHTML = textoIngresado2;
})

check1.addEventListener('click', () => {
    topText.classList.toggle('ocultar');
}) 

check2.addEventListener('click', () => {
    bottomText.classList.toggle('ocultar');
})

//      CAMBIO TIPO DE FUENTE

const cambioFuente = function (font) {
    document.getElementById('topText').style.fontFamily = font.value;
    document.getElementById('bottomText').style.fontFamily = font.value;
}

//      TAMAÑO DE FUENTE

const textSize = document.getElementById('text-size-input');

textSize.addEventListener('input', (event) => {
    const NumberFont = event.target.value;
    topText.style.fontSize = `${NumberFont}px`;
    bottomText.style.fontSize = `${NumberFont}px`;
})

//      ALINEACION DE TEXTO 
const btnAlignLeft = document.getElementById('btn-text-left-align');
const btnAlignCenter = document.getElementById('btn-text-center-align');
const btnAlignRight = document.getElementById('btn-text-right-align');

btnAlignLeft.addEventListener('click', () => {
    topText.style.textAlign = "left";
    bottomText.style.textAlign = "left";
});
btnAlignCenter.addEventListener('click', () => {
    topText.style.textAlign = "center";
    bottomText.style.textAlign = "center";
});
btnAlignRight.addEventListener('click', () => {
    topText.style.textAlign = "right";
    bottomText.style.textAlign = "right";
});


//      COLOR DE TEXTO Y FONDO | FONDO TRANSPARENTE

const colorTexto = document.getElementById('idcolor2');
const colorFondoTexto = document.getElementById('idcolor3');
const textoColorValor = document.getElementById('txt-color');
const fondoColorValor = document.getElementById('fondo-color');
const check3 = document.getElementById('not-background');


colorTexto.addEventListener('input', (event) => {
    const colorT = event.target.value;
    topText.style.color = `${colorT}`;
    bottomText.style.color = `${colorT}`;
    textoColorValor.innerHTML = `${colorT}`;
})
colorFondoTexto.addEventListener('input', (event) => {
    const colorF = event.target.value;
    topText.style.background = `${colorF}`;
    bottomText.style.background = `${colorF}`;
    fondoColorValor.innerHTML = `${colorF}`;
    
})

check3.addEventListener('change', (event) => {
    if (event.target.checked) {
        topText.style.backgroundColor = 'transparent';
        bottomText.style.backgroundColor = 'transparent';
      
    }
    else {
        topText.style.backgroundColor = '';
        bottomText.style.backgroundColor = '';
    }   
});     


// CONTORNO  
const ninguno = document.getElementById('ninguno');
const claro = document.getElementById('claro');
const oscuro = document.getElementById('oscuro');

ninguno.addEventListener('click', () => {
    topText.style.textShadow = '';
    bottomText.style.textShadow = '';
});
claro.addEventListener('click', () => {
    topText.style.textShadow = '-2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff, 2px -2px 1px #fff';
    bottomText.style.textShadow = '-2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff, 2px -2px 1px #fff';
});
oscuro.addEventListener('click', () => {
    topText.style.textShadow = '-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000';
    bottomText.style.textShadow = '-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000';
});

//   ESPACIADO 

const padding = document.getElementById('padding-input');

padding.addEventListener('input', () => {
    topText.style.padding = `${padding.value}px`;
    bottomText.style.padding = `${padding.value}px`;
});

//      INTERLINEADO
const lineHeight = document.getElementById('linespacing-input')

lineHeight.addEventListener('input', () => {
    topText.style.lineHeight = lineHeight.value;
    bottomText.style.lineHeight =lineHeight.value;
});

// BOTON RESTABLECER 
document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('buttonRest');

    boton.addEventListener('click', function() {
        window.location.reload();
    });

    // ABRIR SIEMPRE PANEL IMG 
    window.addEventListener('DOMContentLoaded', () => {
        panelImagen.style.display = "block";
        panelText.style.display = "none";
        isPanelOpen = true;
    });
});