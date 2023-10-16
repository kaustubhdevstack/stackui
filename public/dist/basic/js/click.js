/*!
 * Click JS Library
 * UI Library - Stack UI
 * Author - Stack UI
 * Version - 1.0
 * URL: https://stackui.co
 * Licensed under the GPL License
 * Copyright (c) 2023 Stack UI Creator Kaustubh Shinde
 */

/* Sidebar Navigation */
function openNav() {
  document.getElementById("sidepanel").style.width = "300px";
}

function closeNav() {
  document.getElementById("sidepanel").style.width = "0";
}

function toggleAccordion(accordionId) {
  const accordionContent = document.getElementById(accordionId);
  const otherAccordions = document.querySelectorAll('.accordion-content:not(#' + accordionId + ')');
  
  if (accordionContent.style.maxHeight) {
    accordionContent.style.maxHeight = null;
  } else {
    otherAccordions.forEach((accordion) => {
      accordion.style.maxHeight = null;
    });
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
  }
}

//Command Modal
function openModal() {
  var modal = document.getElementById("cmdmodal");
  modal.style.display = "block";

  // Calculate the top margin to center the modal vertically
  var windowHeight = window.innerHeight;
  var modalHeight = modal.clientHeight;
  var marginTop = (windowHeight - modalHeight) / 2;
  
  // Apply the calculated margin
  modal.style.marginTop = marginTop + "px";

  // Attach click event listener to close modal on outside click
  window.addEventListener("click", closeModalOutside);
}

function closeModal() {
  var modal = document.getElementById("cmdmodal");
  modal.style.display = "none";

  // Remove click event listener for closing modal on outside click
  window.removeEventListener("click", closeModalOutside);
}

function closeModalOutside(event) {
  var modal = document.getElementById("cmdmodal");
  if (event.target === modal) {
    closeModal();
  }
}

// Read Modal
function readOpen() {
  var modal = document.getElementById("readModal");
  modal.style.display = "block";
   
  // Attach click event listener to close modal on outside click
  window.addEventListener("click", readHide);
}

function readClose() {
  var modal = document.getElementById("readModal");
  modal.style.display = "none";

  // Remove click event listener for closing modal on outside click
  window.removeEventListener("click", readHide);
}

function readHide(event) {
  var modal = document.getElementById("readModal");
  if (event.target === modal) {
    readClose();
  }
}

// Footer Modal
function fmodalOpen() {
  var modal = document.getElementById("footerModal");
  modal.style.display = "block";
   
  // Attach click event listener to close modal on outside click
  window.addEventListener("click", fmhide);
}


function fmodalClose() {
  var modal = document.getElementById("footerModal");
  modal.style.display = "none";

  // Remove click event listener for closing modal on outside click
  window.removeEventListener("click", fmhide);
}

function fmhide(event) {
  var modal = document.getElementById("footerModal");
  if (event.target === modal) {
    fmodalClose();
  }
}

// Confirm Modal
function confirmOpen() {
  var modal = document.getElementById("confirmModal");
  modal.style.display = "block";
   
  // Attach click event listener to close modal on outside click
  window.addEventListener("click", confirmHide);
}


function confirmClose() {
  var modal = document.getElementById("confirmModal");
  modal.style.display = "none";

  // Remove click event listener for closing modal on outside click
  window.removeEventListener("click", confirmHide);
}

function confirmHide(event) {
  var modal = document.getElementById("confirmModal");
  if (event.target === modal) {
    confirmClose();
  }
}

// CTA Modal
function ctaOpen() {
  var modal = document.getElementById("ctaModal");
  modal.style.display = "block";
   
  // Attach click event listener to close modal on outside click
  window.addEventListener("click", ctaHide);
}


function ctaClose() {
  var modal = document.getElementById("ctaModal");
  modal.style.display = "none";

  // Remove click event listener for closing modal on outside click
  window.removeEventListener("click", ctaHide);
}

function ctaHide(event) {
  var modal = document.getElementById("ctaModal");
  if (event.target === modal) {
    ctaClose();
  }
}

//Combobox
const wrapper = document.querySelector(".select-container .wrapper"),
  selectBtn = wrapper.querySelector(".select-container .select-btn"),
  searchInp = wrapper.querySelector(".select-container .search input"),
  options = wrapper.querySelector(".select-container .options");

let countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
  "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
  "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
  "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
  "Democratic Republic of the Congo (Congo-Kinshasa)", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
  "Eswatini (formerly Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
  "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
  "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
  "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait",
  "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
  "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau", "Palestine State",
  "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
  "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
  "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
  "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand",
  "Tibet", "Timor-Leste (East Timor)", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay",
  "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

function addCountry(selectedCountry) {
  options.innerHTML = "";
  countries.forEach(country => {
    let isSelected = country === selectedCountry ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addCountry("Select Country");

function updateName(selectedLi) {
  searchInp.value = "";
  addCountry(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = countries.filter(data => {
    return data.toLowerCase().startsWith(searchWord);
  }).map(data => {
    let isSelected = data === selectBtn.firstElementChild.innerText ? "selected" : "";
    return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
  }).join("");
  options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));