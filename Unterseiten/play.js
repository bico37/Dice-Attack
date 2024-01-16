//Variablen auf Unterseite Bringen
let name1, nameP2, lives1, lives2, damage1, damage2;

document.addEventListener('DOMContentLoaded', function () {
    // Werte aus dem Local Storage abrufen
    nameP1 = localStorage.getItem('nameP1');
    nameP2 = localStorage.getItem('nameP2');
    lives1 = parseInt(localStorage.getItem('lives1'));
    lives2 = parseInt(localStorage.getItem('lives2'));
    
    damage1 = parseInt(localStorage.getItem('damage1'));
    damage2 = parseInt(localStorage.getItem('damage2'));
    
    console.log(nameP1, nameP2, lives1, lives2, damage1, damage2);
    
});

//Player:

//input name in h2