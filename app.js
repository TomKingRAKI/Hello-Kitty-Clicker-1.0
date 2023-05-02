let punkty = 0;
let autoclickerCena = 100;
let wiecejPunktowCena = 200;
let autoclickerLiczba = 0;
let wiecejPunktowLiczba = 0;

const obrazek = document.getElementById('obrazek');
const punktyElement = document.getElementById('punkty');
const autoclickerButton = document.getElementById('autoclicker');
const wiecejPunktowButton = document.getElementById('wiecejPunktow');
const resetButton = document.getElementById('reset');

document.getElementById('autoclicker').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
});

document.getElementById('wiecejPunktow').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
});
// Funkcja obsługująca kliknięcie w obrazek
obrazek.addEventListener('click', function() {
	this.style.transform = 'scale(0.92)';
			setTimeout(() => {
				this.style.transform = 'scale(1)';
			}, 100);
    punkty++;
	punktyElement.innerHTML = punkty.toString();
});

// Funkcja obsługująca zakup autoclickera
autoclickerButton.addEventListener('click', function() {
	if (punkty >= autoclickerCena) {
		punkty -= autoclickerCena;
		autoclickerLiczba++;
	autoclickerCena = Math.floor(autoclickerCena * 1.5);
	autoclickerButton.innerHTML = `Autoclicker (cena: ${autoclickerCena})`;
}});

// Funkcja obsługująca zakup ulepszenia zwiększającego liczbę punktów za kliknięcie
wiecejPunktowButton.addEventListener('click', function() {
if (punkty >= wiecejPunktowCena) {
punkty -= wiecejPunktowCena;
    obrazek.addEventListener('click', function() {
	    punkty = punkty + 1;
	    punktyElement.innerHTML = punkty.toString();
    });
wiecejPunktowLiczba++;
wiecejPunktowCena = wiecejPunktowCena * 2;
wiecejPunktowButton.innerHTML = `+1 per click (cena: ${wiecejPunktowCena})`;
}
});

// Funkcja obsługująca automatyczne klikanie
setInterval(function() {
punkty += autoclickerLiczba;
punktyElement.innerHTML = punkty.toString();
}, 1000);

