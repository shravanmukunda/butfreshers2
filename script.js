// ============================================
// GLOBAL STATE & CONFIG
// ============================================

const CONFIG = {
  launchDate: new Date('2025-11-05T17:00:00+05:30'),
  ticketURL: 'https://rzp.io/rzp/LkjUN81'
};

let state = {
  ticketsLive: true
};

// ============================================
// GSAP ANIMATIONS SETUP
// ============================================

// Removed ScrollTrigger registration and animations

window.addEventListener('load', () => {
  startCountdown();
});

// Removed initAnimations function that was using ScrollTrigger

// ============================================
// COUNTDOWN TIMER
// ============================================

function startCountdown() {
  setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = CONFIG.launchDate - now;

  if (distance <= 0) {
    state.ticketsLive = true;
    updateUIForTicketsLive();
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update countdown display
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function updateUIForTicketsLive() {
  state.ticketsLive = true;

  // Hide countdown display
  const countdownDisplay = document.getElementById('countdownDisplay');
  if (countdownDisplay) {
    countdownDisplay.style.display = 'none';
  }

  // Update title
  const title = document.getElementById('countdownTitle');
  if (title) {
    title.textContent = 'EARLY BIRDS ARE LIVE!';
  }

  // Enable buttons
  updateButtonStates();
}

// ============================================
// BUTTON MANAGEMENT
// ============================================

function updateButtonStates() {
  const heroBtn = document.getElementById('heroBtn');
  const aboutBtn = document.getElementById('aboutBtn');

  if (state.ticketsLive) {
    heroBtn.disabled = false;
    aboutBtn.disabled = false;
    heroBtn.classList.remove('disabled');
    aboutBtn.classList.remove('disabled');
  }
}

function handleCTAClick() {
  if (!state.ticketsLive) {
    showTooltip();
    return;
  }
  window.open(CONFIG.ticketURL, '_blank');
}

function showTooltip() {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'block';

  setTimeout(() => {
    tooltip.style.display = 'none';
  }, 2000);
}

// ============================================
// FAQ ACCORDION
// ============================================

function toggleFAQ(button) {
  const answer = button.nextElementSibling;
  const isOpen = answer.classList.contains('open');

  // Close all other FAQs
  document.querySelectorAll('.faq-answer.open').forEach((item) => {
    if (item !== answer) {
      item.classList.remove('open');
      item.previousElementSibling.classList.remove('active');
    }
  });

  // Toggle current FAQ
  button.classList.toggle('active');
  answer.classList.toggle('open');
}

// ============================================
// LIGHTBOX
// ============================================

// Lightbox functionality removed as gallery section was removed

// ============================================
// KEYBOARD ACCESSIBILITY
// ============================================

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Lightbox removed
  }
});

// ============================================
// SMOOTH SCROLL BEHAVIOR - REMOVED
// ============================================

// Removed smooth scroll behavior for anchor links

// ============================================
// SCROLL REVEAL ON LOAD - REMOVED
// ============================================

// Removed scroll event listener for parallax effect

// ============================================
// THEME TOGGLE (OPTIONAL)
// ============================================

function toggleSound() {
  console.log('Sound toggle - implement with Web Audio API if needed');
}

// ============================================
// FORM VALIDATION (IF NEEDED)
// ============================================

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}