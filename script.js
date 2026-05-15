document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('action-btn');
    if (btn) {
        const badgeFront = btn.querySelector('.front');
        const sounds = ['POW!', 'ZAP!', 'BOOM!', 'WHAM!', 'WOW!', 'SUPER!'];

        btn.addEventListener('click', () => {
            // Change le texte aléatoirement
            badgeFront.textContent = sounds[Math.floor(Math.random() * sounds.length)];
            
            // Animation de rebond
            btn.animate([
                { transform: 'rotate(12deg) scale(1)' },
                { transform: 'rotate(20deg) scale(1.2)' },
                { transform: 'rotate(12deg) scale(1)' }
            ], { duration: 200 });
        });
    }
});