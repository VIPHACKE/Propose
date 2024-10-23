
document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const body = document.body;

    // Get the Yes and No buttons
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Add an event listener to the No button for when the user hovers over it
noBtn.addEventListener('mouseenter', () => {
    // Get the parent container of the buttons
    const buttonsDiv = document.querySelector('.buttons');
    
    // Get the index positions of both buttons
    const yesIdx = Array.from(buttonsDiv.children).indexOf(yesBtn);
    const noIdx = Array.from(buttonsDiv.children).indexOf(noBtn);

    // Swap the buttons
    if (yesIdx < noIdx) {
        buttonsDiv.insertBefore(noBtn, yesBtn);
    } else {
        buttonsDiv.insertBefore(yesBtn, noBtn);
    }

    // Action when clicking "Yes"
    yesBtn.addEventListener('click', () => {
        body.innerHTML = "<h1 style='color:red; text-align:center;'>You said YES! ❤️ Let's be together forever!</h1>";

        // Play sound
        const audio = new Audio('love-song.mp3');
        audio.play();

        // Create heart animation
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤️';
            heart.style.left = `${Math.random() * 100}vw`;
            document.body.appendChild(heart);

            // Remove heart after animation ends
            setTimeout(() => heart.remove(), 5000);
        }

        // Optionally redirect after a few seconds
        // setTimeout(() => {
        //     window.location.href = 'https://your-surprise-url.com';
        // }, 5000);
    });
});
