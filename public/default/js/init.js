// Sidebar
document.addEventListener("DOMContentLoaded", function() {
        const menuIcon = document.querySelector(".sidebarOpen");
        const sidenav = document.getElementById("sidenav");
        const navbar = document.querySelector(".responsive-navbar");
      
        menuIcon.addEventListener("click", function() {
          sidenav.classList.toggle("active");
          navbar.classList.toggle("active");
        });
      
        document.addEventListener("click", function(event) {
          const targetElement = event.target;
          if (
            !targetElement.closest(".responsive-main-nav") &&
            sidenav.classList.contains("active")
          ) {
            sidenav.classList.remove("active");
            navbar.classList.remove("active");
          }
        });
});

//Password toggle
document.addEventListener('DOMContentLoaded', function() {
const togglePasswordIcons = document.querySelectorAll('.register-area .toggle-password');
                    
togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const passwordInput = icon.previousElementSibling;
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.querySelector('i').classList.remove('close');
            icon.querySelector('i').classList.add('open');
        } else {
            passwordInput.type = 'password';
            icon.querySelector('i').classList.remove('open');
            icon.querySelector('i').classList.add('close');
        }
    });
});
});

//Font combine accordions
document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.stack-accordion .accordion-header');

  accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
          const content = header.nextElementSibling;
          const icon = header.querySelector('.accordion-icon');

          // Close all other open contents and icons
          const allContents = document.querySelectorAll('.stack-accordion .accordion-content');
          const allIcons = document.querySelectorAll('.stack-accordion .accordion-icon');
          allContents.forEach(item => {
              if (item !== content) {
                  item.classList.remove('active');
              }
          });
          allIcons.forEach(iconItem => {
              if (iconItem !== icon) {
                  iconItem.classList.remove('open');
              }
          });

          // Toggle the clicked content and icon
          content.classList.toggle('active');
          icon.classList.toggle('open');
      });
  });
});

//Copy gradients and box shadows
function copyBoxShadow(element) {
  var copyText = element;
  var message = element.querySelector("#copy-message");
  var credit = element.querySelector("#credit");

  var tempInput = document.createElement("input");
  tempInput.value = window.getComputedStyle(copyText).boxShadow;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  message.innerText = "Box Shadow CSS Copied!";
  message.style.display = "block";
  credit.style.display = "none";

  setTimeout(function() {
    message.style.display = "none";
    credit.style.display = "block";
  }, 1000);
}

function copyGradientColor(element) {
  var copyText = element;
  var message = element.querySelector("#gradient-message");
  var credit = element.querySelector("#credit-gradient");

  var tempInput = document.createElement("input");
  tempInput.value = window.getComputedStyle(copyText).backgroundImage;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  credit.style.display = "none";
  message.innerText = "Gradient Color Copied!";
  message.style.display = "block";

  setTimeout(function() {
    message.style.display = "none";
    credit.style.display = "block";
  }, 1000);
}

// Avatar Modal
function uploadAvatarOpen() {
  var modal = document.getElementById("cmdmodal-1");
  modal.style.display = "block";
   
  // Attach click event listener to close modal on outside click
  window.addEventListener("click", uploadOutClose);
}

function uploadAvatarClose() {
  var modal = document.getElementById("cmdmodal-1");
  modal.style.display = "none";

  // Remove click event listener for closing modal on outside click
  window.removeEventListener("click", uploadOutClose);
}

function uploadOutClose(event) {
  var modal = document.getElementById("cmdmodal-1");
  if (event.target === modal) {
      uploadAvatarClose();
  }
}

//Contact Modal
function contactMsgOpen() {
   var modal = document.getElementById("cmdmodal-2");
   modal.style.display = "block";

   // Attach click event listener to close modal on outside click
   window.addEventListener("click", contactCloseOutside);
}

function contactMsgClose() {
  var modal = document.getElementById("cmdmodal-2");
  modal.style.display = "none";

  // Remove click event listener for closing modal on outside click
  window.removeEventListener("click", contactCloseOutside);
}

function contactCloseOutside(event) {
  var modal = document.getElementById("cmdmodal-2");
  if (event.target === modal) {
      contactMsgClose();
  }
}

//Review Modal
function reviewOpen() {
  var modal = document.getElementById("cmdmodal-3");
  modal.style.display = "block";

  // Attach click event listener to close modal on outside click
  window.addEventListener("click", reviewCloseOutside);
}

function reviewClose() {
 var modal = document.getElementById("cmdmodal-3");
 modal.style.display = "none";

 // Remove click event listener for closing modal on outside click
 window.removeEventListener("click", reviewCloseOutside);
}

function reviewCloseOutside(event) {
 var modal = document.getElementById("cmdmodal-3");
 if (event.target === modal) {
      reviewClose();
 }
}

//Creation Modal
function creationOpen() {
  var modal = document.getElementById("cmdmodal-4");
  modal.style.display = "block";

  // Attach click event listener to close modal on outside click
  window.addEventListener("click", creationCloseOutside);
}

