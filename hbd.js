// Ganti background dengan foto yang sudah disiapkan
document.body.style.backgroundImage = "url('Wallpaper.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

// Fungsi untuk menampilkan pesan kedua setelah tombol 📩 pertama kali ditekan
function showMessage() {
    // Menyembunyikan message box pertama
    document.getElementById('messageBox1').style.display = 'none';

    // Menampilkan message box kedua
    document.getElementById('messageBox2').style.display = 'block';

    // Memulai audio setelah tombol ditekan
    var audio = document.getElementById('backgroundAudio');
    audio.play().catch(function(error) {
        console.log("Autoplay gagal, coba putar manual:", error);
    });
}

// Fungsi untuk menampilkan message box ketiga dan menampilkan Message Box 4 setelah tombol "OK" ditekan
function showFinalMessage3() {
    // Menyembunyikan message box kedua
    document.getElementById('messageBox2').style.display = 'none';

    // Menampilkan message box ketiga
    document.getElementById('messageBox3').style.display = 'block';
}

function showFinalMessage4() {
    // Menyembunyikan message box ketiga
    document.getElementById('messageBox3').style.display = 'none';

    // Menampilkan message box keempat
    document.getElementById('messageBox4').style.display = 'block';
}

// Fungsi untuk menampilkan Message Box 5 setelah tombol "YA" di Message Box 4 diklik
function showMessageBox5() {
    // Mendapatkan nama dari input text
    var userName = document.getElementById('userName').value;

    // Regex untuk memeriksa apakah nama hanya terdiri dari huruf, angka, spasi, dan simbol
    var nameRegex = /^[A-Za-z0-9\s!@#$%^&*()_+={}:;"'<>,.?/-]*$/;

    // Cek apakah nama valid
    if (!nameRegex.test(userName)) {
        // Jika nama tidak valid, tampilkan pesan error
        document.getElementById('error-message').style.display = 'block';
    } else {
        // Jika nama valid, sembunyikan pesan error dan tampilkan message box 5
        document.getElementById('error-message').style.display = 'none';

        // Menyembunyikan message box 4 dan menampilkan message box 5
        document.getElementById('messageBox4').style.display = 'none';
        document.getElementById('messageBox5').style.display = 'block';
        
        // Menampilkan nama yang dimasukkan di message box 5
        var messageBox5Text = "🎉Happy Birthday " + userName + "🥳, Semoga panjang umur, sehat selalu, semoga cita-cita tercapai di tahun ini dan menjadi lebih baik di hari selanjutnya!😇";
        document.getElementById('messageBox5').querySelector('.main-text').innerText = messageBox5Text;
    }
}

// Fungsi untuk memeriksa input nama secara real-time dan mengaktifkan tombol "YA" jika valid
document.getElementById('userName').addEventListener('input', function() {
    var userName = this.value;
    var submitButton = document.getElementById('submitButton');
    var nameRegex = /^[A-Za-z0-9\s!@#$%^&*()_+={}:;"'<>,.?/-]*$/;

    // Menonaktifkan tombol jika nama tidak valid
    if (nameRegex.test(userName)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

function showFinalMessage6() {
    // Menyembunyikan message box 5
    document.getElementById('messageBox5').style.display = 'none';

    // Menampilkan message box 6
    document.getElementById('messageBox6').style.display = 'block';
}

// Fungsi untuk menutup message box
function closeMessageBox() {
    document.querySelector('.border-box').style.display = 'none';
}

// Fungsi untuk mengirim pesan ke WhatsApp
function sendMessage() {
    // Mengambil pesan yang ditulis oleh pengguna
    var userMessage = document.getElementById('userMessage').value;

    // Mengecek apakah pesan tidak kosong
    if (userMessage.trim() === "") {
        alert("Pesan tidak boleh kosong!");
        return;
    }

    // Nomor WhatsApp pembuat website (ganti dengan nomor WhatsApp asli)
    var waNumber = "+62 838-6211-6142";  // Ganti dengan nomor WhatsApp asli

    // Menambahkan tanda khusus di awal pesan
    var prefixedMessage = "[Pesan dari Website Ulang Tahun] " + userMessage;

    // Membuat URL untuk mengirim pesan melalui WhatsApp
    var messageUrl = "https://wa.me/" + waNumber + "?text=" + encodeURIComponent(prefixedMessage);

    // Mengarahkan pengguna ke link WhatsApp
    window.open(messageUrl, "_blank");

    // Menutup message box setelah pesan terkirim
    closeMessageBox();
}