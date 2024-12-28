// script.js

// Validasi Form Transaksi
document.getElementById("formTransaksi").addEventListener("submit", function(event) {
  const nama = document.getElementById("nama").value;
  const jumlah = document.getElementById("jumlah").value;
  const kategori = document.getElementById("kategori").value;

  if (!nama || !jumlah || !kategori) {
    alert("Semua input harus diisi!");
    event.preventDefault();
  }
});

// Validasi Form Login
document.getElementById("formLogin").addEventListener("submit", function(event) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Username dan password harus diisi!");
    event.preventDefault();
  }
});