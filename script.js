function handleLogin(event) {
    event.preventDefault(); // Mencegah pengiriman formulir
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username); // Simpan username di localStorage
    showPage('dashboard'); // Tampilkan halaman dashboard
}
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.remove('hidden');
            if (pageId === 'dashboard') {
                const username = localStorage.getItem('username');
                document.getElementById('welcome-message').innerText = `Selamat Datang, ${username}!`;
            }
        } else {
            page.classList.add('hidden');
        }
    });
}