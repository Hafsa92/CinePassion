const liensJours = document.querySelectorAll(".jours a"); 

liensJours.forEach((lien, index) => {
  if (index >= 2) {
    const date = new Date();
    date.setDate(date.getDate() + index);

    const options = { weekday: "short", day: "numeric", month: "short" };
    lien.textContent = date.toLocaleDateString("fr-FR", options).toUpperCase();
  }
});