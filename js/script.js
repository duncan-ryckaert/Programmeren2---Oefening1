"use strict";
window.addEventListener('load', Initieer);

// Globale Variabelen
var txtId;
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

    //Aanpassen inhoud bij inladen
    txtId.value = 'txtNaam';
    txtCssSelector.value = 'label';
    txtNaam.value = 'Duncan';

}

function ToonVerbergElementViaId()
{
    let gekozenIdVanElement = txtId.value;
    let gekozenElement = document.getElementById(gekozenIdVanElement);

    if(gekozenElement.style.visibility == 'hidden')
    {
        gekozenElement.style.visibility = "visible";
    }
    else (gekozenElement.style.visibility = "hidden");
}

function ToonVerbergElementViaSelector()
{
    divFeedback.style.color = 'red';
    divFeedback.innerHTML += 'U klikte op de knop VerbergElementMetSelector <br />';
    let gekozenCssSelectorVanElement = txtCssSelector.value;
    let gekozenElement = document.querySelector(gekozenCssSelectorVanElement);

    if(gekozenElement.style.visibility == 'hidden')
    {
        gekozenElement.style.visibility = "visible";
    }
    else (gekozenElement.style.visibility = "hidden");

    divFeedback.innerHTML += `${txtNaam.value} heeft het element met CssSelector ${gekozenCssSelectorVanElement} gewijzigd <br />`;
}



