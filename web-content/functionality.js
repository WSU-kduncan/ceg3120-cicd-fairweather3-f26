// Runs on every page, but only wires up the counter when it exists (counter.html).
document.addEventListener("DOMContentLoaded", () => {
  const valueEl = document.getElementById("counter-value");
  const increaseBtn = document.getElementById("increase");
  const decreaseBtn = document.getElementById("decrease");

  if (!valueEl || !increaseBtn || !decreaseBtn) return;

  let count = 0;

  function render() {
    valueEl.textContent = count;
    valueEl.classList.add("is-bumping");
    setTimeout(() => valueEl.classList.remove("is-bumping"), 120);
  }

  function change(amount) {
    count += amount;
    render();
  }

  increaseBtn.addEventListener("click", () => change(1));
  decreaseBtn.addEventListener("click", () => change(-1));

  // Keyboard shortcuts: Up/Right arrow counts up, Down/Left arrow counts down.
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowRight") change(1);
    if (event.key === "ArrowDown" || event.key === "ArrowLeft") change(-1);
  });
});