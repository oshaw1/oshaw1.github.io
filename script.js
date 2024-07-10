const cardContainer = document.querySelector('.card-container');
const cardColumns = document.querySelectorAll('.card-column');
const scrollSpeed = 2.5;

const handleScroll = () => {
  const containerRect = cardContainer.getBoundingClientRect();
  const containerWidth = containerRect.width / 1.15; 
  const containerLeft = containerRect.left / 1.15; 
  const containerRight = containerRect.right / 1.15; 

  cardColumns.forEach((column) => {
    const columnRect = column.getBoundingClientRect();
    const columnLeft = columnRect.left / 1.15; 
    const columnRight = columnRect.right / 1.15; 

    const isPartiallyVisible =
      (columnLeft < containerLeft && columnRight > containerLeft) ||
      (columnLeft < containerRight && columnRight > containerRight);

    if (isPartiallyVisible) {
      column.style.filter = 'blur(10px)'; 
    } else {
      column.style.filter = 'none'; 
    }
  });
};

const handleWheel = (e) => {
  if (e.deltaY !== 0 || e.deltaX !== 0) {
    e.preventDefault();
    cardContainer.scrollLeft += (e.deltaY + e.deltaX) * scrollSpeed / 1.15; 
    handleScroll(); 
  }
};

window.addEventListener('wheel', handleWheel);
window.addEventListener('resize', handleScroll);
handleScroll(); 
const emailLogo = document.getElementById('emailLogo');
const copyMessage = document.getElementById('copyMessage');

emailLogo.addEventListener('click', () => {
  const email = 'o.shaw01942@gmail.com'; // Replace with your email address
  navigator.clipboard.writeText(email)
    .then(() => {
      copyMessage.textContent = 'Copied email to clipboard!';
      setTimeout(() => {
        copyMessage.textContent = '';
      }, 2000);
    })
    .catch((error) => {
      console.error('Failed to copy email:', error);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        const randomColor = getRandomColor();
        card.style.setProperty('--hover-color', randomColor);
      });
  
      card.addEventListener('mouseleave', function() {
        card.style.removeProperty('--hover-color');
      });
    });
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });

let touchStartX = 0;
let touchEndX = 0;

cardContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

cardContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchStartX - touchEndX;
  if (Math.abs(swipeDistance) > 50) {
    cardContainer.scrollLeft += swipeDistance;
    handleScroll();
  }
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const content = card.querySelector('.card-content') || card.querySelector('.fixed-card-content');
    if (content) {
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
  });
});