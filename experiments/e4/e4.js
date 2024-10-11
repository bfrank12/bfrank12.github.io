let planet1 = document.getElementById('planet1');
setInterval(() => {
    planet1.style.left = (parseInt(planet1.style.left) + 10) + 'px';
    if (parseInt(planet1.style.left) > window.innerWidth) {
        planet1.style.left = '-100px';
    }
}, 100);

let spaceship1 = document.getElementById('spaceship1');
setInterval(() => {
    spaceship1.style.bottom = (parseInt(spaceship1.style.bottom) + 10) + 'px';
    if (parseInt(spaceship1.style.bottom) > window.innerHeight) {
        spaceship1.style.bottom = '-50px';
    }
}, 150);
