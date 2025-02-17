// Seleccionamos el enlace
const enlace = document.getElementById('enlace');
const descripcion = document.getElementById('descripcion');

// Definimos los textos y enlaces a mostrar

const textosYEnlaces = [
    { 
        texto: "Cascada Tavida", 
        url: "https://www.tiqy.com/es/tour-actividad-info/tour-a-la-cascada-tavida-el-valle-mountain-tours",
        descripcion: "Una hermosa cascada rodeada de naturaleza exuberante, ideal para una escapada relajante."
    },
    { 
        texto: "El Chorro de las Mozas", 
        url: "https://www.tripadvisor.com.mx/Attraction_Review-g635545-d1982955-Reviews-The_Maidens_Falls-El_Valle_de_Anton_Cocle_Province.html",
        descripcion: "Un lugar natural con cascadas pequeñas y senderos pintorescos para explorar."
    },
    { 
        texto: "Butterfly Haven", 
        url: "https://www.tripadvisor.com.mx/Attraction_Review-g635545-d6351598-Reviews-Butterfly_Haven-El_Valle_de_Anton_Cocle_Province.html",
        descripcion: "Un santuario de mariposas donde puedes aprender sobre estos fascinantes insectos."
    },
    { 
        texto: "El Serpentario", 
        url: "https://www.tripadvisor.com.mx/Attraction_Review-g635545-d1978057-Reviews-or60-El_Serpentario-El_Valle_de_Anton_Cocle_Province.html",
        descripcion: "Un lugar educativo para conocer más sobre serpientes y su papel en el ecosistema."
    },
    { 
        texto: "Parque Nacional Cerro Gaital", 
        url: "https://www.tripadvisor.com.mx/Attractions-g2651530-Activities-Cocle_Province.html",
        descripcion: "Un parque nacional con senderos desafiantes y vistas espectaculares desde la cima."
    }
];


// Controlador para cambiar texto y enlace
let index = 0;

function cambiarTextoYEnlace() {
    enlace.textContent = textosYEnlaces[index].texto;  // Cambia el texto del enlace
    enlace.href = textosYEnlaces[index].url;  // Cambia la URL del enlace
    descripcion.textContent = textosYEnlaces[index].descripcion;

    // Avanza al siguiente índice, y si llega al final, vuelve al principio
    index = (index + 1) % textosYEnlaces.length; 
}

// Llamamos a la función cada 2 segundos
setInterval(cambiarTextoYEnlace, 2000);
