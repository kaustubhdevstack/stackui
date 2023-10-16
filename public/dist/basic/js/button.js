/*!
 * button js
 * UI Library - Stack UI
 * Author - Stack UI
 * Version - 1.0
 * URL: https://stackui.co
 * Licensed under the GPL License
 * Copyright (c) 2023 Stack UI Creator Kaustubh Shinde
 */
(function() {
document.addEventListener('DOMContentLoaded', function () {
  /* Cover navigation */
    const toggleMenu = document.querySelector('.toggle-menu');
    const menu = document.getElementById('menu');
    const closeToggle = document.querySelector('.close-toggle');
  
    const toggleMenuAndMenu = () => {
      toggleMenu.classList.toggle('active');
      menu.classList.toggle('open');
    };
  
    toggleMenu.addEventListener('click', toggleMenuAndMenu);
    closeToggle.addEventListener('click', toggleMenuAndMenu);
});

document.addEventListener('DOMContentLoaded', function () {
//Password Icons
const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    
togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const passwordInput = icon.previousElementSibling;
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.querySelector('i').classList.remove('closed-eye');
            icon.querySelector('i').classList.add('open-eye');
        } else {
            passwordInput.type = 'password';
            icon.querySelector('i').classList.remove('open-eye');
            icon.querySelector('i').classList.add('closed-eye');
        }
    });
});

});

