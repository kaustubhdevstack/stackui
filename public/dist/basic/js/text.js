/*!
 * Text JS Library
 * UI Library - Stack UI
 * Author - Stack UI
 * Version - 1.0
 * URL: https://stackui.co
 * Licensed under the GPL License
 * Copyright (c) 2023 Stack UI Creator Kaustubh Shinde
 */

/* Typing effect number 3 */

class TxtType {
  constructor(el, toRotate, period) {
    this.toRotate = JSON.parse(toRotate);
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => {
      this.tick();
    }, delta);
  }
}

window.onload = function () {
  const elements = document.getElementsByClassName('typewrite');
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-type');
    const period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], toRotate, period);
    }
  }
};

/* Typing effect number 6 */

const element = document.querySelector(".repeat-type");

function startType(pun, index) {
  let typed = pun.substring(0, index + 1);
  element.innerHTML = typed;

  if (index < pun.length - 1) {
    setTimeout(() => {
      startType(pun, index + 1);
    }, 50);
  } else {
    setTimeout(() => {
      element.classList.add("highlight");
    }, 4000);

    setTimeout(() => {
      element.classList.remove("highlight");
      element.innerHTML = "";
      startType(getRandomPun(), 0);
    }, 5000);
  }
}

function getRandomPun() {
  const puns = [
    "This is repeated typing effect version 2 but with more Puns!",
    "Why did the programmer quit his job? He didn't get arrays of opportunities",
    "Coding is a byte-ful profession.",
    "What's a programmer's favorite song? Hello, world by Adele.",
    "A programmer's favorite drink? Java!",
    "Why do programmers prefer dark mode? Because the light mode bugs them.",
    "What's a coder's favorite exercise? Cursor-cises.",
    "Why did the programmer get stuck in the shower? He couldn't find the right escape sequence.",
    "Why did the programmer always carry a ladder? To reach the higher-level languages.",
    "What's a computer programmer's favorite type of jewelry? A bit ring.",
    "I told my programmer friend a joke about memory. But he forgot to laugh.",
    "Why did the programmer bring a ladder to the bar? He heard the drinks were on the house.",
    "What's a coder's favorite type of pet? A key-bored cat.",
    "How did the programmer fix his broken chair? He used a chair array.",
    "Why was the programmer cold? Because he left his Windows open.",
    "What do you call a programmer who speaks French? A code-à-trois expert.",
    "I heard the programmer opened a bakery. He specializes in cookies and data cakes.",
    "What do you call a coding contest in the ocean? A mer-code-a-thon.",
    "How did the people behind the latest hack escape? They ransomware.",
    "Why did the programmer go broke? He lost his domain in a coding bet.",
  ];
  const index = Math.floor(Math.random() * puns.length);
  return puns[index];
}

function initializeTypingAnimation() {
  const pun = getRandomPun();
  startType(pun, 0);
}

initializeTypingAnimation();

/* Typing effect number 7 */

var aText = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "What did one wall say to the other wall? I'll meet you at the corner!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why did the bicycle fall over? It was two-tired!",
  "What do you call a fish wearing a crown? King mackerel!",
  "How does a penguin build its house? Igloos it together!",
  "Why don't eggs tell jokes? Because they might crack up!"
];
var iSpeed = 100;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("natural");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout(typewriter, 500);
    }
  } else {
    setTimeout(typewriter, iSpeed);
  }
}

typewriter();

// File upload input text change
function updateLabel() {
  const fileInput = document.getElementById("file-input");
  const fileLabel = document.getElementById("file-label");
  
  if (fileInput.files.length > 0) {
    fileLabel.textContent = fileInput.files[0].name;
  } else {
    fileLabel.textContent = "No file selected";
  }
}