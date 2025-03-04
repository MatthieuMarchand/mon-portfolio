document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById(
    "dark-mode-button",
  ) as HTMLButtonElement;

  const portrait = document.getElementById("portrait") as HTMLImageElement;

  // Vérifier si le mode sombre est activé dans le localStorage et appliquer la classe si nécessaire
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.documentElement.classList.add("dark-mode");
    button.classList.add("dark-mode");
    portrait?.classList.add("dark-mode");
  }

  button.addEventListener("click", function () {
    // --> Toggle les classes "dark-mode"

    // balise HTML
    document.documentElement.style.transition = "all 0.5s ease-in-out";
    document.documentElement.classList.toggle("dark-mode");

    // button carré
    button.style.transition = "all 1s ease";
    button.classList.toggle("dark-mode");

    // image portrait
    portrait?.classList.toggle("dark-mode");

    // Sauvegarder l'état du mode sombre dans localStorage
    if (document.documentElement.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.removeItem("dark-mode");
    }
  });
});
