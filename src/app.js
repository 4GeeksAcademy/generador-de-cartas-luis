/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

//Constantes globales
const cardElement = document.getElementById("card");
const newCardBtn = document.getElementById("newCardBtn");
const topLeftCorner = document.querySelector(".top-left");
const bottomRightCorner = document.querySelector(".bottom-right");
const cardValueElement = document.querySelector(".value");

// Función para generar una carta aleatoria
function generateRandomCard() {
  const sticks = ["spade", "club", "heart", "diamond"]; // Picas, Tréboles, Corazones, Diamantes
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Elegir un palo y un valor aleatorio
  const randomSticks = sticks[Math.floor(Math.random() * sticks.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  // Determinar el ícono según el palo
  let symbol = "";
  switch (randomSticks) {
    case "spade":
      symbol = "♠";
      break;
    case "club":
      symbol = "♣";
      break;
    case "heart":
      symbol = "♥";
      break;
    case "diamond":
      symbol = "♦";
      break;
  }

  // Actualizar la carta en el DOM
  cardElement.className = `card ${randomSticks}`;
  cardValueElement.innerHTML = randomValue;
  topLeftCorner.innerHTML = symbol;
  bottomRightCorner.innerHTML = symbol;
}

// Evento para generar nueva carta al hacer clic en el botón
newCardBtn.addEventListener("click", generateRandomCard);

// Generar una carta al cargar la página
window.onload = generateRandomCard;
