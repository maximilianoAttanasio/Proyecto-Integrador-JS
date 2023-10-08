let mangasHTML = document.querySelector('.mangas');

fetch('../datos/mangas.json')
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((mangas) => {
        mangas.forEach(manga => {
            mangasHTML.innerHTML +=
                `
        <article class="manga col-12 col-md-6 col-lg-3 ">
            <div class="card mx-auto" style="width: 18rem;">
                <img src="${manga.imagen}" class="w-100 card-img-top" alt="Imagen ${manga.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${manga.nombre}</h5>
                    <br>
                    <a id="${manga.nombre}" class="btn btn-primary d-block btnDetalles">Ver mas detalles</a>
                </div>
            </div>
        </article>
        `
        });

        document.querySelectorAll('.btnDetalles').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                let mangaSeleccionado = mangas.find(manga => manga.nombre === this.id);

                localStorage.setItem('mangaSeleccionado', JSON.stringify(mangaSeleccionado));

                location.href = `./detalles.html?nombre=${mangaSeleccionado.nombre}`;
            });
        });
    })
    .catch((error) => {
        console.log('Ocurrió un error' + error);
    })


let btnTwitter = document.getElementById('btnTwitter');

btnTwitter.addEventListener('click', () => {
    alert('Actualmente no disponible. Lamentamos las molestias.');
})