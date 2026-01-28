window.addEventListener('wheel', (e) => {
    e.preventDefault();
    const mural = document.getElementById('mural');
    // Esto moverá el mural 2 píxeles por cada "click" de rueda
    // de forma muy básica para probar que funciona
    window.scrollBy({
        left: e.deltaY,
        behavior: 'auto'
    });
    console.log("¡El script está vivo!");
}, { passive: false });