const btnGarn = document.querySelector('.garn'),
      btnWhole = document.querySelector('.whole'),
      generalAnswer = document.querySelector('.main-window__answer-text'),
      finalAnswer = document.querySelector('.main-window__answer-final'),
      repeatAnswer = document.querySelector('.main-window__answer-repeat'),
      garn = [
          'Драники с сосисками',
          'Пюре с котлетами',
          'Запеченая картошка с колбасками'
      ],
      whole = [
          'Пицца',
          'Чебуреки',
          'Пельмени'
      ];

generalAnswer.style.display = 'none';
generalAnswer.classList.add('animated');
finalAnswer.style.display = 'none';
finalAnswer.classList.add('animated');
repeatAnswer.style.display = 'none';
repeatAnswer.classList.add('animated');

btnGarn.addEventListener('click', () => {
    if (generalAnswer.style.display !== 'block') {
        generalAnswer.style.display = 'block';
        generalAnswer.classList.add('fadeIn');

        setTimeout(() => {
            finalAnswer.textContent = garn[getRandomInRange(0, 2)];
            finalAnswer.classList.add('fadeIn');
            finalAnswer.style.display = 'block';
        }, 2000)

        setTimeout(() => {
            repeatAnswer.classList.add('fadeIn');
            repeatAnswer.style.display = 'block';
        }, 3000)

    } else {
        generalAnswer.style.display = 'none';
        finalAnswer.style.display = 'none';
        repeatAnswer.style.display = 'none';
        generalAnswer.classList.remove('fadeIn');
        finalAnswer.classList.remove('fadeIn');
        repeatAnswer.classList.remove('fadeIn');

        setTimeout(() => {
            generalAnswer.style.display = 'block';
            generalAnswer.classList.add('fadeIn');
        }, 1000)

        setTimeout(() => {
            finalAnswer.textContent = garn[getRandomInRange(0, 2)];
            finalAnswer.classList.add('fadeIn');
            finalAnswer.style.display = 'block';
        }, 2000)

        setTimeout(() => {
            repeatAnswer.classList.add('fadeIn');
            repeatAnswer.style.display = 'block';
        }, 3000)
    }
});

btnWhole.addEventListener('click', () => {
    if (generalAnswer.style.display !== 'block') {
        generalAnswer.style.display = 'block';
        generalAnswer.classList.add('fadeIn');

        setTimeout(() => {
            finalAnswer.textContent = whole[getRandomInRange(0, 2)];
            finalAnswer.classList.add('fadeIn');
            finalAnswer.style.display = 'block';
        }, 2000)

        setTimeout(() => {
            repeatAnswer.classList.add('fadeIn');
            repeatAnswer.style.display = 'block';
        }, 3000)

    } else {
        generalAnswer.style.display = 'none';
        finalAnswer.style.display = 'none';
        repeatAnswer.style.display = 'none';
        generalAnswer.classList.remove('fadeIn');
        finalAnswer.classList.remove('fadeIn');
        repeatAnswer.classList.remove('fadeIn');

        setTimeout(() => {
            generalAnswer.style.display = 'block';
            generalAnswer.classList.add('fadeIn');
        }, 1000)

        setTimeout(() => {
            finalAnswer.textContent = whole[getRandomInRange(0, 2)];
            finalAnswer.classList.add('fadeIn');
            finalAnswer.style.display = 'block';
        }, 2000)

        setTimeout(() => {
            repeatAnswer.classList.add('fadeIn');
            repeatAnswer.style.display = 'block';
        }, 3000)
    }
});



function getRandomInRange(min, max) {                                               // функция для рандомного целого числа в диапазоне
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
