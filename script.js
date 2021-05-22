const textElement = document.getElementById('text');
const speedElement = document.getElementById('speed');

const typingText = `“I don't know where I'm going, but I'm on my way.” ― Carl Sandburg`;
let charPosition = 1;
let speed = 100 / speedElement.value;

const typeText = () => {
    textElement.innerText = typingText.slice(0, charPosition);
    charPosition++;

    if (charPosition > typingText.length) {
        charPosition = 0;
    }

    setTimeout(() => {
        typeText();
    }, speed);
}

speedElement.addEventListener('click', () => {
    speed = 300 / speedElement.value;
})

typeText();
