// // Apply saved theme on load
// const userTheme = localStorage.getItem("theme");
// if (userTheme === "dark") {
//     document.body.classList.add("dark");
// }

// document.getElementById("saveThemeBtn").addEventListener("click", () => {
//     document.body.classList.toggle("dark");

//     // Save theme preferences
//     const theme = document.body.classList.contains("dark") ? "dark" : "light";
//     localStorage.setItem("theme", theme);
// });

// document.getElementById("animateBtn").addEventListener("click", () => {
//     const btn = document.getElementById("animateBtn");
//     btn.classList.add("animate");

//     // Remove animation class after it's done so it can be re-triggered
//     setTimeout(() => {
//         btn.classList.remove("animate");
//     }, 500);
// });

const colors = ["#ffffff", "#f8b400", "#6a0572", "#008cba", "#222222"]; // 5 colors
let currentIndex = parseInt(localStorage.getItem("colorIndex")) || 0;

// Apply saved color on load
document.body.style.backgroundColor = colors[currentIndex];
document.body.style.color = currentIndex === 4 ? "#fff" : "#000"; // Adjust text for dark bg

document.getElementById("saveThemeBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % colors.length;
  document.body.style.backgroundColor = colors[currentIndex];
  document.body.style.color = currentIndex === 4 ? "#fff" : "#000"; // contrast

  localStorage.setItem("colorIndex", currentIndex);
});

document.getElementById("animateBtn").addEventListener("click", () => {
  const btn = document.getElementById("animateBtn");
  btn.classList.add("animate");

  setTimeout(() => {
    btn.classList.remove("animate");
  }, 500);
});
