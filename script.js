const cardContainer = document.querySelector('.card-container');
const cardColumns = document.querySelectorAll('.card-column');
const scrollSpeed = 2; // Adjust this value to control the scroll speed

const handleScroll = () => {
  const containerRect = cardContainer.getBoundingClientRect();
  const containerWidth = containerRect.width;
  const containerLeft = containerRect.left;
  const containerRight = containerRect.right;

  cardColumns.forEach((column) => {
    const columnRect = column.getBoundingClientRect();
    const columnLeft = columnRect.left;
    const columnRight = columnRect.right;

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
  if (e.deltaY !== 0) {
    e.preventDefault();
    cardContainer.scrollLeft += e.deltaY * scrollSpeed;
    handleScroll(); 
  }
};

window.addEventListener('wheel', handleWheel);
window.addEventListener('resize', handleScroll);
handleScroll(); 