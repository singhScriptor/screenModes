const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    stars.forEach(star => {
        star.style.setProperty('--random-top', Math.random());
        star.style.setProperty('--fall-duration', `${6 + Math.random() * 6}s`);
        star.style.setProperty('--fall-delay', `${Math.random() * 10}s`);
    });
});
