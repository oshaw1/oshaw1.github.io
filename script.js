const cardContainer = document.querySelector('.card-container');
const cardColumns = document.querySelectorAll('.card-column');
const scrollSpeed = 2; // Adjust this value to control the scroll speed

const handleScroll = () => {
  const containerRect = cardContainer.getBoundingClientRect();
  const containerWidth = containerRect.width / 1.15; // Adjust for scaling
  const containerLeft = containerRect.left / 1.15; // Adjust for scaling
  const containerRight = containerRect.right / 1.15; // Adjust for scaling

  cardColumns.forEach((column) => {
    const columnRect = column.getBoundingClientRect();
    const columnLeft = columnRect.left / 1.15; // Adjust for scaling
    const columnRight = columnRect.right / 1.15; // Adjust for scaling

    const isPartiallyVisible =
      (columnLeft < containerLeft && columnRight > containerLeft) ||
      (columnLeft < containerRight && columnRight > containerRight);

    if (isPartiallyVisible) {
      column.style.filter = 'blur(10px)'; // Apply blur effect
    } else {
      column.style.filter = 'none'; // Remove blur effect
    }
  });
};

const handleWheel = (e) => {
  if (e.deltaY !== 0) {
    e.preventDefault();
    cardContainer.scrollLeft += e.deltaY * scrollSpeed / 1.15; // Adjust for scaling
    handleScroll(); // Call handleScroll after scrolling
  }
};

window.addEventListener('wheel', handleWheel);
window.addEventListener('resize', handleScroll);
handleScroll(); // Call the function initially

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