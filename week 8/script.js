// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Scene 1: The First Appearance (Birth)
gsap.fromTo("#object-birth", {
    x: -300, 
    y: 0, 
    opacity: 0
}, {
    x: 0, 
    y: 200, 
    opacity: 1,
    scrollTrigger: {
        trigger: "#scene-1",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false
    }
});

// Scene 2: Growth and Transformation (Wear and Time)
gsap.fromTo("#object-growth", {
    x: 300, 
    y: -100, 
    opacity: 0
}, {
    x: 0, 
    y: 200, 
    opacity: 1,
    scrollTrigger: {
        trigger: "#scene-2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false
    }
});

// Scene 3: Emotional Significance (Glow and Color Shift)
gsap.fromTo("#object-emotional", {
    x: 0,
    y: 200, 
    opacity: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)"
}, {
    x: 0,
    y: -100, 
    opacity: 1,
    backgroundColor: "rgba(255, 255, 0, 0.8)",
    scale: 1.2,
    scrollTrigger: {
        trigger: "#scene-3",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false
    }
});

// Scene 4: Legacy (Morph and Split)
gsap.fromTo("#object-legacy", {
    x: 0,
    y: -100,
    opacity: 0,
    scale: 0.8,
    rotation: 0
}, {
    x: 0,
    y: 200,
    opacity: 1,
    scale: 1.5,
    rotation: 720,
    backgroundColor: "rgba(0, 0, 255, 0.7)",
    scrollTrigger: {
        trigger: "#scene-4",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false
    }
});

// Show Tooltip on Click
function showTooltip(element) {
    const tooltip = element.querySelector('.tooltip');
    tooltip.style.opacity = 1;
    tooltip.style.visibility = 'visible';
    tooltip.innerHTML = element.getAttribute('data-info');
}

// Hide Tooltip when Hovered Out
document.querySelectorAll('.abstract-object').forEach(object => {
    object.addEventListener('mouseleave', function() {
        const tooltip = this.querySelector('.tooltip');
        tooltip.style.opacity = 0;
        tooltip.style.visibility = 'hidden';
    });
});
