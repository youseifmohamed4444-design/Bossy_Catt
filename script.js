const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionText = document.getElementById('question-text');
const mainGif = document.getElementById('main-gif');
const realPhotos = document.getElementById('real-photos');
const music = document.getElementById('bg-music');

function escape() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

noBtn.addEventListener('mouseover', escape);

noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    escape();
});

yesBtn.addEventListener('click', () => {
    music.play();
    if (questionText.innerText === "Do you love me?") {
        questionText.innerText = "Do you need me?";
        mainGif.src = "think.png";
        noBtn.style.position = "static"; 
    } else {
        questionText.innerText = "I knew it! 😍";
        mainGif.style.display = "none";
        realPhotos.style.display = "flex"; 
        noBtn.style.display = "none";
        yesBtn.style.display = "none";
    }
});