const words = ["Nyaman", "Murah", "Reliable"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const currentWord = words[wordIndex];
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;

    if (isDeleting) {
        charIndex--;
        // Varied deletion speed for more natural feel
        typeSpeed = 30 + Math.random() * 50;
    } else {
        charIndex++;
        // Varied typing speed for randomness
        typeSpeed = 50 + Math.random() * 50;
    }

    typewriterElement.textContent = currentWord.substring(0, charIndex);

    // Timing logic
    let nextDelay = typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        nextDelay = 1000; // Hold full word for 2 seconds
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        nextDelay = 500; // Small pause before next word
    }

    setTimeout(type, nextDelay);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000); // Initial delay
});
