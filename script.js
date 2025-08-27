


  // Filter buttons
  const buttons = document.querySelectorAll('.filter-bar button');
  const images = document.querySelectorAll('.masonry img');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      images.forEach(img => {
        if (filter === 'all' || img.classList.contains(filter)) {
          img.classList.remove('hidden');
        } else {
          img.classList.add('hidden');
        }
      });
    });
  });

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const topbar = document.getElementById('topbar');

  // Toggle topbar when clicking the button
  menuBtn.addEventListener('click', (e) => {
    topbar.classList.toggle('active');
    menuBtn.classList.toggle('active');
    e.stopPropagation(); // Prevent the click from bubbling to document
  });

  // Close topbar when clicking outside
  document.addEventListener('click', (e) => {
    // If topbar is open and click is NOT on topbar or button
    if (topbar.classList.contains('active') && 
        !topbar.contains(e.target) &&
        e.target !== menuBtn) {
      topbar.classList.remove('active');
      menuBtn.classList.remove('active');
    }
  });
});