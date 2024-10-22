
document.getElementById('no').addEventListener('mouseenter', () => {
    const yesBtn = document.getElementById('yes');
    const noBtn = document.getElementById('no');
    const parent = yesBtn.parentNode;

    // Swap positions of yes and no buttons
    if (yesBtn.nextSibling === noBtn) {
        parent.insertBefore(noBtn, yesBtn);
    } else {
        parent.insertBefore(yesBtn, noBtn);
    }
});

document.getElementById('yes').addEventListener('click', () => {
    // Display a romantic message
    document.body.innerHTML = '<h1 style="color: red;">You said YES! ❤️ Let's be together forever!</h1>';
    
    // Optional: Play a sound
    const audio = new Audio('love-song.mp3'); // Make sure to add a sound file in your project
    audio.play();

    // Optional: Redirect to a custom URL (like a surprise video or special page)
    // window.location.href = 'https://your-custom-url.com';

    // Optional: Trigger an animation (like floating hearts)
    startHeartsAnimation(); // I'll explain the animation below
});

// Optional floating hearts animation
function startHeartsAnimation() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        document.body.appendChild(heart);
        animateHeart(heart);
    }
}

function animateHeart(heart) {
    const animationDuration = Math.random() * 2 + 3;
    const size = Math.random() * 30 + 20;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${animationDuration}s`;

    // Remove the heart after animation
    setTimeout(() => heart.remove(), animationDuration * 1000);
}
