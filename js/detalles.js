let nombre = location.search;
console.log(nombre);

let datosManga = new URLSearchParams(nombre);

let nombreSelect = datosManga.get('nombre');

let imagenManga = document.getElementById('imagen');
let nombreManga = document.getElementById('nombreManga');
let descripcionManga = document.getElementById('descripcion');
let otrosTitulosManga = document.getElementById('titulosAlt');
let estadoManga = document.getElementById('estado');
let fechaManga = document.getElementById('fecha');
let autorManga = document.getElementById('autor');
let capitulosManga = document.getElementById('capitulos');
let volumenManga = document.getElementById('volumen');
let generosManga = document.getElementById('generos');
let temasManga = document.getElementById('temas');
let tituloPagina = document.getElementById('titulo');

let detallesManga = JSON.parse(localStorage.getItem('mangaSeleccionado'))

let arrayDetalles = detallesManga;
console.log(arrayDetalles);

nombreManga.innerHTML = ` ${nombreSelect} `
imagenManga.innerHTML = ` <img class="w-100" src="${arrayDetalles.imagen}" alt="${arrayDetalles.nombre} Imagen" style="border: 1px solid #000; border-radius: 5%"/> `
descripcionManga.innerHTML = ` ${arrayDetalles.descripcion} `
otrosTitulosManga.innerHTML = ` <b>Otros títulos: </b> ${arrayDetalles.otrosTitulos} `
estadoManga.innerHTML = ` <b>Estado: </b> ${arrayDetalles.estado} `
fechaManga.innerHTML = ` <b>Fecha de publicación: </b> ${arrayDetalles.fechaPublicacion} `
autorManga.innerHTML = ` <b>Autor: </b> ${arrayDetalles.autor} `
capitulosManga.innerHTML = ` <b>Capítulos: </b> ${arrayDetalles.capitulos} `
volumenManga.innerHTML = ` <b>Volúmenes: </b> ${arrayDetalles.volumen} `
generosManga.innerHTML = ` <b>Género: </b> ${arrayDetalles.genero} `
temasManga.innerHTML = ` <b>Tema: </b> ${arrayDetalles.tema} `
tituloPagina.innerHTML = ` ${arrayDetalles.nombre} - Detalles del manga `

let regresar = document.getElementById('regresar');
regresar.addEventListener('click', () => {
    // Si utilizo removeItem no elimina nada del localStorage.
    // localStorage.removeItem('detallesManga')
    // Con clear funciona, pero también borra el 'modo oscuro' al volver a la pestaña principal
    localStorage.clear()
    location.href = 'index.html'
})

let btnTwitter = document.getElementById('btnTwitter');

btnTwitter.addEventListener('click', () => {
    alert('Actualmente no disponible. Lamentamos las molestias.');
})