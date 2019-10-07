"use strict";
window.addEventListener('load', Initieer);

// Globale Variabelen
var txtID;
var txtCssSelector
var txtNaam;
var divFeedback;


// StartUP
function Initieer() {
    // Lokale variabelen
    let btnVerbergElementMetId;
    let btnVerbergElementMetSelector;

    // Inlezen DOM-elementen
    txtId = document.getElementById('txtId');
    txtNaam = document.getElementById('txtNaam');
    txtCssSelector = document.getElementById('txtCssSelector');
    divFeedback = document.getElementById('divFeedback');

    btnVerbergElementMetId = document.getElementById('btnVerbergElementMetId');
    btnVerbergElementMetSelector = document.getElementById('btnVerbergElementMetSelector');


    // Toevoegen Event-Listeners
    btnVerbergElementMetId.addEventListener('click', ToonVerbergElementViaId);
    btnVerbergElementMetSelector.addEventListener('click', ToonVerbergElementViaSelector);

}

function ToonVerbergElementViaId()
{


}

function ToonVerbergElementViaSelector()
{

}



