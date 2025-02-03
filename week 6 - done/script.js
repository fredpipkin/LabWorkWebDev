const canvasContainer = document.getElementById('canvas-container');
const shapeSelect = document.getElementById('shape');
const colorInput = document.getElementById('color');
const gradientCheckbox = document.getElementById('gradient');
const sizeInput = document.getElementById('size');
const ditherInput = document.getElementById('dither');
const lofiCheckbox = document.getElementById('lofi');
const generateButton = document.getElementById('generate');

function createTile(x, y, size, color, shape, gradient) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.left = `${x}px`;
    tile.style.top = `${y}px`;
    tile.style.width = `${size}px`;
    tile.style.height = `${size}px`;

    if (gradient) {
        tile.style.background = `linear-gradient(${Math.random() * 360}deg, ${color}, #ffffff)`;
    } else {
        tile.style.backgroundColor = color;
    }

    if (shape === 'circle') {
        tile.style.borderRadius = '50%';
    } else if (shape === 'triangle') {
        tile.style.width = 0;
        tile.style.height = 0;
        tile.style.borderLeft = `${size / 2}px solid transparent`;
        tile.style.borderRight = `${size / 2}px solid transparent`;
        tile.style.borderBottom = `${size}px solid ${color}`;
        tile.style.backgroundColor = 'transparent';
    }

    // Add animation effects
    tile.style.transition = 'transform 0.3s ease-in-out';
    tile.addEventListener('mouseenter', () => {
        tile.style.transform = 'scale(1.2) rotate(5deg)';
    });
    tile.addEventListener('mouseleave', () => {
        tile.style.transform = 'scale(1) rotate(0deg)';
    });

    canvasContainer.appendChild(tile);
}

function generatePattern() {
    canvasContainer.innerHTML = '';
    const shape = shapeSelect.value;
    const color = colorInput.value;
    const size = parseInt(sizeInput.value, 10);
    const gradient = gradientCheckbox.checked;

    const cols = Math.ceil(canvasContainer.offsetWidth / size);
    const rows = Math.ceil(canvasContainer.offsetHeight / size);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * size;
            const y = row * size;
            createTile(x, y, size, color, shape, gradient);
        }
    }

    applyDitherEffect();
    if (lofiCheckbox.checked) {
        canvasContainer.classList.add('lofi');
    } else {
        canvasContainer.classList.remove('lofi');
    }

    addGlitchEffect();
}

function applyDitherEffect() {
    const tiles = document.querySelectorAll('.tile');
    const ditherSpeed = parseFloat(ditherInput.value);

    tiles.forEach(tile => {
        const randomDelay = Math.random() * ditherSpeed;
        tile.style.animationDuration = `${5 + randomDelay}s`;
        tile.style.animationDelay = `${randomDelay}s`;
    });
}

function addGlitchEffect() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        setInterval(() => {
            if (Math.random() > 0.9) { 
                tile.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px) rotate(${Math.random() * 10 - 5}deg)`;
            }
        }, 500);
    });
}

generateButton.addEventListener('click', generatePattern);
