// Seleccionamos el enlace
const enlace = document.getElementById('enlace');

// Definimos los textos y enlaces a mostrar

const textosYEnlaces = [
    { texto: "Experiencias para disfrutar de una mirada", url: "https://www.tripadvisor.com.mx/Attractions-g2651530-Activities-Cocle_Province.html" },
    { texto: "Excursiones de un día", url: "https://www.getyourguide.es/ciudad-de-panama-l811/excursiones-de-un-dia-tc360/cocle-tl1479/?cmp=bing&ad_id=77721927417684&adgroup_id=1243548273981745&bid_match_type=bb&campaign_id=434041771&device=c&feed_item_id=&keyword=-l811%2F&loc_interest_ms=142697&loc_physical_ms=142696&match_type=b&msclkid=5ae0e7efaff5148bcee080a05c793fcc&network=o&partner_id=CD951&target_id=dat-2329521542103937&utm_adgroup=lc%3D811%3Apanama%20city%7Cfn%3Df1%7Cagt%3Ddsa&utm_campaign=dc%3D203%3Apa%7Clc%3D811%3Apanama%20city%7Cct%3Dcore%7Cln%3D109%3Aes%7Ctc%3Dall&utm_keyword=-l811%2F&utm_medium=paid_search&utm_query=turismo%20cocl%C3%A9&utm_source=bing" },
    { texto: "Coclé, destino lleno de belleza natural.", url: "https://turismo.encolombia.com/turismo-en-cocle/" },
    { texto: "Encuentra las casas y chalets que van más contigo", url: "https://www.booking.com/holiday-homes/region/pa/cocle.es.html?aid=2276813&label=msn-Y7V_n4YrQ7iCW1nQBBJtKg-80539368737760%3Atikwd-80539519059704%3Aloc-145%3Aneo%3Amtb%3Alp142696%3Adec%3Aqsturismo%20cocl%C3%A9&utm_campaign=HolidayHomes%20-%20Panama&utm_medium=cpc&utm_term=Y7V_n4YrQ7iCW1nQBBJtKg&msclkid=6693706c5213115bcef51723a6ad8ce2&utm_source=bing&keep_landing=1&sid=849855de58a05135c40d65ceba6fe7bb" },
    { texto: "Elige la opción ideal para tu escapada", url: "https://www.vrbo.com/es-mx/alquileres-vacaciones/panam%C3%A1/cocle/cocl%C3%A9?semcid=VRBO-MX.UB.BING.DL-DSA-c-ES.VR&semdtl=a1418397491.b11161085039356790.g1dat-2324367581357145:loc-145.e1c.m16be2e515eeea186bcbc2825a1a54b019.r1.c1.j1142696.k1142697.d172567973500417.h1b.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1?msclkid=6be2e515eeea186bcbc2825a1a54b019" }
];

// Controlador para cambiar texto y enlace
let index = 0;

function cambiarTextoYEnlace() {
    enlace.textContent = textosYEnlaces[index].texto;  // Cambia el texto del enlace
    enlace.href = textosYEnlaces[index].url;  // Cambia la URL del enlace

    // Avanza al siguiente índice, y si llega al final, vuelve al principio
    index = (index + 1) % textosYEnlaces.length; 
}

// Llamamos a la función cada 2 segundos
setInterval(cambiarTextoYEnlace, 2000);
