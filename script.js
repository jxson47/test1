function toggleDark() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkmode", "on");
  } else {
    localStorage.setItem("darkmode", "off");
  }
}

document.addEventListener("DOMContentLoaded", function () {

  // Darkmode laden
  if (localStorage.getItem("darkmode") === "on") {
    document.body.classList.add("dark");
  }

  // Navigation laden
  fetch("nav.html")
    .then(res => res.text())
    .then(data => {
      let nav = document.getElementById("nav");
      if (nav) {
        nav.innerHTML = data;
      }
    });

  // merkt sich Besuch + zeigt Back Button nur wenn Navigation passiert ist
  const cameFromPage = sessionStorage.getItem("visited");

  if (cameFromPage) {
    const backBtn = document.createElement("div");
    backBtn.className = "back-box";
    backBtn.innerHTML = "⬅ Zurück";

    backBtn.onclick = function () {
      history.back();
    };

    document.body.appendChild(backBtn);
  }

  sessionStorage.setItem("visited", "true");

});

// Admin Login
function openAdmin() {
  let pw = prompt("🔐 Admin Passwort eingeben:");

  if (pw === "1234Jl2009Hallo12") {
    window.location.href = "admin.html";
  } else {
    alert("Falsches Passwort!");
  }
}