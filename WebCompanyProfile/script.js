document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Terima kasih, pesan Anda telah dikirim!');
        this.reset(); // Mengosongkan form
    } else {
        alert('Harap lengkapi semua bidang!');
    }
});
