function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    darkModeToggle.innerHTML = body.classList.contains("dark-mode") ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
  }