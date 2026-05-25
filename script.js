function daftarNewsletter() {
  var inputEmail  = document.getElementById('inputEmail');
  var pesanSukses = document.getElementById('pesanSukses');
  var email       = inputEmail.value.trim();

  if (email === '' || !email.includes('@') || !email.includes('.')) {
    alert('Masukkan email yang valid dulu ya!');
    return;
  }

  pesanSukses.style.display = 'block';
  inputEmail.value = '';

  setTimeout(function() {
    pesanSukses.style.display = 'none';
  }, 4000);
}


var daftarMakanan = [
  { nama:"Rawon Surabaya",         gambar:"https://i.pinimg.com/736x/e2/7d/fb/e27dfba4fd99f35994950bc846e9a351.jpg",      rating:4.9, harga:35000,  hargaTeks:"Rp 35.000",  lokasi:"Surabaya, Jawa Timur" },
  { nama:"Sate Madura Pak Arif",   gambar:"https://i.pinimg.com/736x/c7/4c/f9/c74cf9e1f03318660769c7e12c3b245c.jpg",     rating:4.8, harga:28000,  hargaTeks:"Rp 28.000",  lokasi:"Madura, Jawa Timur" },
  { nama:"Es Campur Pak Kumis",    gambar:"https://i.pinimg.com/736x/aa/1c/33/aa1c33abed62a1f3d90c044cfa8cfc4b.jpg",    rating:4.9, harga:15000,  hargaTeks:"Rp 15.000",  lokasi:"Bandung, Jawa Barat" },
  { nama:"Nasi Padang Ampera",     gambar:"https://i.pinimg.com/736x/32/4e/29/324e293b7036ab182ef052e3997b4f14.jpg",    rating:4.8, harga:25000,  hargaTeks:"Rp 25.000",  lokasi:"Padang, Sumatera Barat" },
  { nama:"Mie Aceh Istimewa",      gambar:"https://i.pinimg.com/736x/fc/ef/20/fcef207c38b18647b396d3ebe707819f.jpg",    rating:4.7, harga:30000,  hargaTeks:"Rp 30.000",  lokasi:"Banda Aceh, Aceh" },
  { nama:"Burger Smash Juicy",     gambar:"https://i.pinimg.com/736x/c0/96/6d/c0966dbf1a92a36bc259620bc6dcf49c.jpg",   rating:4.7, harga:55000,  hargaTeks:"Rp 55.000",  lokasi:"Jakarta Selatan" },
  { nama:"Takoyaki Osaka Style",   gambar:"https://i.pinimg.com/1200x/0c/cc/bb/0cccbb3bd4b81025047cb942ee5e5b1a.jpg",    rating:4.6, harga:20000,  hargaTeks:"Rp 20.000",  lokasi:"Surabaya, Jawa Timur" },
  { nama:"Kepiting Saus Padang",   gambar:"https://i.pinimg.com/736x/b2/7d/55/b27d555f42937e76979c2dbb1275b3b8.jpg",rating:4.8, harga:120000, hargaTeks:"Rp 120.000", lokasi:"Makassar, Sulawesi Selatan" },
  { nama:"Teh Tarik Harum",        gambar:"https://i.pinimg.com/1200x/83/b6/24/83b624c5edaad54d51825ddda3bd9272.jpg",   rating:4.6, harga:12000,  hargaTeks:"Rp 12.000",  lokasi:"Medan, Sumatera Utara" },
  { nama:"Gudeg Yu Djum",          gambar:"https://i.pinimg.com/1200x/19/fe/cb/19fecbe77f0d580864dfdad310eb67a2.jpg",    rating:4.9, harga:20000,  hargaTeks:"Rp 20.000",  lokasi:"Yogyakarta, DIY" },
  { nama:"Martabak Telur Spesial", gambar:"https://i.pinimg.com/736x/9f/1c/fe/9f1cfed9a26135bb90e011c10942beb5.jpg",    rating:4.8, harga:30000,  hargaTeks:"Rp 30.000",  lokasi:"Bandung, Jawa Barat" },
  { nama:"Pudding Mochi Matcha",   gambar:"https://i.pinimg.com/736x/4d/e7/0c/4de70c6ef21cd41dc5876f0205711834.jpg",   rating:4.5, harga:18000,  hargaTeks:"Rp 18.000",  lokasi:"Surabaya, Jawa Timur" }
];

function tampilkanKartu(data) {
  var grid        = document.getElementById("gridKartu");
  var pesanKosong = document.getElementById("pesanKosong");
  var jumlah      = document.getElementById("jumlahHasil");

  jumlah.textContent = data.length;

  if (data.length === 0) {
    grid.innerHTML = "";
    pesanKosong.style.display = "block";
    return;
  }
  pesanKosong.style.display = "none";

  var html = "";
  for (var i = 0; i < data.length; i++) {
    var m = data[i];
    var gambarHTML = '<img src="' + m.gambar + '" alt="' + m.nama + '" onerror="this.style.display=\'none\';this.parentElement.classList.add(\'gambar-fallback\')" />';

    html += '<div class="col-lg-4 col-md-6"><div class="kartu"><div class="kartu-gambar">' + gambarHTML + '</div><div class="kartu-isi"><div class="kartu-nama">' + m.nama + '</div><div class="kartu-lokasi"> ' + m.lokasi + '</div><div class="kartu-bawah"><div class="kartu-rating"><span class="bintang">★</span> ' + m.rating + '</div><div class="kartu-harga">' + m.hargaTeks + '</div></div></div></div></div>';
  }
  grid.innerHTML = html;
}

function cariMakanan() { terapkanFilter(); }
tampilkanKartu(daftarMakanan);





function kirimPesan() {
  var nama  = document.getElementById('inputNama').value.trim();
  var email = document.getElementById('inputEmail').value.trim();
  var pesan = document.getElementById('inputPesan').value.trim();

  if (!nama || !email || !pesan) {
    alert('Mohon lengkapi semua field yang wajib diisi!');
    return;
  }

  var tombol = document.querySelector('.tombol-kirim');
  tombol.innerHTML = 'Mengirim...';
  tombol.disabled = true;

  setTimeout(function() {
    tombol.innerHTML = 'Terkirim!';
    tombol.style.background = 'linear-gradient(135deg,#10b981,#059669)';

    var pesanSukses = document.getElementById('pesanSukses');
    pesanSukses.style.display = 'block';

    document.getElementById('inputNama').value  = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputPesan').value = '';

    setTimeout(function() {
      tombol.innerHTML = 'Kirim Pesan Sekarang';
      tombol.style.background = '';
      tombol.disabled = false;
      pesanSukses.style.display = 'none';
    }, 4000);

  }, 1500);
}
