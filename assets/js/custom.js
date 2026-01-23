document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".toggle-abstract").forEach(btn => {
    btn.addEventListener("click", function() {
      let abs = btn.closest(".paper-actions").nextElementSibling;
      abs.style.display = (abs.style.display === "none") ? "block" : "none";
      btn.textContent = (abs.style.display === "none") ? "Show abstract" : "Hide abstract";
    });
  });
});
