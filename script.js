const TIME_WAIT_ARROW = 5000;

const intro = document.getElementById('intro');
const startBtn = document.getElementById('startBtn');

const stage1 = document.getElementById('stage1');
const stage2 = document.getElementById('stage2');
const stage3 = document.getElementById('stage3');
const stage4 = document.getElementById('stage4');
const stage5 = document.getElementById('stage5');
const stage6 = document.getElementById('stage6');
const stage7 = document.getElementById('stage7');
const stage8 = document.getElementById('stage8');
const stage9 = document.getElementById('stage9');
const stage10 = document.getElementById('stage10');
const stage11 = document.getElementById('stage11');

const caption1 = document.getElementById('caption1');
const caption2 = document.getElementById('caption2');
const caption3 = document.getElementById('caption3');
const caption4 = document.getElementById('caption4');
const caption5 = document.getElementById('caption5');
const caption6 = document.getElementById('caption6');
const caption7 = document.getElementById('caption7');
const caption8 = document.getElementById('caption8');
const caption9 = document.getElementById('caption9');
const caption10 = document.getElementById('caption10');
const caption11 = document.getElementById('caption11');

const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');
const arrow4 = document.getElementById('arrow4');
const arrow5 = document.getElementById('arrow5');
const arrow6 = document.getElementById('arrow6');
const arrow7 = document.getElementById('arrow7');
const arrow8 = document.getElementById('arrow8');
const arrow9 = document.getElementById('arrow9');
const arrow10 = document.getElementById('arrow10');
const arrow11 = document.getElementById('arrow11');

const hidePaintings = () => {
    stage2.classList.add('hidden');
    stage3.classList.add('hidden');
    stage4.classList.add('hidden');
    stage5.classList.add('hidden');
    stage6.classList.add('hidden');
    stage7.classList.add('hidden');
    stage8.classList.add('hidden');
    stage9.classList.add('hidden');
    stage10.classList.add('hidden');
    stage11.classList.add('hidden');
}

hidePaintings();

window.addEventListener('DOMContentLoaded', () => {
  prepareImageLoadingTracking();

  intro.classList.add('ready');
  setTimeout(() => startBtn.classList.add('show'), 1000);
});

startBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
    intro.classList.add('hide');

    setTimeout(() => {
        intro.style.display = 'none';
        stage1.classList.add('show');
        revealStageImages(stage1);
    }, 800);

    setTimeout(() => caption1.classList.add('show'), 1400);
    setTimeout(() => arrow1.classList.add('show'), TIME_WAIT_ARROW);
});

const showNextPainting = (stage, caption, arrow) => {
    stage.classList.remove('hidden');
    stage.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
        stage.classList.add('show');
        revealStageImages(stage);
    }, 450);

    setTimeout(() => caption.classList.add('show'), 1050);
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

arrow5.addEventListener('click', () => {
    showNextPainting(stage6, caption6, arrow6);
});

arrow6.addEventListener('click', () => {
    showNextPainting(stage7, caption7, arrow7);
});

arrow7.addEventListener('click', () => {
    showNextPainting(stage8, caption8, arrow8);
});

arrow8.addEventListener('click', () => {
    showNextPainting(stage9, caption9, arrow9);
});

arrow9.addEventListener('click', () => {
    showNextPainting(stage10, caption10, arrow10);
});

arrow10.addEventListener('click', () => {
    showNextPainting(stage11, caption11, arrow11);
});

const markImgAsLoaded = (img) => {
  img.dataset.loaded = '1';
};

const isImgLoaded = (img) => img.complete && img.naturalWidth > 0;

const revealImgWithFade = (img) => {
  // rAF garante que o browser registre o estado opacity:0 antes de virar 1
  requestAnimationFrame(() => img.classList.add('img-reveal'));
};

const prepareImageLoadingTracking = () => {
  document.querySelectorAll('.stage .artwork img').forEach((img) => {
    // se já carregou (cache), marca
    if (isImgLoaded(img)) {
      markImgAsLoaded(img);
      return;
    }

    // marca quando carregar
    img.addEventListener('load', () => markImgAsLoaded(img), { once: true });

    // em erro, não deixe invisível pra sempre
    img.addEventListener('error', () => markImgAsLoaded(img), { once: true });
  });
};

const revealStageImages = (stageEl) => {
  const imgs = stageEl.querySelectorAll('.artwork img');

  imgs.forEach((img) => {
    // já tinha sido revelada? não faz nada
    if (img.classList.contains('img-reveal')) return;

    // se já carregou (ou já foi marcado), revela agora com fade
    if (img.dataset.loaded === '1' || isImgLoaded(img)) {
      revealImgWithFade(img);
      return;
    }

    // se ainda não carregou, espera carregar e revela
    img.addEventListener('load', () => revealImgWithFade(img), { once: true });
    img.addEventListener('error', () => revealImgWithFade(img), { once: true });
  });
};