document.addEventListener('DOMContentLoaded', function () {
  /* Basic switch button JS Code */
  const switchButton1 = document.getElementById('stack-switch');
  switchButton1.addEventListener('change', () => {
    if (switchButton1.checked) {
      console.log('Switch is ON');
      // Perform some action when the switch is ON
    } else {
      console.log('Switch is OFF');
      // Perform some action when the switch is OFF
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  /* Basic switch button with message */
    const switchButton2 = document.getElementById('switch-stack');
    const messageText = document.getElementById('messageText');

    switchButton2.addEventListener('change', () => {
      if (switchButton2.checked) {
        messageText.textContent = 'ON';
        // Perform some action when the switch is ON
      } else {
        messageText.textContent = 'OFF';
        // Perform some action when the switch is OFF
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  /* Basic switch button with message */
    const switchButton3 = document.getElementById('switch-stackui');
    switchButton3.addEventListener('change', () => {
      if (switchButton3.checked) {
        console.log('Switch is ON');
        // Perform some action when the switch is ON
      } else {
        console.log('Switch is OFF');
        // Perform some action when the switch is OFF
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  /* Dropdown action button */
  const dropdownButton = document.querySelector('.btn-dropdown .dropbtn-trigger');
  const dropdownContent = document.querySelector('.btn-dropdown .dropdown-content');
  const arrowIcon = document.querySelector('.btn-dropdown .arrow');
  
  dropdownButton.addEventListener('click', () => {
      dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
      arrowIcon.classList.toggle('rotate');
  });
  
  /* Hide dropdown button */
  document.addEventListener('click', (event) => {
      if (!dropdownButton.contains(event.target)) {
          dropdownContent.style.display = 'none';
          arrowIcon.classList.remove('rotate');
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  /* Responsive navigation */
  const menuIcon = document.querySelector(".openNav");
  const sidenav = document.getElementById("sidenavi");
  const navbar = document.querySelector(".stack-navbar");

  menuIcon.addEventListener("click", function() {
    sidenav.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  document.addEventListener("click", function(event) {
      const targetElement = event.target;
      if (
        !targetElement.closest(".stack-main-header") &&
        sidenav.classList.contains("active")
      ) {
        sidenav.classList.remove("active");
        navbar.classList.remove("active");
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  /* Flyout Navigation */
  const hasFlyoutItems = document.querySelectorAll(".has-flyout");

  hasFlyoutItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // Prevents the default behavior of the anchor tag

      const flyoutMenu = item.querySelector(".flyout");
      const isVisible = flyoutMenu.style.display === "block";
      
      // Close all flyouts before opening the clicked one
      const allFlyoutMenus = document.querySelectorAll(".flyout");
      allFlyoutMenus.forEach(function (menu) {
        menu.style.display = "none";
      });

      // Toggle the visibility of the clicked flyout
      flyoutMenu.style.display = isVisible ? "none" : "block";
    });
  });

  // Close flyout when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".has-flyout")) {
      const flyoutMenus = document.querySelectorAll(".flyout");
      flyoutMenus.forEach(function (menu) {
        menu.style.display = "none";
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  //Accordion 1
  const accordionHeaders = document.querySelectorAll('.stack-accordion-1 .accordion-header');

  accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
          const content = header.nextElementSibling;
          const icon = header.querySelector('.accordion-icon');
          
          content.classList.toggle('active');
          icon.classList.toggle('open');
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  //Accordion 2
  const accordionHeaders = document.querySelectorAll('.stack-accordion-2 .accordion-header');

  accordionHeaders.forEach((header, index) => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.accordion-icon');

      if (index === 0) {
          content.classList.add('active');
          icon.classList.add('open');
      }

      header.addEventListener('click', () => {
          content.classList.toggle('active');
          icon.classList.toggle('open');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  //Accordion 3
  const accordionHeaders = document.querySelectorAll('.stack-accordion-3 .accordion-header');

  accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
          const content = header.nextElementSibling;
          const icon = header.querySelector('.accordion-icon');

          // Close all other open headers and contents
          const allContents = document.querySelectorAll('.stack-accordion-3 .accordion-content');
          const allIcons = document.querySelectorAll('.stack-accordion-3 .accordion-icon');
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

          // Toggle the clicked header and content
          content.classList.toggle('active');
          icon.classList.toggle('open');
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  //Slide modal
  const showModalBtn = document.getElementById("show-modal");
  const showModal = document.getElementById("slide");
  const sheetOverlay = document.getElementById("slide");
  const dragBtn = document.getElementById("drag-btn");

  const showSlideModal = () => {
      showModal.classList.add("show");
  }

  const hideSlideModal = () => {
      showModal.classList.remove("show");
  }

  const hideModalOnBtnClick = () => {
    hideSlideModal();
  }

  showModalBtn.addEventListener("click", showSlideModal);
  sheetOverlay.addEventListener("click", hideSlideModal);
  dragBtn.addEventListener("click", hideModalOnBtnClick);
});

document.addEventListener('DOMContentLoaded', function () {
  //Tab1
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.stack-tab-content');

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const tabId = button.dataset.tab;

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
  }
});

// Display the content of Tab 1 by default
tabContents[0].classList.add('show');
});

document.addEventListener('DOMContentLoaded', function () {
  //tab 2
const slideButtons = document.querySelectorAll('.slide-tab-button');
const slideContents = document.querySelectorAll('.slide-tab-content');
const slideBar = document.querySelector('.slide-bar');

slideButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;

        slideButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        slideContents.forEach(content => {
            content.classList.remove('show');
        });

        button.classList.add('active');
        document.getElementById(tabId).classList.add('show');

        // Move the slide bar to the selected tab with more noticeable effect
        const buttonWidth = button.offsetWidth;
        const slideBarOffset = index * buttonWidth;
        slideBar.style.transform = `translateX(${slideBarOffset}px)`;

        // Add a small animation to the slide bar
        slideBar.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)';

        // Slide the tab content with fade effect
        slideContents.forEach((content, contentIndex) => {
            if (contentIndex === index) {
                content.style.transition = 'opacity 1s ease-in-out'; // Use opacity for fade effect
                content.style.opacity = 1; // Fade into view
            } else {
                content.style.transition = 'opacity 1s ease-in-out'; // Use opacity for fade effect
                content.style.opacity = 0; // Fade out of view
            }
        });
    });

    // Display the content of Tab 1 by default
    if (index === 0) {
        button.classList.add('active');
    }
});

// Display the content of Tab 1 by default
slideContents[0].classList.add('show');
});

document.addEventListener('DOMContentLoaded', function () {
  //Command box
  const input = document.getElementById("custom-input");
      const commandItems = document.querySelectorAll(".command-item");
  
      // Add an event listener to the input field for real-time filtering
      input.addEventListener("input", filterCommands);
  
      function filterCommands() {
          const searchText = input.value.toLowerCase();
  
          // Loop through each command item
          commandItems.forEach(item => {
              const itemText = item.querySelector("span").textContent.toLowerCase();
              const shouldDisplay = itemText.includes(searchText);
  
              // Display or hide the item based on the search text
              item.style.display = shouldDisplay ? "flex" : "none";
          });
  }
});

document.addEventListener('DOMContentLoaded', function () {
//Close Notice

// Get all close icons with the class name 'close-button'
const closeIcons = document.querySelectorAll('.close');

  // Add a click event listener to each close icon
  closeIcons.forEach(closeIcon => {
      closeIcon.addEventListener('click', function() {
          // Get the parent element of the close icon (e.g., 'stack-error-toast', 'stack-success-toast', etc.)
          const parentElement = this.closest('.stack-error-toast, .stack-success-toast, .stack-warning-toast, .stack-info-toast');
          
          // Check if a parent element was found
          if (parentElement) {
              // Hide the parent element
              parentElement.style.display = 'none';
          }
      });
  });

});

document.addEventListener('DOMContentLoaded', function () {
//Sortable List
const sortableList = document.querySelector(".draggable-list");
const items = sortableList.querySelectorAll(".item");

let draggingItem = null;

items.forEach(item => {
  item.addEventListener("dragstart", () => {
    draggingItem = item;
    setTimeout(() => item.classList.add("dragging"), 0);
  });

  item.addEventListener("dragend", () => {
    draggingItem = null;
    item.classList.remove("dragging");
  });

  item.addEventListener("dragover", e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(sortableList, e.clientY);
    const currentDraggedElement = document.querySelector(".dragging");
    if (afterElement == null) {
      sortableList.appendChild(currentDraggedElement);
    } else {
      sortableList.insertBefore(currentDraggedElement, afterElement);
    }
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".item:not(.dragging)")];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

 // Retrieve all the close icon elements
 const closeIcons = document.querySelectorAll('.close');

 // Function to close the notification
 const closeNotification = (event) => {
     const closeIcon = event.target;
     const parentNotification = closeIcon.parentNode.parentNode;
     parentNotification.style.display = 'none'; // Hide the notification
 };

 // Add a click event listener to each close icon
 closeIcons.forEach(icon => {
     icon.addEventListener('click', closeNotification);
 });

 // Function to handle page reload
 const handleReload = () => {
     // Show all the error notifications on reload
     const errorNotifications = document.querySelectorAll('.stack-error-toast, .stack-success-toast, .stack-warning-toast, .stack-info-toast');
     errorNotifications.forEach(notification => {
         notification.style.display = 'block';
     });
 };

 // Add a beforeunload event listener to handle page reload
 window.addEventListener('beforeunload', handleReload);

});

document.addEventListener('DOMContentLoaded', function () {
//Filter Table 
const table = document.getElementById('data-table');
const searchInput = document.getElementById('search-input');
const pagination = document.getElementById('pagination');
const rowsPerPageSelect = document.getElementById('rows-per-page');

let currentPage = 1;
let rowsPerPage = 4;

function filterTable() {
    const searchTerm = searchInput.value.toLowerCase();
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.getElementsByTagName('td');
        let found = false;

        for (let cell of cells) {
            if (cell.innerHTML.toLowerCase().includes(searchTerm)) {
                found = true;
                break;
            }
        }

        row.style.display = found ? '' : 'none';
    }

    if (searchTerm === '') {
        currentPage = 1;
    }

    updatePagination();
    showRows();
}

function updatePagination() {
    const rows = table.getElementsByTagName('tr');
    const totalPages = Math.ceil((rows.length - 1) / rowsPerPage);

    let paginationHtml = '';

    if (totalPages > 1) {
        paginationHtml += `<button class="page-button" data-page="1">First</button>`;
        for (let i = 1; i <= totalPages; i++) {
            paginationHtml += `<button class="page-button" data-page="${i}">${i}</button>`;
        }
        paginationHtml += `<button class="page-button" data-page="${totalPages}">Last</button>`;
    }

    pagination.innerHTML = paginationHtml;

    const pageButtons = document.querySelectorAll('.page-button');
    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('disabled')) {
                return;
            }

            currentPage = parseInt(button.getAttribute('data-page'));
            showRows();
            updatePagination();
        });
    });

    if (currentPage === 1) {
        pageButtons[0].classList.add('disabled');
    } else {
        pageButtons[0].classList.remove('disabled');
    }

    if (currentPage === totalPages) {
        pageButtons[pageButtons.length - 1].classList.add('disabled');
    } else {
        pageButtons[pageButtons.length - 1].classList.remove('disabled');
    }
}

function showRows() {
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (i >= (currentPage - 1) * rowsPerPage + 1 && i <= currentPage * rowsPerPage) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

searchInput.addEventListener('input', filterTable);

rowsPerPageSelect.addEventListener('change', () => {
    if (rowsPerPageSelect.value === 'all') {
        rowsPerPage = table.rows.length - 1;
    } else {
        rowsPerPage = parseInt(rowsPerPageSelect.value);
    }
    currentPage = 1;
    showRows();
    updatePagination();
});

// Initial setup
filterTable();
updatePagination();
showRows();

});

document.addEventListener('click', function(event) {
  /* Card cover JS Code */
  var target = event.target;
  var card = target.closest('.stackui-card-4');
  if (card) {
    var cardReveal = card.querySelector('.card-cover');
    var initialOverflow = card.getAttribute('data-initial-overflow');
    if (initialOverflow === null) {
      initialOverflow = card.style.overflow || '';
      card.setAttribute('data-initial-overflow', initialOverflow);
    }
    var cardTitle = cardReveal.querySelector('.cover-card-title');
    var closeIcon = cardTitle.querySelector('.fa-xmark');

    if (target === cardTitle || target === closeIcon) {
      // Make Reveal animate up and display none
      cardReveal.style.transform = 'translateY(-100%)';
      cardReveal.style.transition = 'transform 0.3s';
      setTimeout(function() {
        cardReveal.style.display = 'none';
        card.style.overflow = initialOverflow;
      }, 200);
    } else if (target.classList.contains('activator') || target.matches('.activator i')) {
      // Make Reveal animate down and display block
      card.style.overflow = 'hidden';
      cardReveal.style.display = 'block';
      cardReveal.style.transform = 'translateY(0)';
      cardReveal.style.transition = 'transform 0.3s';
      setTimeout(function() {
        cardReveal.style.transform = 'translateY(-100%)';
      }, 10);
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  /* Card lightbox js code */
  var lightboxOverlay = document.querySelector('.lightbox-overlay');
  var lightboxContent = document.querySelector('.lightbox-content');
  var lightboxImage = document.querySelector('.lightbox-image');
  var lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

  lightboxTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      var imageSrc = this.getAttribute('src');
      lightboxImage.setAttribute('src', imageSrc);
      lightboxOverlay.style.display = 'flex';
      setTimeout(function() {
        lightboxOverlay.style.opacity = '1';
        lightboxContent.style.display = 'block';
        setTimeout(function() {
          lightboxContent.style.opacity = '1';
          lightboxImage.classList.add('zoomed-in');
        }, 50);
      }, 50);
    });
  });

  lightboxOverlay.addEventListener('click', function() {
    lightboxContent.style.opacity = '0';
    lightboxImage.classList.remove('zoomed-in');
    setTimeout(function() {
      lightboxContent.style.display = 'none';
      lightboxOverlay.style.opacity = '0';
      setTimeout(function() {
        lightboxOverlay.style.display = 'none';
      }, 300);
    }, 300);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const videoTrigger = document.querySelector(".video-trigger");
  const videoModal = document.getElementById("videoModal");
  const closeButton = document.getElementById("closeButton");

  videoTrigger.addEventListener("click", function() {
      videoModal.style.display = "block";
  });

  closeButton.addEventListener("click", function() {
      videoModal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
      if (event.target === videoModal) {
          videoModal.style.display = "none";
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  //Slider
  const slider = document.querySelector('.slider');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  let counter = 0;
  const sliderWidth = slider.clientWidth; 

  function slide(direction) {
      if (direction === 'left') {
          counter--;
      } else {
          counter++;
      }
      if (counter < 0) {
          counter = slider.children.length - 1;
      } else if (counter >= slider.children.length) {
          counter = 0;
      }
      slider.style.transform = `translateX(-${counter * sliderWidth}px)`;
  }

  leftArrow.addEventListener('click', () => slide('left'));
  rightArrow.addEventListener('click', () => slide('right'));

  const screenWidth = window.innerWidth;
  const slidingInterval = screenWidth > 768 ? 3000 : 5000;
  setInterval(() => slide('right'), slidingInterval);
  });

document.addEventListener('DOMContentLoaded', function () {
//Carousel
const carousel = document.querySelector(".stack-carousel-container .carousel");
const firstImg = carousel.querySelector("img:first-child");
const arrowIcons = document.querySelectorAll(".stack-carousel-container .carousel-arrow");
const CAROUSEL_ITEM_MARGIN = 14;
const AUTO_SLIDE_INTERVAL = 3000; // Adjust the interval as needed

let isDragStart = false;
let prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
};

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        const firstImgWidth = firstImg.clientWidth + CAROUSEL_ITEM_MARGIN;
        carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(showHideIcons, 60);
    });
});

const autoSlide = () => {
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
    } else {
        const firstImgWidth = firstImg.clientWidth + CAROUSEL_ITEM_MARGIN;
        carousel.scrollLeft += firstImgWidth;
    }
    showHideIcons();
};

let autoSlideIntervalId = setInterval(autoSlide, AUTO_SLIDE_INTERVAL);

const dragStart = e => {
    isDragStart = true;
    clearInterval(autoSlideIntervalId);
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
};

const dragStop = () => {
    isDragStart = false;
    if (!isDragging) {
        isDragging = false;
        autoSlideIntervalId = setInterval(autoSlide, AUTO_SLIDE_INTERVAL);
    }
};

let isDragging = false;

const dragging = e => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
};

const handleMouseEvent = event => {
    switch (event.type) {
        case "mousedown":
            dragStart(event);
            document.addEventListener("mousemove", dragging);
            document.addEventListener("mouseup", handleMouseUp);
            break;
        case "mouseup":
            dragStop();
            document.removeEventListener("mousemove", dragging);
            document.removeEventListener("mouseup", handleMouseUp);
            break;
    }
};

const handleMouseUp = () => {
    document.removeEventListener("mousemove", dragging);
    document.removeEventListener("mouseup", handleMouseUp);
};

carousel.addEventListener("mousedown", handleMouseEvent);
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("touchend", dragStop);
});


document.addEventListener('DOMContentLoaded', function () {
  //Dragging tabs slider
  const tabs = document.querySelectorAll(".stack-tab-container a.tab");
  const scrollRightArrow = document.querySelector(".stack-tab-container .right-arrow");
  const scrollLeftArrow = document.querySelector(".stack-tab-container .left-arrow");
  const tabList = document.querySelector(".stack-tab-container ul.tabs");
  const leftArrowContainer = document.querySelector(".stack-tab-container .left-arrow");
  const rightArrowContainer = document.querySelector(".stack-tab-container .right-arrow");
  
  // Function to remove "active" class from all tabs
  const removeActiveClasses = () => {
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
  };
  
  //Function to activate the left scroll button
  const manageLeftbtn = () => {
      if(tabList.scrollLeft >= 20) {
        leftArrowContainer.classList.add("active");
      } else {
        leftArrowContainer.classList.remove("active");
      }
  
      let maxScroll = tabList.scrollWidth - tabList.clientWidth - 20
      if(tabList.scrollLeft >= maxScroll) {
        rightArrowContainer.classList.remove("active");
      } else {
        rightArrowContainer.classList.add("active");
      }
  };
  
  // Add "active" class to clicked tab and remove from others
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      event.preventDefault(); 
      removeActiveClasses();
      tab.classList.add("active");
    });
  });
  
  // Scroll the tab list to the right
  scrollRightArrow.addEventListener("click", () => {
    tabList.scrollLeft += 300;
    manageLeftbtn();
  });
  
  // Scroll the tab list to the left
  scrollLeftArrow.addEventListener("click", () => {
    tabList.scrollLeft -= 300;
    manageLeftbtn();
  });
  
  // Listen to scroll event to activate the buttons 
  tabList.addEventListener("scroll", manageLeftbtn);
  
  
  // Adding the dragging functionality
  let drag = false;
  const dragging = (e) => { // Add the event parameter
    if (!drag) return;
    tabList.classList.add("dragging");
    tabList.scrollLeft -= e.movementX;
  };
  
  tabList.addEventListener("mousedown", () => {
    drag = true;
    tabList.addEventListener("mousemove", dragging); // Add mousemove listener here
  });
  
  document.addEventListener("mouseup", () => {
    drag = false;
    tabList.removeEventListener("mousemove", dragging); // Remove mousemove listener here
    tabList.classList.remove("dragging");
  });
  
  //Flyout Options
  let flyoutPoint = document.querySelector(".flyout-point"),
      subOpions = document.querySelectorAll(".sub-options > div");
  
  flyoutPoint.addEventListener("click", showOptions);
  
  function showOptions() {
  
      flyoutPoint.classList.toggle("active");
  
      subOpions.forEach(circle => {
          circle.classList.toggle("show");
      })
  };
  });

