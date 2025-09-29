// Scroll suave para links de âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Cards da equipe: efeito hover
const membros = document.querySelectorAll('.membro');
membros.forEach(membro => {
    membro.addEventListener('mouseenter', () => {
        membro.style.transform = 'translateY(-7px)';
        membro.style.boxShadow = '0 0 25px rgba(255,215,0,0.8)';
        const blockquote = membro.querySelector('blockquote');
        if (blockquote) blockquote.style.color = 'gold';
    });
    membro.addEventListener('mouseleave', () => {
        membro.style.transform = 'translateY(0)';
        membro.style.boxShadow = 'none';
        const blockquote = membro.querySelector('blockquote');
        if (blockquote) blockquote.style.color = '#ccc';
    });
});

// Botões WhatsApp e gerais
document.querySelectorAll('.btn, .btn-whats').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const url = btn.getAttribute('href');
        window.open(url, '_blank');
    });
});
