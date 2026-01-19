const TIME_WAIT_ARROW = 1000;

window.scrollTo(0, 0);

const intro = document.getElementById('intro');
const startBtn = document.getElementById('startBtn');

const stage1 = document.getElementById('stage1');
const stage2 = document.getElementById('stage2');
const stage3 = document.getElementById('stage3');
const stage4 = document.getElementById('stage4');

const caption1 = document.getElementById('caption1');
const caption2 = document.getElementById('caption2');
const caption3 = document.getElementById('caption3');

const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');

// Hide stages 2, 3, and 4 initially
stage2.classList.add('hidden');
stage3.classList.add('hidden');
stage4.classList.add('hidden');

window.addEventListener('DOMContentLoaded', () => {
    intro.classList.add('ready');
    setTimeout(() => startBtn.classList.add('show'), 1000);
});

startBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
    intro.classList.add('hide');

    setTimeout(() => {
        intro.style.display = 'none';
        stage1.classList.add('show');
    }, 800);

    setTimeout(() => caption1.classList.add('show'), 1400);
    setTimeout(() => arrow1.classList.add('show'), TIME_WAIT_ARROW);
});

arrow1.addEventListener('click', () => {
    stage2.classList.remove('hidden');
    stage2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.body.classList.add('enable-scroll');
    setTimeout(() => stage2.classList.add('show'), 200);
    setTimeout(() => caption2.classList.add('show'), 900);
    setTimeout(() => arrow2.classList.add('show'), TIME_WAIT_ARROW);
});

arrow2.addEventListener('click', () => {
    stage3.classList.remove('hidden');
    stage3.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => stage3.classList.add('show'), 200);
    setTimeout(() => caption3.classList.add('show'), 900);
    setTimeout(() => arrow3.classList.add('show'), TIME_WAIT_ARROW);
});