function toggleDark() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkmode", "on");
  } else {
    localStorage.setItem("darkmode", "off");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("darkmode") === "on") {
    document.body.classList.add("dark");
  }
});

function openAdmin() {
  let pw = prompt("🔐 Admin Passwort eingeben:");

  if (pw === "1234Jl2009Hallo12") {
    window.location.href = "admin.html";
  } else {
    alert("Falsches Passwort!");
  }
}