"use strict";
window.addEventListener('load', Initieer);

// Globale Variabelen
var divFeedback;
var btnVerbergElementMetId;
var btnVerbergElementMetSelector;


// StartUP
function Initieer() {
    // Lokale variabelen
    var txtId;
    var txtNaam;
    var txtCssSelector;

    // Inlezen DOM-elementen
    txtId = document.getElementById("txtId");
    txtNaam = document.getElementById("txtNaam");
    txtCssSelector = document.getElementById("txtCssSelector");
    txtId.value = "TEST";


    // Toevoegen Event-Listeners
    btnVerbergElementMetId.addEventListener("click", ToonVerbergElementViaId);
    btnVerbergElementMetSelector.addEventListener("click", ToonVerbergElementViaSelector);

}

function ToonVerbergElementViaId()
{


}

function ToonVerbergElementViaSelector()
{

}



