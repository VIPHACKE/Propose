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
});
