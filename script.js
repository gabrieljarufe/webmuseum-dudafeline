const TIME_WAIT_ARROW = 1000;

// garante topo absoluto
window.scrollTo(0, 0);

const intro = document.getElementById('intro');
const startBtn = document.getElementById('startBtn');

const stage1 = document.getElementById('stage1');
const stage2 = document.getElementById('stage2');
const stage3 = document.getElementById('stage3');

const caption1 = document.getElementById('caption1');
const caption2 = document.getElementById('caption2');
const caption3 = document.getElementById('caption3');

const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');

// intro
window.addEventListener('DOMContentLoaded', () => {
    intro.classList.add('ready');
    setTimeout(() => startBtn.classList.add('show'), 1000);
});

// entrar na exposição
startBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
    intro.classList.add('hide');

    setTimeout(() => {
        intro.style.display = 'none';
        stage1.classList.add('show');

    }, 800);

    setTimeout(() => caption1.classList.add('show'), 1400);
    setTimeout(() => arrow1.classList.add('show'), TIME_WAIT_ARROW  );
});

// arrow -> próxima sala
arrow1.addEventListener('click', () => {
    stage2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.body.classList.add('enable-scroll');
    setTimeout(() => arrow2.classList.add('show'), TIME_WAIT_ARROW);
    setTimeout(() => caption2.classList.add('show'), 900);
    setTimeout(() => stage2.classList.add('show'), 200);
});

arrow2.addEventListener('click', () => {
    console.log('clicou');
    stage3.display = 'flex';
    stage3.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => arrow3.classList.add('show'), TIME_WAIT_ARROW);
    setTimeout(() => caption3.classList.add('show'), 900);
    setTimeout(() => stage3.classList.add('show'), 200);
});

