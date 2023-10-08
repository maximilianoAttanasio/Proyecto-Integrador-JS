let boton = document.getElementById('darkMode');

let getDarkMode = localStorage.getItem('mode');

boton.addEventListener('click', () => {
    if (!document.body.classList.contains('black')) {
        document.body.classList.add('black')
        localStorage.setItem('mode', 'black')
    } else {
        document.body.classList.remove('black')
        localStorage.removeItem('mode')
    }
})

if (getDarkMode === 'black') {
    document.body.classList.add('black')
} else {
    document.body.classList.remove('black')
}