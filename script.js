// Get the login button element
const loginButton = document.querySelector('.hero .btn');

// Add a click event listener to the login button
loginButton.addEventListener('click', () => {
  // Redirect the user to the login page
  window.location.href = 'login.html';
});

// Get the accounts section element
const accountsSection = document.querySelector('.accounts');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Check if the user has scrolled to the accounts section
  if (isScrolledIntoView(accountsSection)) {
    // Add a class to the accounts section to highlight it
    accountsSection.classList.add('highlight');
  } else {
    // Remove the highlight class from the accounts section
    accountsSection.classList.remove('highlight');
  }
});

// Function to check if an element is scrolled into view
function isScrolledIntoView(element) {
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;

  return (elementTop >= 0 && elementTop <= windowHeight) || (elementBottom >= 0 && elementBottom <= windowHeight);
}