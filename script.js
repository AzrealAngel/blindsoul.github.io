window.addEventListener("load", () => {
  const topbar = document.querySelector(".topbar");
  let lastScrollY = window.scrollY;
  let idleTimeout;
  let ignoreScroll = false;


  // --- Show topbar after 3s on load ---
  setTimeout(() => {
    showTopbar();
  }, 3000);

  // --- Idle timer logic ---
  function resetIdleTimer() {
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => {
      hideTopbar(); // hide if idle
    }, 10000); // 3s idle before hiding
  }

  // --- Show & hide helper functions ---
  function showTopbar() {
    topbar.style.opacity = "1";
    topbar.style.transform = "translate(-50%, 0)";
  }

  function hideTopbar() {
    topbar.style.opacity = "0";
    topbar.style.transform = "translate(-50%, -100%)";
  }

  // --- Scroll show/hide ---
  window.addEventListener("scroll", () => {
    if (ignoreScroll) return;
    if (window.scrollY > lastScrollY) {
      // scrolling down → hide immediately
      hideTopbar();
    } else {
      // scrolling up → show immediately
      showTopbar();
    }
    lastScrollY = window.scrollY;

    // reset idle timer after every scroll
    resetIdleTimer();
  });

  // start idle timer when page loads
  resetIdleTimer();

    const navButtons = document.querySelectorAll(".topbar button");
    navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        ignoreScroll = true;   // temporarily disable scroll hiding
        showTopbar();          // force it to stay visible
        resetIdleTimer();      // <-- NEW: prevent idle hiding

        setTimeout(() => {
        ignoreScroll = false; // re-enable after scroll settles
        resetIdleTimer();
        }, 5000); // adjust if your smooth scroll lasts longer
    });
    });  


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



});