document.addEventListener("DOMContentLoaded", () => {
    const glitchElements = document.querySelectorAll(".glitch");

    function applyRandomGlitch() {
        glitchElements.forEach(element => {
            let randomDelay = Math.random() * 2; 
            let randomScale = 1 + Math.random() * 0.1; 
            let randomRotation = (Math.random() - 0.5) * 10; 

            element.style.transform = `scale(${randomScale}) rotate(${randomRotation}deg)`;
            element.style.animationDelay = `${randomDelay}s`;
        });

        setTimeout(applyRandomGlitch, Math.random() * 1000 + 500); 
    }

    applyRandomGlitch();
});
