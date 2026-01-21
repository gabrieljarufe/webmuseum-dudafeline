window.scrollTo(0, 0);
const hidePaintings = () => {

}

const TIME_WAIT_ARROW = 1000;

const intro = document.getElementById('intro');
const startBtn = document.getElementById('startBtn');

const stage1 = document.getElementById('stage1');
const stage2 = document.getElementById('stage2');
const stage3 = document.getElementById('stage3');
const stage4 = document.getElementById('stage4');
const stage5 = document.getElementById('stage5');

const caption1 = document.getElementById('caption1');
const caption2 = document.getElementById('caption2');
const caption3 = document.getElementById('caption3');
const caption4 = document.getElementById('caption4');
const caption5 = document.getElementById('caption5');

const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');
const arrow4 = document.getElementById('arrow4');
const arrow5 = document.getElementById('arrow5');

// Hide stages

stage2.classList.add('hidden');
stage3.classList.add('hidden');
stage4.classList.add('hidden');
stage5.classList.add('hidden');

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

const showNextPainting = (stage, caption, arrow) => {
    stage.classList.remove('hidden');
    stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => stage.classList.add('show'), 200);
    setTimeout(() => caption.classList.add('show'), 900);
    setTimeout(() => arrow.classList.add('show'), TIME_WAIT_ARROW);
}

arrow1.addEventListener('click', () => {
    document.documentElement.classList.add('enable-scroll');
    showNextPainting(stage2, caption2, arrow2);
});

arrow2.addEventListener('click', () => {
    showNextPainting(stage3, caption3, arrow3);
});

arrow3.addEventListener('click', () => {
    showNextPainting(stage4, caption4, arrow4);
    setTimeout(() => {
        stage4.classList.add('orca-reveal');
    }, 1700);
});

arrow4.addEventListener('click', () => {
    showNextPainting(stage5, caption5, arrow5);
});

// arrow3.addEventListener('click', () => {
//     stage4.classList.remove('hidden');
//     stage4.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     setTimeout(() => stage4.classList.add('show'), 200);
//     setTimeout(() => caption4.classList.add('show'), 900);
// });