function creationClose() {
  var modal = document.getElementById("cmdmodal-4");
  modal.style.display = "none";

  // Remove click event listener for closing modal on outside click
  window.removeEventListener("click", creationCloseOutside);
}

function creationCloseOutside(event) {
  var modal = document.getElementById("cmdmodal-4");
  if (event.target === modal) {
      creationClose();
  }
}

//Users list modal
function userOpen() {
  var modal = document.getElementById("cmdmodal-5");
  modal.style.display = "block";

  // Attach click event listener to close modal on outside click
  window.addEventListener("click", userCloseOutside);
}

function userClose() {
  var modal = document.getElementById("cmdmodal-5");
  modal.style.display = "none";

  // Remove click event listener for closing modal on outside click
  window.removeEventListener("click", userCloseOutside);
}

function userCloseOutside(event) {
  var modal = document.getElementById("cmdmodal-5");
  if (event.target === modal) {
      userClose();
  }
}

//Code and view tabs
const tabButtons1 = document.querySelectorAll('.btn-1');
const tabContents1 = document.querySelectorAll('.ctent-1');
initializeTabs(tabButtons1, tabContents1);

const tabButtons2 = document.querySelectorAll('.btn-2');
const tabContents2 = document.querySelectorAll('.ctent-2');
initializeTabs(tabButtons2, tabContents2);

const tabButtons3 = document.querySelectorAll('.btn-3');
const tabContents3 = document.querySelectorAll('.ctent-3');
initializeTabs(tabButtons3, tabContents3);

const tabButtons4 = document.querySelectorAll('.btn-4');
const tabContents4 = document.querySelectorAll('.ctent-4');
initializeTabs(tabButtons4, tabContents4);

const tabButtons5 = document.querySelectorAll('.btn-5');
const tabContents5 = document.querySelectorAll('.ctent-5');
initializeTabs(tabButtons5, tabContents5);

const tabButtons6 = document.querySelectorAll('.btn-6');
const tabContents6 = document.querySelectorAll('.ctent-6');
initializeTabs(tabButtons6, tabContents6);

const tabButtons7 = document.querySelectorAll('.btn-7');
const tabContents7 = document.querySelectorAll('.ctent-7');
initializeTabs(tabButtons7, tabContents7);

const tabButtons8 = document.querySelectorAll('.btn-8');
const tabContents8 = document.querySelectorAll('.ctent-8');
initializeTabs(tabButtons8, tabContents8);

const tabButtons9 = document.querySelectorAll('.btn-9');
const tabContents9 = document.querySelectorAll('.ctent-9');
initializeTabs(tabButtons9, tabContents9);

const tabButtons10 = document.querySelectorAll('.btn-10');
const tabContents10 = document.querySelectorAll('.ctent-10');
initializeTabs(tabButtons10, tabContents10);

const tabButtons11 = document.querySelectorAll('.btn-11');
const tabContents11 = document.querySelectorAll('.ctent-11');
initializeTabs(tabButtons11, tabContents11);

const tabButtons12 = document.querySelectorAll('.btn-12');
const tabContents12 = document.querySelectorAll('.ctent-12');
initializeTabs(tabButtons12, tabContents12);

const tabButtons13 = document.querySelectorAll('.btn-13');
const tabContents13 = document.querySelectorAll('.ctent-13');
initializeTabs(tabButtons13, tabContents13);

const tabButtons14 = document.querySelectorAll('.btn-14');
const tabContents14 = document.querySelectorAll('.ctent-14');
initializeTabs(tabButtons14, tabContents14);

const tabButtons15 = document.querySelectorAll('.btn-15');
const tabContents15 = document.querySelectorAll('.ctent-15');
initializeTabs(tabButtons15, tabContents15);

const tabButtons16 = document.querySelectorAll('.btn-16');
const tabContents16 = document.querySelectorAll('.ctent-16');
initializeTabs(tabButtons16, tabContents16);

const tabButtons17 = document.querySelectorAll('.btn-17');
const tabContents17 = document.querySelectorAll('.ctent-17');
initializeTabs(tabButtons17, tabContents17);

const tabButtons18 = document.querySelectorAll('.btn-18');
const tabContents18 = document.querySelectorAll('.ctent-18');
initializeTabs(tabButtons18, tabContents18);

const tabButtons19 = document.querySelectorAll('.btn-19');
const tabContents19 = document.querySelectorAll('.ctent-19');
initializeTabs(tabButtons19, tabContents19);

const tabButtons20 = document.querySelectorAll('.btn-20');
const tabContents20 = document.querySelectorAll('.ctent-20');
initializeTabs(tabButtons20, tabContents20);

function initializeTabs(tabButtons, tabContents) {
  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');

      tabButtons.forEach(btn => {
        btn.classList.remove('active');
      });

      tabContents.forEach(content => {
        content.classList.remove('show');
      });

      button.classList.add('active');
      document.getElementById(tabId).classList.add('show');
    });

    // Display the content of Tab 1 by default
    if (index === 0) {
      button.classList.add('active');
      tabContents[0].classList.add('show');
    }
  });
}