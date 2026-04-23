
function toggleDark() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkmode", "on");
  } else {
    localStorage.setItem("darkmode", "off");
  }
}

document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // DARKMODE
  // =========================
  if (localStorage.getItem("darkmode") === "on") {
    document.body.classList.add("dark");
  }

  // =========================
  // NAVIGATION LADEN
  // =========================
  fetch("nav.html")
    .then(res => res.text())
    .then(data => {
      let nav = document.getElementById("nav");
      if (nav) {
        nav.innerHTML = data;
      }
    });

  // =========================
  // BACK BUTTON (AUTO)
  // =========================
  const isHome =
    location.pathname.endsWith("index.html") ||
    location.pathname === "/" ||
    location.pathname.endsWith("/");

  if (!isHome && history.length > 1) {
    const backBtn = document.createElement("div");
    backBtn.className = "back-box";
    backBtn.innerHTML = "⬅ Zurück";

    backBtn.onclick = function () {
      history.back();
    };

    document.body.appendChild(backBtn);
  }

});

// =========================
// ADMIN LOGIN
// =========================
function openAdmin() {
  let pw = prompt("🔐 Admin Passwort eingeben:");

  if (pw === "1234Jl2009Hallo12") {
    window.location.href = "admin.html";
  } else {
    alert("Falsches Passwort!");
  }
}