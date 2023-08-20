const background = document.getElementById('background');
const ashuresBlue = document.getElementById('ashures-blue');
const ashuresPink = document.getElementById('ashures-pink');

function handleMouseMove(event) {
    moveBackground(event);
    moveHeader(event);
}

function moveBackground(event) {
    const mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    const totalMoveX = -mouseX * 1 + 50;
    const totalMoveY = -mouseY * 1 + 50;
    
    background.style.backgroundPosition = `${totalMoveX}% ${totalMoveY}%`;
    background.style.filter = `blur(${Math.abs(mouseX)}px)`;
}

function moveHeader(event) {
    const mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (event.clientY / window.innerHeight - 0.5) * 2;

    

    ashuresBlue.style.margin = `${-mouseY * .4}% ${-mouseX * .4}%`;
    ashuresPink.style.margin = `${mouseY * .4}% ${mouseX * .4}%`;
}