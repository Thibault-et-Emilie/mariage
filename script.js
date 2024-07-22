document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('open'); // Ajoute ou retire la classe "open" pour afficher ou masquer le menu
});
// chaque bouton du menu, si on clique dessus on enleve la classe"open"du menu
const menuLinks = document.querySelectorAll('#main-nav ul li a');

menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('main-nav').classList.remove('open');
    });
})


//on calcule la largeur du rectangle qui se définit en fonction de l'écran, puis on utilise cette valeur pour faire un demi cercle parfait
 function setMilestoneRadius() {
            const milestone = document.querySelector('.milestone');
            const width = milestone.offsetWidth;
            const borderRadius = width / 2 + 'px';
            milestone.style.borderTopLeftRadius = borderRadius;
            milestone.style.borderTopRightRadius = borderRadius;
        }

        // Appliquer au chargement et au redimensionnement de la fenêtre
        window.addEventListener('load', setMilestoneRadius);
        window.addEventListener('resize', setMilestoneRadius);


document.addEventListener('DOMContentLoaded', (event) => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const close = document.getElementById('close');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    let currentIndex = 0;

    const openLightbox = (index) => {
        currentIndex = index;
        lightboxContent.src = galleryItems[currentIndex].src;
        lightbox.style.display = 'block';
    };

    const closeLightbox = () => {
        lightbox.style.display = 'none';
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        lightboxContent.src = galleryItems[currentIndex].src;
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        lightboxContent.src = galleryItems[currentIndex].src;
    };

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    close.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    next.addEventListener('click', showNext);
    prev.addEventListener('click', showPrev);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            showNext();
        } else if (e.key === 'ArrowLeft') {
            showPrev();
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});
