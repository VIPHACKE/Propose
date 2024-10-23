
document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const body = document.body;

    // Swap buttons when hovering over "No"
    noBtn.addEventListener('mouseenter', () => {
        const yesPos = yesBtn.getBoundingClientRect();
        const noPos = noBtn.getBoundingClientRect();

        yesBtn.style.position = "absolute";
        noBtn.style.position = "absolute";

        yesBtn.style.top = `${noPos.top}px`;
        yesBtn.style.left = `${noPos.left}px`;

        noBtn.style.top = `${yesPos.top}px`;
        noBtn.style.left = `${yesPos.left}px`;
    });

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
    