document.addEventListener('DOMContentLoaded', function () {
  //range
  var rangeInput = document.querySelector(".range-slider");
  rangeInput.addEventListener("input", () => {
      var value = rangeInput.value;
      var number = document.querySelector(".range-num");
      var line = document.querySelector(".range-line");

      number.innerHTML = value;
      line.style.width = value + '%';
  });
});

document.addEventListener('DOMContentLoaded', function () {
//Trending ticker
const trendingAll = document.querySelectorAll(".stack-trend-container .trending");
let currentActive = 0;
let duration = 3000; // Adjust the duration as needed
let totalTrends = trendingAll.length;

const removeAllActive = () => {
    trendingAll.forEach(n => {
        n.classList.remove("active");
    });
};

const changeTrend = () => {
    if (currentActive >= totalTrends - 1) {
        currentActive = 0;
    } else {
        currentActive += 1;
    }

    removeAllActive();
    trendingAll[currentActive].classList.add("active");
};

setInterval(changeTrend, duration);
});

document.addEventListener('DOMContentLoaded', function () {
  // Calendar
  const daysTag = document.querySelector(".days");
  const currentDate = document.querySelector(".current-date");
  const prevIcon = document.getElementById("prev");
  const nextIcon = document.getElementById("next");

  // Storing full names of months in an array
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Initialize the date
  let date = new Date();

  function renderCalendar() {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDateOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth(), lastDateOfMonth).getDay();
    const lastDateOfLastMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    let liTag = "";

    // Create li elements for the previous month's days
    for (let i = firstDayOfMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    // Create li elements for the current month's days
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday = i === date.getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();
      liTag += `<li class="${isToday ? "active" : ""}">${i}</li>`;
    }

    // Create li elements for the next month's days
    for (let i = lastDayOfMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[date.getMonth()]} ${date.getFullYear()}`;
    daysTag.innerHTML = liTag;
  }

  renderCalendar();

  // Add click event listeners to previous and next icons
  prevIcon.addEventListener("click", function () {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  nextIcon.addEventListener("click", function () {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });
});

})(); 