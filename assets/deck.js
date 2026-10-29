(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  if (!slides.length) return;

  const counter = document.getElementById("counter");
  const studyBtn = document.getElementById("study-toggle");
  let index = 0;

  function hashIndex() {
    const m = /^#s(\d+)$/.exec(location.hash);
    if (!m) return 0;
    return Math.max(0, Math.min(slides.length - 1, Number(m[1]) - 1));
  }

  function render() {
    const study = document.body.classList.contains("mode-study");
    slides.forEach((slide, i) => {
      slide.hidden = study ? false : i !== index;
    });
    if (counter) counter.textContent = (index + 1) + " / " + slides.length;
    document.documentElement.style.setProperty(
      "--deck-progress",
      ((index + 1) / slides.length * 100) + "%"
    );
    const nextHash = "#s" + (index + 1);
    if (location.hash !== nextHash) history.replaceState(null, "", nextHash);
    if (study) slides[index].scrollIntoView({ block: "start", behavior: "smooth" });
  }

  function go(n) {
    index = Math.max(0, Math.min(slides.length - 1, n));
    render();
  }

  document.getElementById("prev")?.addEventListener("click", () => go(index - 1));
  document.getElementById("next")?.addEventListener("click", () => go(index + 1));

  document.querySelectorAll("[data-go]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-go");
      const el = document.getElementById(target);
      const i = slides.indexOf(el);
      if (i >= 0) go(i);
    });
  });

  studyBtn?.addEventListener("click", () => {
    document.body.classList.toggle("mode-study");
    const on = document.body.classList.contains("mode-study");
    studyBtn.textContent = on ? "Presentation view" : "Study view";
    studyBtn.setAttribute("aria-pressed", on ? "true" : "false");
    render();
  });

  document.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-reveal]");
    if (!btn) return;
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    if (!panel) return;
    panel.hidden = !panel.hidden;
    btn.textContent = panel.hidden ? "Show answer" : "Hide answer";
  });

  document.addEventListener("keydown", (event) => {
    const tag = event.target && event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      go(index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      go(index - 1);
    } else if (event.key === "Home") {
      go(0);
    } else if (event.key === "End") {
      go(slides.length - 1);
    }
  });

  index = hashIndex();
  render();
})();
